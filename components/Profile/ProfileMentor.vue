<template>
  <div class="profile-mentor">
    <div class="wrap-info card-profile mt-5">
      <div class="mb-4">
        <b>Mentors</b>
      </div>
      <div class="mt-1 d-flex flex-wrap wrap-list">
        <div v-if="mentors.length == 0" class="mt-4 mb-10">
          You haven’t any mentor yet
        </div>
        <div v-else class="d-flex flex-column align-center item-mentor" v-for="(item, index) in mentors" :key="index">
          <div class="wrap-img" :style="{background: randomColor()}">
            <img v-if="item.avatar" :src="item.avatar">
            <h1 v-else class="bold-h1">
              {{ item.first_name ? item.first_name.charAt(0).toUpperCase() : "" }}
            </h1>
          </div>
          <h6 class="bold-h6 mt-4">
            {{ item.first_name }} {{ item.last_name }}
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mentors: []
    }
  },
  mounted() {
    this.$axios.get("staffs/v1/current/mentors", this.token)
    .then((res) => {
      if (res.status == 200) {
        this.mentors = res.data.data.staffs
      }
    })
    .catch(err => {})
  },
}
</script>

<style lang="scss">
  .profile-mentor {
    .card-profile {
      padding-bottom: 42px !important;
    }

    .wrap-list {
      margin: -10px 4px;
      
      .item-mentor {
        margin: 10px;
      }
    }
    
    .wrap-img {
      border-radius: 50%;
      width: 150px;
      height: 150px;
      display: flex;
      align-items: center;
      justify-content: center;

      .bold-h1 {
        font-size: 6em;
        color: #fff;
      }

      img {
        border-radius: 50%;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
</style>