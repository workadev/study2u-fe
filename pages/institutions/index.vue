<template>
  <div class="page-institution">
    <v-container>
      <div class="header-page">
        <div class="header-left">
          <div class="title-page">INSTITUTIONS</div>
          <div class="mt-n2">
            <v-btn
              v-for="(item, index) in listFilter" :key="index"
              :text="filterActive != item"
              elevation
              class="btn-filter"
              :class="{'filter-active': filterActive == item}"
              @click="filterActive = item"
            >
              {{ item }}
            </v-btn>
          </div>
          <div class="ml-2">
            <v-radio-group class="pt-0" hide-details v-model="valueType">
              <div class="d-flex align-start">
                <v-radio
                  v-for="(item, index) in listType" :key="index"
                  :label="item"
                  :value="item"
                  color="#030303"
                />
              </div>
            </v-radio-group>
          </div>
        </div>
        <div class="header-right">
          <div class="wrap-search">
            <img class="mr-4" src="@/assets/icons/magnifying-glass.svg">
            <input type="text" placeholder="Search">
          </div>
          <v-btn text class="btn-advanced mt-2">
            advanced search
          </v-btn>
        </div>
      </div>
    </v-container>
    <InstitutionRecommendation />
    <v-container class="container-list">
      <div class="wrap-list">
        <InstitutionCard 
          v-for="(item, index) in institutionList" :key="index"
          :data="item"
        />
      </div>
      <div class="d-flex justify-center mt-10">
        <BasePagination 
          :totalPages="10"
          :pageNumber="pageNumber"
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
      filterActive: "All",
      listFilter: [
        "All", "Universities", "College"
      ],
      listType: [
        "All", "Public", "Private"
      ],
      valueType: "All",
      institutionList: [
        {
          img: require("@/assets/images/BACedu_logofav2 1.png"),
          name: "Brickfields Asia College",
          type: "College, Public",
          whistlist: false,
          location: "Selangor",
          school: "Scholarship",
          desc: "The BAC Story We began with a single campus in Brickfields in 1991 with fewer than 50 students in Brickfields in 1991 with fewer than 50 students"
        },
        {
          img: require("@/assets/images/Ellipse 20.png"),
          name: "Best University",
          type: "College, Public",
          whistlist: true,
          location: "Kuala Lumpur",
          school: "",
          desc: ""
        },
        {
          img: require("@/assets/images/Ellipse 20.png"),
          name: "Best University",
          type: "College, Public",
          whistlist: false,
          location: "Kuala Lumpur",
          school: "",
          desc: ""
        },
        {
          img: require("@/assets/images/Ellipse 20.png"),
          name: "Best University",
          type: "College, Public",
          whistlist: false,
          location: "Kuala Lumpur",
          school: "Scholarship",
          desc: ""
        },
      ],
      pageNumber: 1
    }
  },
  methods: {
    clickPage(page) {
      this.pageNumber = page
    }
  },
}
</script>

<style lang="scss">
  .page-institution {
    .container {
      padding-top: 72px;
      padding-bottom: 72px;

      .header-page {
        display: flex;
        justify-content: space-between;

        .header-right {
          margin-top: 14px;
          text-align: right;

          .btn-advanced {
            padding: 0px;
            width: fit-content;
            height: fit-content;
          }

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
            margin-bottom: 0px;
            
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
            color: #fff;
            background: #FF5ABE;
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

        .institution-card {
          margin: 31px 0;
        }
      }
    }
  }
</style>