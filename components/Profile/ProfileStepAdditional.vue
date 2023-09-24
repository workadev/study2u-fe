<template>
  <div class="profile-step-additional">
    <div class="wrap-photo">
      <div class="default-img" :style="{background: user.bgAvatar}">
        <img v-if="imgPreview" :src="imgPreview">
        <img v-else-if="user.avatar" :src="user.avatar">
        <div v-else>
          {{ user.first_name.charAt(0).toUpperCase() }}
        </div>
      </div>
      <input
        id="photo"
        type="file"
        hidden
        @change="inputFile"
      >
      <div class="mt-3">
        <label for="photo" class="btn-upload">
          Update Photo
        </label>
      </div>
    </div>
    <v-select 
      class="mt-12"
      :items="listStudy"
      hide-details
      placeholder="Current Education"
      item-text="name"
      item-value="id"
      v-model="form.current_education_id"
    >
      <template v-slot:append>
        <img width="21" src="@/assets/icons/chevron-down.svg">
      </template>
    </v-select>
    <v-text-field
      hide-details
      height="38"
      placeholder="Current School"
      v-model="form.current_school"
      class="mt-10 pt-0"
    />
    <div class="d-flex wrap-content mt-12">
      <div class="content-left">
        <h6 class="regular-h6">Interests</h6>
        <div>
          <div class="d-flex flex-wrap wrap-my-interest">
            <div class="chip-square" v-for="(item, index) in interests" :key="index">
              {{ item.name }}
              <v-btn icon class="btn-delete" @click="clickDelete(item)">
                <img src="@/assets/icons/delete.svg">
              </v-btn>
            </div>
          </div>
        </div>
      </div>
      <div class="content-right">
        <div class="title-add">
          <img src="@/assets/icons/add.svg" class="mr-3"> Add interest
        </div>
        <div class="d-flex flex-wrap wrap-list-add">
          <div 
            class="chip-square" 
            :class="{disabled: chipDisabled(item)}"
            v-for="(item, index) in listInterest" 
            :key="index"
            @click="addInterest(item)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
    <div class="mt-16 text-center">
      <v-btn
        height="58"
        width="189"
        elevation
        color="#E75982"
        class="btn-next"
        @click="$emit('nextStep', 3)"
      >
        NEXT
      </v-btn>
    </div>
    <v-btn 
      height="fit-content"
      width="fit-content"
      class="px-0 mt-16 ml-3"
      text
      @click="$emit('nextStep', 1)"
    >
      <v-icon size="35" class="mr-1">mdi-chevron-left</v-icon> 
      <h6 class="regular-h6">Back</h6>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: ["form", "interests"],
  data() {
    return {
      imgPreview: null,
      photo: null,
      fileUpload: null
    }
  },
  computed: {
    user() {
      return this.$store.state.login.user
    },
    listStudy() {
      return this.$store.state.study.listStudy
    },
    listInterest() {
      return this.$store.state.interests.listInterest
    },
  },
  methods: {
    async inputFile(evt) {
      let src = null
      if (evt.target.files[0]) {
        src = URL.createObjectURL(evt.target.files[0])
        this.photo = evt.target.files[0]
      } else {
        this.photo = null
      }
      this.imgPreview = src
      this.fileUpload = null
      if (this.photo) {
        await this.$axios.get(`v1/presign`, { params: { filename: evt.target.files[0].name } })
        .then((res) => {
          if (res.status == 200) {
            this.fileUpload = res.data.fields
            this.fileUpload = {
              ...this.fileUpload, file: this.photo
            }
            this.form.avatar_id = this.fileUpload.key.split("cache/")[1]
          }
        })
        .catch(err => {})
      }
    },
    clickDelete(value) {
      this.interests = this.interests.filter((str) => {
        return str != value;
      })
      this.$emit("handleChange", this.interests)
    },
    chipDisabled(value) {
      let checkValue = this.interests.filter((str) => {
        return str.name == value.name
      })

      if (checkValue.length != 0) {
        return true
      }
      return false
    },
    addInterest(value) {
      this.interests.push(value)
      this.$emit("handleChange", this.interests)
    },
  },
}
</script>

<style lang="scss">
  .profile-step-additional {
    .content-right {
      margin-top: 30px;
      width: inherit;
      max-width: 65%;

      .wrap-list-add {
        margin-top: 13px;
        margin-left: 33px;

        .chip-square {
          margin: 5px 4px;
          cursor: pointer;
          transition: all .2s;
        }

        .disabled {
          opacity: .3;
          pointer-events: none;
          cursor: unset;
        }
      }

      .title-add {
        font-size: 20px;
        display: flex;
      }
    }
    .content-left {
      width: 35%;
      margin-right: 20px;

      .wrap-btn-action {
        width: fit-content;
        align-items: center;

        a {
          color: #000;
          text-decoration: none;
          margin-top: 13px;
        }

        .btn-done {
          border-radius: 16px;
          font-weight: 700;
          font-size: 20px;

          circle {
            color: #fff;
          }
        }
      }

      .wrap-my-interest {
        margin: 6px -16px 0;
        min-height: 15em;
        align-content: flex-start;

        .chip-square {
          margin: 15px 16px;

          .btn-delete {
            position: absolute;
            right: 0px;
            bottom: 0px;
            margin: -20px -18px;
          }
        }
      }
    }
    .wrap-photo {
      display: inline-flex;
      flex-flow: column;
      align-items: center;

      img {
        width: 250px;
        height: 250px;
        border-radius: 50%;
      }

      .default-img {
        width: 250px;
        height: 250px;
        border-radius: 50%;
        background: #F4BF28;
        font-size: 150px;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;

        div {
          color: #fff;
        }
      }

      .btn-upload {
        font-size: 20px;
        cursor: pointer;
      }
    }
  }

  @media screen and(max-width: 700px) {
    .profile-step-additional {
      .wrap-content {
        flex-wrap: wrap-reverse;
      }
    }
  }
</style>