<template>
  <div class="my-interest">
    <v-container class="d-flex">
      <div class="content-left">
        <div class="title-content">
          My Interests
        </div>
        <div class="d-flex flex-wrap wrap-my-interest">
          <div class="chip-square" v-for="(item, index) in myInterest" :key="index">
            {{ item }}
            <v-btn icon class="btn-delete" @click="clickDelete(item)">
              <img src="@/assets/icons/delete.svg">
            </v-btn>
          </div>
        </div>
        <div class="d-flex flex-column wrap-btn-action">
          <v-btn
            elevation
            dark
            height="58"
            width="140"
            color="#5EC9AA"
            class="btn-done"
            @click="$router.push('/profile')"
          >
            Done
          </v-btn>
          <nuxt-link to="/profile">
            cancel
          </nuxt-link>
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
            {{ item }}
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myInterest: ["Pre-Uni", "Law"],
      listInterest: [
        "Pre-Uni", "Law", "Business", "Digital Media, Design & Comms",
        "Technology & Innovation", "Hospitality, Culinary & Tourism",
        "Psychology", "Early Childhood"
      ]
    }
  },
  methods: {
    clickDelete(value) {
      this.myInterest = this.myInterest.filter((str) => {
        return str != value;
      })
    },
    chipDisabled(value) {
      let checkValue = this.myInterest.filter((str) => {
        return str == value
      })

      if (checkValue.length != 0) {
        return true
      }
      return false
    },
    addInterest(value) {
      this.myInterest.push(value)
    }
  },
}
</script>

<style lang="scss">
  .my-interest {
    .container {
      padding-top: 133px;
      padding-bottom: 125px;

      .content-right {
        margin-top: 90px;
        width: inherit;

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
        max-width: 300px;
        width: 100%;

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
          }
        }


        .wrap-my-interest {
          margin: 20px -16px 0;
          min-height: 20em;
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

        .title-content {
          font-size: 36px;
          font-weight: 700;
        }
      }
    }
  }
</style>