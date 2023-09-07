<template>
  <div class="page-profile">
    <v-container class="profile-container">
      <div class="info-profile">
        <img width="250" src="@/assets/images/mini avatar.png">
        <div class="user-name">
          MARIJKE OEMAR
        </div>
        <div class="w-100 mt-6 info-contact">
          <div>10 March 2008</div>
          <div>marijkeoemar@gmail.com</div>
          <div>+66 1023 323 230</div>
        </div>
        <div class="w-100 info-study">
          <div class="mb-3">
            <b>Current:</b>
          </div>
          <div>The British International School</div>
          <div>Kuala Lumpur</div>
        </div>
        <div class="w-100 mt-7 mb-13">
          <nuxt-link class="btn-edit" to="">
            <img class="mr-3" src="@/assets/icons/icon-edit.svg">
            Edit my profile
          </nuxt-link>
        </div>
        <v-btn elevation color="#5EC9AA" height="58" width="100%" class="btn-change-password">
          <img src="@/assets/icons/green-lock.svg" class="mr-10"> Change Password
        </v-btn>
      </div>
      <div class="info-right">
        <div class="wrap-info">
          <div>
            <b>My Shortlist:</b>
          </div>
          <!-- <div v-if="shortlist.length == 0 && !editShortlist" class="mt-4">
            Oops, you have not select any institution. <nuxt-link to="">Go here</nuxt-link>!
          </div> -->
          <div class="mt-1 d-flex flex-wrap wrap-option-shortlist">
            <div 
              class="d-flex flex-column item-option-shortlist" 
              v-for="(item, index) in optionShortlist" 
              :key="index"
            >
              <img width="130" height="130" class="ml-6" src="@/assets/images/BACedu_logofav2 1 (1).png">
              <label class="container-checkbox mt-1">{{ item.name }}
                <input type="checkbox" v-model="shortlist" :value="item.name">
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <div class="my-11">
            <v-btn text class="btn-edit px-0" height="fit-content">
              <img class="mr-3" src="@/assets/icons/icon-edit.svg">
              Edit Shortlist
            </v-btn>
          </div>
          <v-btn
            elevation
            color="#5EC9AA"
            height="58"
            width="256"
            class="btn-compare"
            :disabled="shortlist.length < 2"
            @click="$router.push('/comparison')"
          >
            Compare Selected
          </v-btn>
        </div>
        <div class="wrap-info mt-12">
          <div>
            <b>My Interests:</b>
          </div>
          <!-- <div class="mt-4">
            Add something you’re interested <nuxt-link to="">here.</nuxt-link>
          </div> -->
          <div class="d-flex flex-wrap wrap-item-interest">
            <div
              v-for="(item, index) in interestList"
              :key="index"
              class="chip-square"
            >
              {{ item.name }}
            </div>
          </div>
          <div class="mt-11">
            <nuxt-link class="btn-edit" to="/profile/my-interest">
              <img class="mr-3" src="@/assets/icons/icon-edit.svg">
              Edit Interests
            </nuxt-link>
          </div>
        </div>
        <div class="wrap-info mt-12">
          <div>
            <b>Recommendation</b>
          </div>
          <!-- <div class="mt-4">
            Sorry we are unable to show you any recommendation yet.<br>
            Please  add your interests first.
          </div> -->
          <div class="d-flex flex-wrap wrap-item-interest mb-2">
            <div
              v-for="(item, index) in interestList"
              :key="index"
              class="chip-square"
            >
              {{ item.name }}
            </div>
          </div>
          <div class="d-flex flex-wrap wrap-item-recommendation">
            <div 
              v-for="(item, index) in recommendationList" 
              :key="index"
              class="item-recommendation"
            >
              <img width="150" height="150" src="@/assets/images/BACedu_logofav2 1 (1).png">
              <div class="name-recommendation">{{ item.name }}</div>
              <div class="mt-2">{{ item.type }}</div>
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
      shortlist: [],
      interestList: [
        { name: "Pre-Uni" },
        { name: "Law" }
      ],
      recommendationList: [
        { name: "Institution Name", type: "University, Public" },
        { name: "Institution Name", type: "College, Public" },
        { name: "Institution Name", type: "College, Private" },
        { name: "Institution Name", type: "University, Public" },
      ],
      editShortlist: false,
      optionShortlist: [
        { name: "Brickfields Asia College" },
        { name: "Long Title College or Univesity Name" },
        { name: "Brickfields Asia Collegee" },
      ]
    }
  },
}
</script>

<style lang="scss">
  .page-profile {
    .profile-container {
      padding-top: 83px;
      padding-bottom: 50vh;
      display: flex;

      .btn-compare:disabled {
        background: #CECECE !important;
        color: #fff !important;
      }

      .info-right {
        padding: 23px 0 20px;

        .btn-compare {
          font-size: 20px;
          color: #fff;
          font-weight: 700;
          border-radius: 16px;
        }

        .wrap-info {
          font-size: 20px;

          .wrap-item-recommendation {
            margin: 0 -30px;

            .item-recommendation {
              display: flex;
              flex-flow: column;
              width: fit-content;
              margin: 21px 40px;

              .name-recommendation {
                font-weight: 700;
                margin-top: 11px;
              }
            }
          }


          .wrap-item-interest {
            margin-left: 6px;
            margin-top: 13px;
          }

          .chip-square {
            margin: 4px;
          }

          .wrap-option-shortlist {
            margin: -20px -10px;

            .item-option-shortlist {
              margin: 20px;
              max-width: 232px;
            }
          }


          a {
            color: #000;
          }
        }
      }

      .btn-edit {
        font-size: 16px;
        text-decoration: none;
        color: #000;
        display: flex;
        width: fit-content;
        align-items: center;
      }

      .info-profile {
        padding: 23px 25px 20px;
        width: fit-content;
        display: flex;
        flex-flow: column;
        align-items: center;
        width: 100%;
        max-width: 368px;
        margin-right: 42px;

        .btn-change-password {
          font-size: 20px;
          color: #fff;
          font-weight: 700;
          border-radius: 16px;
        }

        .info-study {
          font-size: 20px;
          margin-top: 42px;
        }

        .info-contact {
          font-size: 20px;

          div {
            margin-bottom: 7px;
          }

          div:last-child {
            margin-bottom: 0px;
          }
        }

        .user-name {
          font-size: 36px;
          font-weight: 700;
          color: #B2304A;
          line-height: 46.58px;
          margin-top: 14px;
        }
      }
    }
  }

  @media screen and(max-width: 700px) {
    .page-profile {
      .profile-container {
        flex-wrap: wrap;
        justify-content: center;

        .info-right {
          width: 100%;
        }

        .info-profile {
          max-width: none;
          padding-left: 0px;
          padding-right: 0px;
          margin-right: 0px;
        }
      }
    }
  }
</style>