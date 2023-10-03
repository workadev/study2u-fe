<template>
  <div class="profile-mentor">
    <div class="wrap-info card-profile mt-5">
      <div class="mb-4">
        <b>Mentors</b>
      </div>
      <div class="mt-1 d-flex flex-wrap wrap-list">
        <div class="d-flex flex-column align-center item-mentor">
          <div class="wrap-img" :style="{background: randomColor()}">
            <img src="@/assets/images/Ellipse 10.png">
            <!-- <h1 v-else class="bold-h1">
              {{ item.first_name ? item.first_name.charAt(0).toUpperCase() : "" }}
            </h1> -->
          </div>
          <h6 class="bold-h6 mt-4">
            Wall E.
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>

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
        font-size: 12em;
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