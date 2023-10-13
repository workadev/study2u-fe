<template>
  <div class="home-trending">
    <v-container>
      <h3 class="bold-h3">EDUCATION AFFILIATES</h3>
      <div class="group-item">
        <div v-for="(item, index) in affiliateList" :key="index" class="item">
          <img :src="item.logo">
          <div class="title-name mt-2">{{ item.name }}</div>
          <div class="type">{{ item.institution_type | capitalized }}</div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      affiliateList: [],
      paging: {
        per_page: 4,
        page: 1,
        ownership: "",
        institution_type: undefined,
        search: undefined
      },
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      this.$axios.get("v1/institutions", { params: this.paging, headers: this.token.headers })
      .then((res) => {
        if (res.status == 200) {
          this.affiliateList = res.data.data.institutions
        }
      })
      .catch(err => {})
    }
  },
}
</script>

<style lang="scss">
  .home-trending {
    padding: 88px 0 59px;

    .group-item {
      display: flex;
      justify-content: space-evenly;
      margin-top: 29px;
      margin: 19px -10px -10px;
      flex-wrap: wrap;

      .item {
        display: flex;
        flex-flow: column;
        align-items: center;
        margin: 10px;
        width: calc(100% / 4 - 18px);

        img {
          height: 118px;
          object-fit: contain;
        }

        .type {
          font-size: 14px;
        }
  
        .title-name {
          font-weight: 700;
          text-align: center;
        }
      }

      .item:last-child {
        margin-right: 0px;
      }
    }

    .bold-h3 {
      text-align: center;
    }
  }

  @media screen and(max-width: 900px) {
    .home-trending {
      .group-item {
        .item {
          width: 197px;
        }
      }
    }
  }
</style>