<template>
  <div class="edit-profile">
    <v-container class="py-0">
      <h3 class="bold-h3">PROFILE</h3>
      <div class="wrap-step">
        <div class="group-step">
          <div class="wrap-circle" :class="{active: step == 1 || step == 2 || step == 3}">
            <div class="circle-step">1</div>
            <h6 class="bold-h6 mt-12 text-center">Personal Information</h6>
          </div>
          <div class="wrap-line line-first">
            <img src="@/assets/images/Line.png">
          </div>
          <div class="wrap-circle" :class="{active: step == 2 || step == 3}">
            <div class="circle-step">2</div>
            <h6 class="bold-h6 mt-12 text-center">Additional Information</h6>
          </div>
          <div class="wrap-line line-second">
            <img src="@/assets/images/Line.png">
          </div>
          <div class="wrap-circle" :class="{active: step == 3}">
            <div class="circle-step">3</div>
            <h6 class="bold-h6 mt-12 text-center">Review</h6>
          </div>
        </div>
      </div>
      <ProfileStepPersonal
        v-if="step == 1"
        :form="form"
        @nextStep="nextStep"
      />
      <ProfileStepAdditional
        v-else-if="step == 2"
        :form="form"
        :interests="interests"
        @nextStep="nextStep"
        @handleChange="handleChangeInterests"
      />
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      form: {
        first_name: "",
        last_name: "",
        phone_number: "",
        headline: "",
        about_me: "",
        address: "",
        birthday: "",
        current_school: "",
        nationality: "",
        current_education_id: "",
        email: "",
        avatar_id: ""
      },
      interests: []
    }
  },
  computed: {
    user() {
      return this.$store.state.login.user
    }
  },
  mounted() {
    this.$store.dispatch("study/getStudy")
    this.$store.dispatch("interests/getListInterests")
    this.profile = {
      first_name: this.user.first_name,
      last_name: this.user.last_name,
      phone_number: this.user.phone_number,
      headline: this.user.headline,
      about_me: this.user.about_me,
      address: this.user.address,
      birthday: this.user.birthday,
      avatar_id: this.user.avatar_id,
      current_school: this.user.current_school,
      nationality: this.user.nationality,
      current_education_id: this.user.current_education,
      email: this.user.email
    }
    this.interests = this.user.interests
  },
  methods: {
    nextStep(step) {
      this.step = step
      window.scrollTo(0, 0);
    },
    handleChangeInterests(list) {
      this.interests = list
    }
  },
}
</script>

<style lang="scss">
  .edit-profile {
    padding-top: 72px;
    padding-bottom: 293px;

    .btn-next {
      font-size: 20px;
      font-weight: 700;
      color: #fff;
      border-radius: 20px;
    }

    .v-select__selection {
      height: 22px;
    }

    .v-input {
      max-width: 317px;

      .v-input__slot {
        padding: 0 6px !important;
        min-height: 38px !important;
        font-size: 20px;
        
        .v-input__prepend-inner {
          margin-right: 18px;
        }
      }
    }

    .wrap-step {
      display: flex;
      justify-content: center;
      margin-bottom: 80px;

      .group-step {
        margin-top: 74px;
        display: flex;
        width: calc(100% - 220px);

        .wrap-line {
          margin: 18px -120px 0;
        }
        
        .wrap-circle {
          width: calc(100% / 3);
          display: flex;
          flex-flow: column;
          align-items: center;
          padding: 0 10px;
          
          .circle-step {
            width: 67px;
            height: 67px;
            border-radius: 50%;
            font-size: 40px;
            font-weight: 700;
            color: #CDCDCD;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #E8E8E8;
            z-index: 1;
          }

          .bold-h6 {
            color: #BABABA;
          }
        }

        .active {
          .circle-step {
            background: #78CAB7;
            color: #fff;
          }

          .bold-h6 {
            color: #000;
          }
        }
      }
    }
  }

  @media screen and(max-width: 790px) {
    .edit-profile {
      .wrap-step {
        .group-step {
          width: 100%;

          .line-first {
            position: relative;
            left: 27px;
          }

          .line-second {
            position: relative;
            right: 27px;
          }
        }
      }
    }
  }
</style>