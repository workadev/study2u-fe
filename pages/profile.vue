<template>
  <div class="page-profile">
    <v-container class="py-5 d-flex">
      <div class="content-left">
        <div class="photo-profile">
          <div class="wrap-img">
            <img class="photo" :src="photoProfile ? photoProfile : require('@/assets/images/Ellipse 1 4.png')">
            <div class="change-photo">
              <v-btn
                icon
                height="32"
                width="32"
                color="white"
                class="btn-icon"
                onclick="javascript:document.getElementById('uploadPhoto').click()"
              >
                <img width="16" height="16px" src="@/assets/icons/camera.svg">
              </v-btn>
              <input
                type="file"
                hidden
                id="uploadPhoto"
                accept=".jpg, .jpeg, .png"
                @change="handleUpload"
              >
            </div>
          </div>
        </div>
        <div class="personal-info">
          <div class="d-flex justify-space-between align-center wrap-title">
            <div class="regular-title">Personal Info</div>
            <v-btn
              text
              height="fit-content"
              min-width="fit-content"
              class="px-0"
              @click="isEdit = !isEdit"
            >
              <div v-if="isEdit" class="regular-subtitle">Cancel</div>
              <img v-else src="@/assets/icons/cog-8-tooth.svg">
            </v-btn>
          </div>
          <div class="wrap-input">
            <div class="regular-subtitle mb-1">First name</div>
            <v-text-field
              hide-details
              outlined
              class="profile-input"
              v-model="form.firstName"
              :disabled="!isEdit"
            />
          </div>
          <div class="wrap-input">
            <div class="regular-subtitle mb-1">Last name</div>
            <v-text-field
              hide-details
              outlined
              class="profile-input"
              v-model="form.lastName"
              :disabled="!isEdit"
            />
          </div>
          <div class="wrap-input">
            <div class="regular-subtitle mb-1">Headline</div>
            <v-text-field
              hide-details
              outlined
              class="profile-input"
              v-model="form.headline"
              :disabled="!isEdit"
            />
          </div>
          <div class="wrap-input">
            <div class="regular-subtitle mb-1">About me</div>
            <v-textarea
              hide-details
              outlined
              class="profile-textarea"
              v-model="form.about"
              :disabled="!isEdit"
            />
          </div>  
          <div v-if="isEdit" class="d-flex wrap-btn">
            <v-btn class="btn-lg btn-primary semibold-subtitle" elevation>
              Save Changes
            </v-btn>
          </div>
        </div>
      </div>
      <div class="content-right">
        <img class="banner-profile" width="100%" src="@/assets/images/background/bg-profile.svg">
        <div class="contact-info">
          <div class="d-flex justify-space-between align-center info-title">
            <div class="regular-title">Contact Info</div>
            <v-btn
              text
              height="fit-content"
              min-width="fit-content"
              class="px-0"
              @click="isEditInfo = !isEditInfo"
            >
              <div v-if="isEditInfo" class="regular-subtitle">Cancel</div>
              <img v-else src="@/assets/icons/cog-8-tooth.svg">
            </v-btn>
          </div>
          <div class="wrap-input mt-3">
            <div class="regular-subtitle mb-1">Email*</div>
            <v-text-field
              hide-details
              outlined
              class="profile-input"
              :disabled="!isEditInfo"
              v-model="formContact.email"
            />
          </div>
          <div class="wrap-input mt-2">
            <div class="regular-subtitle mb-1">Password*</div>
            <v-text-field
              hide-details
              outlined
              class="profile-input"
              :disabled="!isEditInfo"
              v-model="formContact.password"
              :type="showPassword ? 'text' : 'password'"
            >
              <template v-slot:append>
                <v-icon color="#1A334F" @click="showPassword = !showPassword">
                  {{ showPassword ? "mdi-eye" : "mdi-eye-off" }}
                </v-icon>
              </template>
            </v-text-field>
          </div>
          <div class="wrap-input mt-2">
            <div class="regular-subtitle mb-1">Phone number</div>
            <v-text-field
              hide-details
              outlined
              class="profile-input"
              :disabled="!isEditInfo"
              v-model="formContact.phone"
            />
          </div>
          <div class="wrap-input mt-2">
            <div class="regular-subtitle mb-1">Address</div>
            <v-textarea
              hide-details
              outlined
              class="profile-textarea"
              :disabled="!isEditInfo"
              v-model="formContact.address"
            />
          </div>
          <div class="wrap-input mt-2">
            <div class="regular-subtitle mb-1">Birthday</div>
            <v-menu
              v-model="menuDatepicker"
              :close-on-content-click="false"
              content-class="menu-datepicker"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  hide-details
                  outlined
                  class="profile-input"
                  :value="computedDateFormattedMomentjs"
                  :disabled="!isEditInfo"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  clearable
                  @click:clear="formContact.birthday = null"
                >
                  <template v-slot:append>
                    <img src="@/assets/icons/calendar.svg">
                  </template>
                </v-text-field>
              </template>
              <v-date-picker
                v-model="formContact.birthday"
                @change="menuDatepicker = false"
              ></v-date-picker>
            </v-menu>
          </div>
          <div v-if="isEditInfo" class="d-flex wrap-btn">
            <v-btn class="btn-lg btn-primary semibold-subtitle" elevation>
              Save Changes
            </v-btn>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  data() {
    return {
      isEdit: false,
      isEditInfo: false,
      menuDatepicker: false,
      showPassword: false,
      form: {
        firstName: "Jhony Arama",
        lastName: "Kumar",
        headline: "Becoming a Quality Programmer",
        about: "I am a student filled with passion and enthusiasm to develop myself in the academic world. My dream is to be a part of an inspirational university environment where I can learn, collaborate, and grow as an individual."
      },
      formContact: {
        email: "jhony.arama@dummymail.com",
        password: "*********",
        phone: "08111222333432",
        address: `25 County Road 84, Santa Fe
New York
87506
United States`,
        birthday: "2000-01-27",
      },
      photoProfile: ""
    }
  },
  computed: {
    computedDateFormattedMomentjs() {
      return this.formContact.birthday ? moment(this.formContact.birthday).format('DD / MMMM / YYYY') : ''
    },
  },
  methods: {
    handleUpload(e) {
      this.photoProfile = ""
      if (e.target.files[0]) {
        const {files} = e.target
        if (files[0].size > 1000000) {
          let dataSnackbar = {
            title: "Gagal Unggah Foto",
            message: "Besar file maksimum adalah 1MB",
            color: "#de1b1b",
            icon: "mdi-close-circle-outline",
            show: true
          }
          this.$store.dispatch("snackbar/getSnackbar", dataSnackbar)
          document.getElementById('uploadPhoto').value = ''
        } else {
          let reader = new FileReader()
          let _this = this
          reader.onload = function() {
            _this.photoProfile = reader.result
          }
          reader.readAsDataURL(files[0])
        }
      }
    },
  },
}
</script>

<style lang="scss">
  .page-profile {
    background: $color-lightest-grey;

    .wrap-input {
      margin-top: 10px;

      .profile-input {
        font-size: 12px;

        .v-input__slot {
          min-height: 44px !important;
        }

        .v-icon.v-icon {
          font-size: 22px;
        }
      }
      
      .profile-textarea {
        font-size: 12px;

        textarea {
          resize: none;
          height: 154px;
        }
      }
    }

    .content-right {
      width: 100%;
      margin-left: 16px;
      display: flex;
      flex-flow: column;
      
      .wrap-input {
        .profile-textarea {
          textarea {
            height: 94px;
          }
        }
      }

      .regular-subtitle {
        color: $color-dark-grey;
      }

      .contact-info {
        background: $color-white;
        padding: 23px 16px 16px;
        margin-top: 8px;
        border-radius: 8px;

        .wrap-btn {
          justify-content: end;
          padding-top: 16px;
          margin-top: 12px;
          border-top: 1px solid $color-light-grey;
        }

        .info-title {
          padding-bottom: 24px;
          border-bottom: 1px solid $color-light-grey;
        }
      }

      .banner-profile {
        border-radius: 8px;
        object-fit: cover;
        width: 100%;
        height: 194px;
      }
    }

    .content-left {
      width: 100%;
      max-width: 270px;
      background: $color-white;
      border: 1px solid $color-light-grey;
      border-radius: 8px;

      .regular-title {
        color: $color-black;
      }

      .regular-subtitle {
        color: $color-dark-grey;
      }

      .personal-info {
        padding: 33px 16px 10px;

        .wrap-btn {
          justify-content: end;
          margin-top: 10px;
        }

        .wrap-title {
          border-bottom: 1px solid $color-light-grey;
          padding-bottom: 33px;
        }
      }

      .photo-profile {
        display: flex;
        justify-content: center;
        padding: 22px;
        border-bottom: 1px solid #E0E0E099;

        .wrap-img {
          position: relative;
          width: 110px;
          height: 110px;
          border-radius: 50%;

          .change-photo {
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            background: rgb(0,0,0, 0.6);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: all .3s;

            .btn-icon {
              background: $color-white;
            }
          }

          .photo {
            border-radius: 50%;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .wrap-img:hover {
          .change-photo {
            opacity: 1;
          }
        }
      }
    }
  }

  @media screen and(max-width: 700px) {
    .page-profile {
      .container {
        flex-flow: column;
      }

      .content-left {
        max-width: 100%;
      }

      .content-right {
        margin-left: 0px;
        
        .banner-profile {
          display: none;
        }
      }
    }
  }
</style>