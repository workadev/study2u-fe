<template>
  <div class="card-profile">
    <div class="photo-profile text-center">
      <img class="bg-banner" src="@/assets/images/background/bg-profile-banner.svg">
      <img class="photo" src="@/assets/images/Ellipse 1 4.png" alt="Ellipse 1 4">
    </div>
    <div class="text-center px-2">
      <div class="semibold-title mb-1">Jhony Arama Kumar</div>
      <div class="regular-body">Becoming a Quality Programmer</div>
    </div>
    <v-divider color="#EEF1F4" class="my-3" />
    <div class="info-profile">
      <div class="mb-3 text-info">
        <div class="regular-body">E-mail</div>
        <div class="regular-body">jhony.arama@mail.com</div>
      </div>
      <div class="text-info">
        <div class="regular-body">Bio</div>
        <div class="regular-body">
          I am a student filled with passion and enthusiasm to develop myself in the academic world. My dream is to be a part of an inspirational university environment where I can learn, collaborate, and grow as an individual.
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .card-profile {
    border: 1px solid $color-light-grey;
    border-radius: 8px;
    background: $color-white;
    max-width: 270px;
    height: fit-content;

    .info-profile {
      padding: 10px 15px;

      .text-info {
        div {
          color: $color-black;
        }

        div:first-child {
          color: $color-dark-grey;
        }
      }
    }

    .photo-profile {
      position: relative;
      padding: 20px 0;
      max-height: 106px;

      .bg-banner {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 54px;
        object-fit: cover;
        border-radius: 8px 8px 0 0;
      }

      .photo {
        width: 68px;
        height: 68px;
        object-fit: cover;
        border-radius: 50%;
        border: 2px solid $color-white;
        z-index: 1;
        position: relative;
      }
    }
  }
</style>