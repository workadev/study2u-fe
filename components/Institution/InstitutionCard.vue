<template>
  <div class="institution-card">
    <div class="d-flex align-center justify-space-between info-institution">
      <div class="d-flex align-center">
        <label class="container-checkbox mb-8">
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>
        <div class="wrap-logo">
          <img class="mr-5 logo" :src="data.img">
          <div class="wrap-name">
            <nuxt-link class="name" :to="`/institutions/${data.name}`">
              {{ data.name }}
            </nuxt-link>
            <div class="type mb-5">{{ data.type }}</div>
            <img
              class="icon-heart"
              :src="require(`@/assets/icons/${data.whistlist ? 'heart-color' : 'heart'}.svg`)"
              @click="data.whistlist = !data.whistlist"
            >
          </div>
        </div>
      </div>
      <div class="mx-5 wrap-info-center">
        <div class="d-flex align-center content-center">
          <img class="mr-6" src="@/assets/icons/pin-map.svg">
          {{ data.location }}
        </div>
        <div v-if="data.school" class="d-flex align-center content-center mt-4">
          <img class="mr-6" src="@/assets/icons/mortarboard.svg">
          {{ data.school }}
        </div>
      </div>
    </div>
    <div>
      <div class="desc">{{ data.desc }}</div>
      <nuxt-link v-if="data.desc" to="" class="lets-go mt-2">
        <img src="@/assets/icons/next.svg">
        Let’s go
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"]
}
</script>

<style lang="scss">
  .institution-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 4px 4px 0px #00000040;
    border: 2px solid #E2E2E2;
    transition: .3s;
    padding: 30px 13px;

    .info-institution {
      width: 100%;
      max-width: calc(100% / 1.5);
    }

    .desc {
      font-size: 18px;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      max-width: 287px;
      min-width: 287px;
    }

    .lets-go {
      color: #000;
      font-size: 14px;
      font-weight: 700;
      text-decoration: none;
      display: flex;

      img {
        margin-right: 6px;
      }
    }

    .wrap-info-center {
      border-right: 3px solid #E2E2E2;
      border-left: 3px solid #E2E2E2;
      padding-left: 28px;
      padding-right: 48px;
      min-width: 170px;
      height: 148px;
      display: flex;
      flex-flow: column;
      justify-content: center;
      transition: .3s;

      .content-center {
        font-size: 20px;
      }
    }


    .container-checkbox {
      padding-left: 42px;
    }

    .wrap-logo {
      display: flex;
      align-items: center;
      width: 100%;
      max-width: 408px;

      .wrap-name {
        max-width: 238px;
      }

      .icon-heart {
        cursor: pointer;
      }

      .name {
        font-size: 24px;
        font-weight: 700;
        color: #000;
        text-decoration: none;
      }

      .type {
        font-size: 20px;
      }

      .logo {
        max-width: 150px;
        max-height: 148.99px;
        min-height: 148.99px;
        object-fit: contain;
      }
    }
  }

  .institution-card:hover {
    border: 2px solid #000000;

    .wrap-info-center {
      border-color: #000;
    }

    .wrap-logo {
      .name {
        text-decoration: underline;
      }
    }
  }

  @media screen and(max-width: 900px) {
    .institution-card {
      flex-wrap: wrap;

      .wrap-info-center {
        border-right: none;
      }

      .info-institution {
        max-width: 100%;
      }

      .desc {
        max-width: 100%;
        margin-top: 20px;
      }
    }
  }

  @media screen and(max-width: 700px) {
    .institution-card {
      .wrap-logo {
        max-width: fit-content;
      }
      
      .wrap-info-center {
        border-left: none;
        height: auto;
        padding: 0px;
        margin-top: 20px;
      }

      .info-institution {
        flex-wrap: wrap;
      }
    }
  }
</style>