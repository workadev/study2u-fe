<template>
  <div class="profile-edit">
    <v-container class="d-flex justify-space-between">
      <div class="content-left">
        <div class="content-title mb-10">
          Edit Profile
        </div>
        <v-text-field
          hide-details
          height="38"
          placeholder="name"
          v-model="profile.name"
        />
        <v-menu 
          ref="menuDateofbirth"
          v-model="menuDateofbirth"
          transition="slide-y-transition"
          origin="center center"
          offset-y
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-bind="attrs"
              v-on="on"
              hide-details
              height="38"
              placeholder="date of birth"
              readonly
              v-model="profile.dateofbirth"
              class="mt-3"
            >
              <template v-slot:prepend-inner>
                <img src="@/assets/icons/calendar.svg">
              </template>
            </v-text-field>
          </template>
          <v-date-picker
            v-model="profile.dateofbirth"
            no-title
            scrollable
            prev-icon="mdi-chevron-double-left"
            next-icon="mdi-chevron-double-right"
          />
        </v-menu>
        <div class="phone d-flex mt-3">
          <v-text-field
            hide-details
            height="38"
            style="max-width: 47px;"
            class="mr-4"
            placeholder="+xx"
            v-model="profile.phone.code"
            max-length="3"
          />
          <v-text-field
            hide-details
            height="38"
            placeholder="xx-xxxx-xxxx"
            v-model="profile.phone.number"
          />
        </div>
        <v-text-field
          hide-details
          height="38"
          placeholder="email"
          v-model="profile.email"
          class="mt-3"
        />
        <v-text-field
          hide-details
          height="38"
          placeholder="current school"
          v-model="profile.currentSchool"
          class="mt-3"
        />
        <v-select 
          class="mt-5"
          :items="[]"
          hide-details
          placeholder="current qualification"
          v-model="profile.qualification"
        >
          <template v-slot:append>
            <img width="21" src="@/assets/icons/chevron-down.svg">
          </template>
        </v-select>
        <v-select 
          class="mt-5"
          :items="[]"
          hide-details
          placeholder="nationality"
          v-model="profile.nationality"
        >
          <template v-slot:append>
            <img width="21" src="@/assets/icons/chevron-down.svg">
          </template>
        </v-select>
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
        <div class="text-center wrap-photo">
          <img v-if="imgPreview" :src="imgPreview">
          <div v-else class="default-img">
            {{ profile.name.charAt(0) }}
          </div>
          <input
            id="photo"
            type="file"
            hidden
            @change="inputFile"
          >
          <div class="mt-3">
            <label for="photo" class="btn-change">
              change photo
            </label>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import DataMixins from "@/mixins";

export default {
  mixins: [DataMixins],
  data() {
    return {
      profile: {
        name: "Marijke Oemar",
        dateofbirth: null ,
        phone: {
          code: "",
          number: ""
        },
        email: "",
        currentSchool: "",
        qualification: "",
        nationality: "",
        photo: null
      },
      menuDateofbirth: false,
      imgPreview: null
    }
  },
  methods: {
    inputFile(evt) {
      let src = null
      if (evt.target.files[0]) {
        src = URL.createObjectURL(evt.target.files[0])
        this.profile.photo = evt.target.files[0]
      } else {
        this.profile.photo = null
      }
      this.imgPreview = src
    }
  },
}
</script>

<style lang="scss">
  .profile-edit {
    padding-top: 133px;
    padding-bottom: 133px;

    .content-right {
      margin-top: 100px;

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
        color: #fff;
        font-size: 150px;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .btn-change {
        font-size: 20px;
        cursor: pointer;
      }
    }

    .content-left {
      width: 100%;
      max-width: 317px;

      .wrap-btn-action {
        width: fit-content;
        align-items: center;
        margin-top: 100px;

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

      .v-input {
        .v-input__slot {
          padding: 0 6px !important;
          min-height: 38px !important;
          font-size: 20px;

          .v-input__prepend-inner {
            margin-right: 18px;
          }
        }
      }

      .content-title {
        font-size: 36px;
        font-weight: 700;
      }
    }
  }

  @media screen and(max-width: 700px) {
    .profile-edit {
      .container {
        flex-flow: column-reverse;

        .content-left {
          max-width: 100%;
          
          .wrap-btn-action {
            width: 100%;
          }
        }

        .content-right {
          margin-top: 0px;
          margin-bottom: 20px;

          .wrap-photo {
            display: flex;
            flex-flow: column;
            align-items: center;
          }
        }
      }
    }
  }
</style>