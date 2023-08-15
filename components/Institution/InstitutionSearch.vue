<template>
  <div class="institution-search">
    <div class="search-title px-3 pb-3">
      <div class="bold-title">
        College and University Search
      </div>
      <div class="regular-subtitle mt-1">
        632 result
      </div>
      <div class="mt-6 d-flex">
        <v-btn 
          class="btn-sm semibold-body mr-3" 
          :class="{'btn-primary': typeSearch == 'college'}"
          outlined 
          elevation
          @click="typeSearch = 'college'"
        >
          College
        </v-btn>
        <v-btn 
          class="btn-sm semibold-body" 
          :class="{'btn-primary': typeSearch == 'university'}"
          outlined 
          elevation
          @click="typeSearch = 'university'"
        >
          University
        </v-btn>
      </div>
    </div>
    <div class="search-filter px-3 py-3">
      <div class="d-flex mb-2">
        <div class="wrap-select">
          <div class="regular-subtitle mb-1">City</div>
          <v-select 
            outlined
            hide-details
            :items="['United States']"
            height="46"
            clearable
            v-model="filter.city"
          >
            <template v-slot:append>
              <img width="22" height="22" src="@/assets/icons/chevron-down.svg">
            </template>
          </v-select>
        </div>
        <div class="wrap-select">
          <div class="regular-subtitle mb-1">Study Level</div>
          <v-select 
            outlined
            hide-details
            :items="['Bachelors']"
            height="46"
            clearable
            v-model="filter.level"
          >
            <template v-slot:append>
              <img width="22" height="22" src="@/assets/icons/chevron-down.svg">
            </template>
          </v-select>
        </div>
        <div class="wrap-select">
          <div class="regular-subtitle mb-1">Subject</div>
          <v-select 
            outlined
            hide-details
            :items="['Business and Management Studies']"
            height="46"
            clearable
            v-model="filter.subject"
          >
            <template v-slot:append>
              <img width="22" height="22" src="@/assets/icons/chevron-down.svg">
            </template>
          </v-select>
        </div>
      </div>
      <div class="text-right">
        <v-btn
          text
          elevation
          height="38"
          class="px-3 regular-subtitle"
          color="#1A334F"
        >
          Reset Filter <img class="ml-2" src="@/assets/icons/arrow-path.svg">
        </v-btn>
      </div>
    </div>
    <div class="filter-result">
      <div v-for="(item, index) in listResult" :key="index" class="wrap-item">
        <CardUniversity :dataLabel="dataLabel" :data="item" />
      </div>
      <BasePagination 
        class="justify-end"
        :totalPages="totalPages"
        :pageNumber="pageNumber"
        :limitPage="3"
        @clickPage="clickPage"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageNumber: 1,
      totalPages: 10,
      typeSearch: "",
      filter: {
        city: "",
        level: "",
        subject: ""
      },
      dataLabel: [],
      listResult: [],
      resultUniversity: [
        {
          img: require("@/assets/images/image 6.png"),
          name: "Massachusetts Institute of Technology (MIT)",
          location: "Cambridge, United States",
          level: "Bachelors",
          subject: "Business and Management Studies",
          scholarships: "Yes"
        },
        {
          img: require("@/assets/images/image 6.png"),
          name: "Stanford University",
          location: "Stanford, United States",
          level: "Bachelors",
          subject: "Business and Management Studies",
          scholarships: "Yes"
        },
        {
          img: require("@/assets/images/image 6.png"),
          name: "Stanford, United States",
          location: "Cambridge, United Kingdom",
          level: "Bachelors",
          subject: "Business and Management Studies",
          scholarships: "Yes"
        },
        {
          img: require("@/assets/images/image 6.png"),
          name: "University of Oxford",
          location: "Oxford, United Kingdom",
          level: "Bachelors",
          subject: "Business and Management Studies",
          scholarships: "Yes"
        },
        {
          img: require("@/assets/images/image 6.png"),
          name: "University of California, Berkeley (UCB)",
          location: "Berkeley, United State",
          level: "Bachelors",
          subject: "Business and Management Studies",
          scholarships: "Yes"
        },
        {
          img: require("@/assets/images/image 6.png"),
          name: "Imperial College London",
          location: "London, United Kingdom",
          level: "Bachelors",
          subject: "Business and Management Studies",
          scholarships: "Yes"
        },
        {
          img: require("@/assets/images/image 6.png"),
          name: "Massachusetts Institute of Technology (MIT)",
          location: "Cambridge, United States",
          level: "Bachelors",
          subject: "Business and Management Studies",
          scholarships: "Yes"
        },
        {
          img: require("@/assets/images/image 6.png"),
          name: "Stanford University",
          location: "Stanford, United States",
          level: "Bachelors",
          subject: "Business and Management Studies",
          scholarships: "Yes"
        },
        {
          img: require("@/assets/images/image 6.png"),
          name: "University of Cambridge",
          location: "Cambridge, United Kingdom",
          level: "Bachelors",
          subject: "Business and Management Studies",
          scholarships: "Yes"
        },
        {
          img: require("@/assets/images/image 6.png"),
          name: "University of California, Berkeley (UCB)",
          location: "Berkeley, United State",
          level: "Bachelors",
          subject: "Business and Management Studies",
          scholarships: "Yes"
        },
        {
          img: require("@/assets/images/image 6.png"),
          name: "University of Oxford",
          location: "Oxford, United Kingdom",
          level: "Bachelors",
          subject: "Business and Management Studies",
          scholarships: "Yes"
        },
        {
          img: require("@/assets/images/image 6.png"),
          name: "Imperial College London",
          location: "London, United Kingdom",
          level: "Bachelors",
          subject: "Business and Management Studies",
          scholarships: "Yes"
        }
      ],
      resultCollege: [
        {
          img: require("@/assets/images/image 6 3.png"),
          name: "Eurocolegio Privado Internacional Casvi",
          location: "Madrid, Spain",
          level: "Day & Boarding School",
          subject: "~ 4.850 - 31.000 EUR",
          scholarships: "A"
        },
        {
          img: require("@/assets/images/image 6 3.png"),
          name: "International School of Beijing",
          location: "Beijing, PRC",
          level: "Day School",
          subject: "~ 232.800 - 333.000 RMB",
          scholarships: "A"
        },
        {
          img: require("@/assets/images/image 6 3.png"),
          name: "TASIS The American School in Switzerland",
          location: "Lugano, Switzerland",
          level: "Day & Boarding School",
          subject: "~ 28.000 to 98.000 USD",
          scholarships: "A"
        },
        {
          img: require("@/assets/images/image 6 3.png"),
          name: "Fairfax Christian School",
          location: "Sterling, USA",
          level: "Day & Boarding School",
          subject: "~ 30.000 to 47.800 USD",
          scholarships: "A"
        },
        {
          img: require("@/assets/images/image 6 3.png"),
          name: "TASIS The American School in Switzerland",
          location: "Lugano, Switzerland",
          level: "Day & Boarding School",
          subject: "~ 28.000 to 98.000 USD",
          scholarships: "A"
        },
        {
          img: require("@/assets/images/image 6 3.png"),
          name: "Eurocolegio Privado Internacional Casvi",
          location: "Madrid, Spain",
          level: "Day & Boarding School",
          subject: "~ 4.850 - 31.000 EUR",
          scholarships: "A"
        },
        {
          img: require("@/assets/images/image 6 3.png"),
          name: "International School of Beijing",
          location: "Beijing, PRC",
          level: "Day School",
          subject: "~ 232.800 - 333.000 RMB",
          scholarships: "A"
        },
        {
          img: require("@/assets/images/image 6 3.png"),
          name: "TASIS The American School in Switzerland",
          location: "Lugano, Switzerland",
          level: "Day & Boarding School",
          subject: "~ 28.000 to 98.000 USD",
          scholarships: "A"
        },
        {
          img: require("@/assets/images/image 6 3.png"),
          name: "Fairfax Christian School",
          location: "Sterling, USA",
          level: "Day & Boarding School",
          subject: "~ 30.000 to 47.800 USD",
          scholarships: "A"
        },
        {
          img: require("@/assets/images/image 6 3.png"),
          name: "TASIS The American School in Switzerland",
          location: "Lugano, Switzerland",
          level: "Day & Boarding School",
          subject: "~ 28.000 to 98.000 USD",
          scholarships: "A"
        },
      ]
    }
  },
  watch: {
    typeSearch() {
      this.switchLabelCard()
    }
  },
  created() {
    this.typeSearch = this.$route.query.type ? this.$route.query.type : "university"
    this.switchLabelCard()
    if (this.$route.query.type) {
      this.$router.replace({ query: [] })
    }
  },
  methods: {
    clickPage(page) {
      this.pageNumber = page
    },
    switchLabelCard() {
      this.listResult = []
      if (this.typeSearch == "university") {
        this.dataLabel = ["Study Level", "Subject", "Scholarships"]
        this.listResult = this.resultUniversity
      } else if (this.typeSearch == "college") {
        this.dataLabel = ["Type of School", "Yearly Fee", "Accreditations"]
        this.listResult = this.resultCollege
      } else {
        this.dataLabel = []
      }
    }
  },
}
</script>

<style lang="scss">
  .institution-search {
    border: 1px solid $color-light-grey;
    background: $color-white;
    padding: 16px 0 28px;

    .filter-result {
      padding: 12px 12px 0;

      .wrap-item {
        margin-bottom: 20px;
      }
    }

    .search-filter {
      border-bottom: 1px solid $color-light-grey;

      .wrap-select {
        margin-right: 12px;
        width: calc(100% / 3);

        .v-select__selection {
          font-size: 12px;
        }
      }

      .wrap-select:last-child {
        margin-right: 0px;
      }
    }

    .search-title {
      border-bottom: 1px solid $color-light-grey;
    }
  }
</style>