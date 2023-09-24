<template>
  <div class="profile-step-personal">
    <div class="d-flex">
      <v-text-field
        hide-details
        height="38"
        placeholder="first name"
        class="mr-5 pt-0"
        max-width="317"
        v-model="form.first_name"
      />
      <v-text-field
        hide-details
        height="38"
        placeholder="last name"
        v-model="form.last_name"
        class="pt-0"
      />
    </div>
    <v-menu 
      ref="menuDateofbirth"
      v-model="menuDateofbirth"
      transition="slide-y-transition"
      origin="center center"
      offset-y
      content-class="menu-datepicker"
      :close-on-content-click="false"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-bind="attrs"
          v-on="on"
          hide-details
          height="38"
          placeholder="date of birth"
          readonly
          v-model="birthdayFormat"
          class="mt-10 pt-0"
        >
          <template v-slot:append>
            <img src="@/assets/icons/calendar.svg">
          </template>
        </v-text-field>
      </template>
      <v-date-picker
        v-model="form.birthday"
        no-title
        scrollable
        prev-icon="mdi-chevron-double-left"
        next-icon="mdi-chevron-double-right"
      />
    </v-menu>
    <v-text-field
      hide-details
      height="38"
      placeholder="fixed.email@address.com"
      v-model="form.email"
      class="mt-10 pt-0"
    />
    <v-text-field
      hide-details
      height="38"
      placeholder="+xx-xx-xxxx-xxxx"
      v-model="form.phone_number"
      class="mt-10 pt-0"
    />
    <v-text-field
      hide-details
      height="38"
      placeholder="address"
      v-model="form.address"
      class="mt-10 pt-0"
      style="max-width: 654px;"
    />
    <v-select 
      class="mt-10 pt-0"
      :items="listCountry"
      hide-details
      placeholder="nationality"
      v-model="form.nationality"
    >
      <template v-slot:append>
        <img width="21" src="@/assets/icons/chevron-down.svg">
      </template>
    </v-select>
    <div class="mt-10 d-flex flex-column">
      <h6 class="regular-h6 mb-3">About Me</h6>
      <textarea v-model="form.about_me" />
    </div>
    <div class="mt-16 text-center">
      <v-btn
        height="58"
        width="189"
        elevation
        color="#E75982"
        class="btn-next"
        @click="$emit('nextStep', 2)"
      >
        NEXT
      </v-btn>
    </div>
    <v-btn 
      height="fit-content"
      width="fit-content"
      class="px-0 mt-16 ml-3"
      text
      @click="$router.push('/profile')"
    >
      <v-icon size="35" class="mr-1">mdi-chevron-left</v-icon> 
      <h6 class="regular-h6">Back</h6>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: ["form"],
  data() {
    return {
      birthdayFormat: "",
      menuDateofbirth: false
    }
  },
  watch: {
    "form.birthday"(newVal) {
      this.birthdayFormat = this.formatDate(newVal, "DD MMMM YYYY")
    }
  },
  mounted() {
    this.birthdayFormat = this.formatDate(this.form.birthday, "DD MMMM YYYY")
  },
}
</script>

<style lang="scss">
  .menu-datepicker {
    .v-picker {
      width: 100%;
    }
  }

  .profile-step-personal {
    textarea {
      border: 1px solid #000000;
      width: 100%;
      max-width: 317px;
      height: 147px;
      resize: none;
      outline: none;
      padding: 10px;
    }
  }
</style>