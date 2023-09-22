<template>
  <div class="page-institution">
    <v-container>
      <div class="header-page">
        <div class="header-left w-100">
          <div class="d-flex justify-space-between flex-wrap">
            <div class="title-page mb-5">INSTITUTIONS</div>
            <div class="wrap-search">
              <img class="mr-4" src="@/assets/icons/magnifying-glass.svg">
              <input
                type="text"
                placeholder="Search"
                v-model="paging.search"
                @keypress="enterSearch"
              >
            </div>
          </div>
          <div class="mt-n2">
            <v-btn
              v-for="(item, index) in listFilter" :key="index"
              :text="paging.institution_type != item.value"
              elevation
              class="btn-filter"
              :class="{'filter-active': paging.institution_type == item.value}"
              @click="clickFilterType(item)"
            >
              {{ item.label }}
            </v-btn>
          </div>
          <div class="ml-2">
            <v-radio-group class="pt-0" hide-details v-model="paging.ownership">
              <div class="d-flex align-start flex-wrap">
                <v-radio
                  v-for="(item, index) in listType" :key="index"
                  :label="item.label"
                  :value="item.value"
                  color="#030303"
                />
              </div>
            </v-radio-group>
          </div>
        </div>
      </div>
    </v-container>
    <InstitutionRecommendation
      v-if="user && recommendationList.length != 0"
      :list="recommendationList"
    />
    <v-container class="container-list">
      <div class="wrap-list">
        <div v-if="loading" style="height: 50vh;">
          <v-progress-circular
            indeterminate
            :size="100"
          />
        </div>
        <InstitutionCard 
          v-else
          v-for="(item, index) in institutionList" :key="index"
          :data="item"
        />
      </div>
      <div class="d-flex justify-center mt-10">
        <BasePagination 
          :totalPages="totalPages"
          :pageNumber="paging.page"
          :limitPage="3"
          @clickPage="clickPage"
        />
      </div>
      <div class="d-flex align-center mt-5">
        <img class="mr-4" src="@/assets/icons/route.svg">
        <v-btn
          text
          class="chip-square btn-compare"
          elevation
          height="33"
          width="171"
          to="/comparison"
        >
          Compare seletion
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listFilter: [
        {
          label: "All",
          value: undefined
        },
        {
          label: "Universities",
          value: "universities"
        },
        {
          label: "College",
          value: "college"
        }
      ],
      listType: [
        {
          label: "All",
          value: ""
        },
        {
          label: "Public",
          value: "public"
        },
        {
          label: "Private",
          value: "private"
        }
      ],
      institutionList: [],
      recommendationList: [],
      paging: {
        per_page: 10,
        page: 1,
        ownership: "",
        institution_type: undefined,
        search: undefined
      },
      totalPages: 0,
      loading: false
    }
  },
  computed: {
    user() {
      return this.$store.state.login.user
    }
  },
  watch: {
    "paging.ownership"() {
      this.getListInstitution()
    }
  },
  async mounted() {
    this.loading = true
    await this.$axios.get("v1/institutions/recommendations?per_page=10&page=1", this.token)
    .then((res) => {
      if (res.status == 200) {
        this.recommendationList = res.data.data.institutions
      }
    })
    .catch(err => {})

    this.getListInstitution()
  },
  methods: {
    async clickPage(page) {
      this.paging.page = page
      this.getListInstitution()
    },
    async getListInstitution() {
      this.loading = true
      await this.$axios.get("v1/institutions", { params: this.paging, headers: this.token.headers })
      .then((res) => {
        if (res.status == 200) {
          this.institutionList = res.data.data.institutions
          this.totalPages = Math.ceil(res.headers.total / this.paging.per_page)
        }
      })
      .catch(err => {})
      this.loading = false
    },
    clickFilterType(item) {
      this.paging.institution_type = item.value
      this.getListInstitution()
    },
    enterSearch(evt) {
      if (evt.keyCode == 13) {
        this.getListInstitution()
      }
    }
  },
}
</script>

<style lang="scss">
  .page-institution {
    background: #F3F3F3;
    
    .container {
      padding-top: 72px;
      padding-bottom: 32px;

      .header-page {
        display: flex;
        justify-content: space-between;

        .wrap-search {
          display: flex;
          align-items: center;

          input {
            outline: none;
            box-shadow: 0px 4px 4px 0px #00000040;
            border: 2px solid #000000;
            height: 49px;
            width: 236px;
            padding: 0 19px;
            font-size: 20px;
          }
        }

        .header-left {
          .v-input--radio-group {
            margin-top: 20px;

            .v-input__slot {
              padding: 0 0 !important;
              min-height: fit-content !important;
            }
          }

          .v-radio {
            margin-right: 66px;
            margin-bottom: 20px;
            
            .v-label {
              font-size: 20px;
              color: #030303;
            }
          }

          .v-radio:last-child {
            margin-right: 0px;
          }

          .btn-filter {
            min-width: 104px;
            border-radius: 0px;
            height: 40px;
            font-size: 20px;
            margin: 10px;
          }

          .filter-active {
            border: 2px solid #000000 !important;
            box-shadow: 0px 4px 4px 0px #00000040;
            background: #09B6DE;
          }

          .title-page {
            font-size: 36px;
            font-weight: 700;
          }
        }
      }
    }

    .container-list {
      padding-top: 39px;

      .btn-compare {
        border-radius: 0px;
        font-size: 16px;
        color: #000000;
      }

      .wrap-list {
        display: flex;
        flex-flow: column;
        align-items: center;

        .institution-card {
          margin: 31px 0;
        }
      }
    }
  }

  @media screen and(max-width: 525px) {
    .page-institution {
      .container {
        .header-page {
          .wrap-search {
            margin-bottom: 20px;
          }
        }
      }
    }
  }
</style>