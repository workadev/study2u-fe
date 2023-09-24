<template>
  <div class="profile-step-review">
    <div class="wrap-content">
      <div class="content-left pr-5">
        <div class="info-review">
          <h6 class="bold-h6 mb-1">Name</h6>
          <h6 class="regular-h6">
            {{ form.first_name }} {{ form.last_name }}
          </h6>
        </div>
        <div class="info-review mt-5">
          <h6 class="bold-h6 mb-1">Birthday</h6>
          <h6 class="regular-h6">
            {{ formatDate(form.birthday, "DD MMMM YYYY") }}
          </h6>
        </div>
        <div class="info-review mt-5">
          <h6 class="bold-h6 mb-1">Email</h6>
          <h6 class="regular-h6">
            {{ form.email }}
          </h6>
        </div>
        <div class="info-review mt-5">
          <h6 class="bold-h6 mb-1">Phone</h6>
          <h6 class="regular-h6">
            {{ form.phone_number }}
          </h6>
        </div>
        <div class="info-review mt-5">
          <h6 class="bold-h6 mb-1">Address</h6>
          <h6 class="regular-h6">
            {{ form.address }}
          </h6>
        </div>
        <div class="info-review mt-5">
          <h6 class="bold-h6 mb-1">Nationality</h6>
          <h6 class="regular-h6">
            {{ form.nationality }}
          </h6>
        </div>
        <div class="info-review mt-5">
          <h6 class="bold-h6 mb-1">Interests</h6>
          <div class="d-flex flex-wrap mx-n1 mt-3">
            <div 
              v-for="(item, index) in interests" 
              :key="index"
              class="chip-square mx-1 my-1"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
        <div class="info-review mt-5">
          <h6 class="bold-h6 mb-1">Current Education</h6>
          <h6 class="regular-h6">
            {{ educationName }}
          </h6>
        </div>
        <div class="info-review mt-5">
          <h6 class="bold-h6 mb-1">Current School</h6>
          <h6 class="regular-h6">
            {{ form.current_school }}
          </h6>
        </div>
      </div>
      <div class="content-right">
        <div class="d-flex justify-center">
          <div class="default-img" :style="{background: user.bgAvatar}">
            <img v-if="imgPreview" :src="imgPreview">
            <img v-else-if="user.avatar" :src="user.avatar">
            <div v-else>
              {{ form.first_name.charAt(0).toUpperCase() }}
            </div>
          </div>
        </div>
        <h6 class="regular-h6 mt-10">
          {{ form.about_me }}
        </h6>
      </div>
    </div>
    <div class="mt-16 text-center">
      <v-btn
        height="58"
        width="189"
        elevation
        color="#E75982"
        class="btn-next"
        @click="$emit('nextStep')"
        :loading="loading"
      >
        UPDATE
      </v-btn>
    </div>
    <v-btn 
      height="fit-content"
      width="fit-content"
      class="px-0 mt-16 ml-3"
      text
      @click="$emit('nextStep', 2)"
    >
      <v-icon size="35" class="mr-1">mdi-chevron-left</v-icon> 
      <h6 class="regular-h6">Back</h6>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: ["form", "interests", "imgPreview", "loading"],
  computed: {
    listStudy() {
      return this.$store.state.study.listStudy
    },
    educationName() {
      let _this = this
      let getEducation = this.listStudy.filter(str => {
        return str.id == _this.form.current_education_id
      })
      if (getEducation.length != 0) {
        return getEducation[0].name
      }
    },
    user() {
      return this.$store.state.login.user
    },
  }
}
</script>

<style lang="scss">
  .profile-step-review {
    .wrap-content {
      display: flex;

      .content-right,
      .content-left {
        width: 50%;
      }

      .content-right {
        .default-img {
          width: 250px;
          height: 250px;
          border-radius: 50%;
          font-size: 150px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;

          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
          }

          div {
            color: #fff;
          }
        }
      }
    }
  }
</style>