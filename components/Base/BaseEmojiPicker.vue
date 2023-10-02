<template>
	<div class="emoji_picker">
		<v-text-field 
			outlined
			height="49px"
			hide-details
			class="mx-3 my-3 search-emoji"
			v-model="search"
			placeholder="search"
		/>
		<div class="picker_container">
			<div 
				v-if="Object.keys(tempList[category]).length != 0"
				class="category" 
				v-for="category in Object.keys(tempList)" 
				:key="`category_${category}`"
			>
				<span>{{ category }}</span>
				<div class="emojis_container">
					<button 
						@click="handleEmojiClick($event, emoji)" 
						v-for="(emoji, index) in tempList[category]" 
						:key="`emoji_${index}`"
					>
						{{ emoji }}
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
/**
 * Emoji Picker
 * Load emojis and  categories from the json file 'emojis-data.json'
 * Events:
 *  - 'emoji_click' event is fires when the user clicks on an emoji. The emoji is sent as event payload.
 * Props:
 * 	- 'show_arrow' boolean to show or not the arrow at the bottom of the picker. True by default.
 */

import data from '@/assets/js/emojis-data.json';

export default {
	props: {
		show_arrow: {
			type: Boolean,
			required: false,
			default: true
		}
	},
	data() {
		return {
			search: "",
			tempList: data
		}
	},
	computed: {
		categories() {
			return Object.keys(this.tempList);
		},
		category_emojis: () => (category) => {
			return Object.values(data[category]);
		}
	},
	watch: {
		search(newVal) {
			let setData = {}
			if (newVal) {
				Object.keys(data).forEach(category => {
					setData = {
						...setData, [category]: {}
					}
					Object.keys(data[category]).forEach(key => {
						if (key.replace(/_/g, " ").search(newVal.toLowerCase()) != -1) {
							setData[category] = {
								...setData[category], [key]: data[category][key]
							}
						}
					});
				});
				this.tempList = setData
			} else {
				this.tempList = data
			}
		}
	},
	methods: {
		handleEmojiClick(e, emoji) {
			e.preventDefault();
			this.$emit('emoji_click', emoji);
			this.$emit("close")
		}
	}
}
</script>

<style lang="scss">
.emoji_picker {
	display: flex;
	flex-direction: column;
	width: 20rem;
	height: 20rem;
  bottom: 0px;

	.search-emoji {
		max-height: 49px;

		.v-input__slot {
      min-height: 49px;
      border-radius: 12px;
      padding: 9px 20px 14px !important;

      fieldset {
        border-color: #000000;
      }
    }
	}
}

.emoji_picker {
	box-shadow: 0 0 5px 1px rgba(0, 0, 0, .0975);
}

.emoji_picker,
.picker_container
{
	border-radius: 0.5rem;
	background: white;
}

.picker_container
{
	position: relative;
	padding: 0.2rem 1rem 1rem;
	overflow: auto;
	z-index: 1;
}

.category
{
	display: flex;
	flex-direction: column;
	margin-bottom: 1rem;
	color: rgb(169, 169, 169);
}

.emojis_container
{
	display: flex;
	flex-wrap: wrap;
}

.category button
{
	margin: 0.5rem;
	margin-left: 0;
	background: inherit;
	border: none;
	font-size: 1.75rem;
	padding: 0;
}
</style>