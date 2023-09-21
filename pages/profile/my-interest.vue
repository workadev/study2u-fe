<template>
  <div class="my-interest">
    <v-container class="d-flex flex-column">
      <div class="title-content">
        My Interests
      </div>
      <div class="d-flex wrap-content">
        <div class="content-left">
          <div class="d-flex flex-wrap wrap-my-interest">
            <div class="chip-square" v-for="(item, index) in myInterest" :key="index">
              {{ item.name }}
              <v-btn icon class="btn-delete" @click="clickDelete(item)">
                <img src="@/assets/icons/delete.svg">
              </v-btn>
            </div>
          </div>
          <div class="d-flex flex-column wrap-btn-action mt-5">
            <v-btn
              elevation
              dark
              height="58"
              width="140"
              color="#5EC9AA"
              class="btn-done"
              :loading="loading"
              @click="clickDone()"
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
              {{ item.name }}
            </div>
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
      myInterest: [],
      loading: false
    }
  },
  computed: {
    listInterest() {
      return this.$store.state.interests.listInterest
    }
  },
  mounted() {
    this.$store.dispatch("interests/getListInterests")
  },
  methods: {
    clickDelete(value) {
      this.myInterest = this.myInterest.filter((str) => {
        return str != value;
      })
    },
    chipDisabled(value) {
      let checkValue = this.myInterest.filter((str) => {
        return str.name == value.name
      })

      if (checkValue.length != 0) {
        return true
      }
      return false
    },
    addInterest(value) {
      this.myInterest.push(value)
    },
    async clickDone() {
      let interestsId = []
      this.myInterest.forEach(element => {
        interestsId.push(element.id)
      });
      if (!this.loading) {
        this.loading = true
        await this.$axios.put("users/v1/current/update/interests", { user: interestsId }, this.token)
        .then((res) => {
          this.$store.dispatch("snackbar/getSnackbar", {
            show: true,
            color: "#74b816",
            icon: "mdi-check",
            title: "Save Interests Success",
            message: res.data.message
          })
          this.$router.push("/profile")
        })
        .catch(err => {
          this.$store.dispatch("snackbar/getSnackbar", {
            show: true,
            color: "#ff004a",
            icon: "mdi-close",
            title: "Save Interests Failed",
            message: err.response ? err.response.data.message : err
          })
        })
        this.loading = false
      }
    }
  },
}
</script>

<style lang="scss">
  .my-interest {
    .container {
      padding-top: 133px;
      padding-bottom: 125px;

      .title-content {
        font-size: 36px;
        font-weight: 700;
      }

      .content-right {
        margin-top: 30px;
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
          margin: 20px -16px 0;
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
    }
  }

  @media screen and(max-width: 700px) {
    .my-interest {
      .wrap-content {
        flex-wrap: wrap-reverse;
      }

      .container {
        .content-left {
          max-width: 100%;
          margin-right: 0px;
        }
      }
    }
  }
</style>