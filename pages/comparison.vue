<template>
  <div class="comparison">
    <v-container>
      <div class="title-page">COMPARISON</div>
      <div class="wrap-item-compare">
        <div class="item-compare" v-for="(item, index) in listCompare" :key="index"> 
          <div class="d-flex flex-column align-center">
            <img class="logo mb-4" :src="item.logo">
            <img
              class="heart"
              width="25"
              height="25"
              :src="require(`@/assets/icons/${item.whistlist ? 'heart-color' : 'heart'}.svg`)"
              @click="item.whistlist = !item.whistlist"
            >
          </div>
          <div class="mt-4">
            <div class="name-bold">{{ item.universityName }}</div>
            <div class="wrap-info">
              <div class="title-info">Type</div>
              <div class="text-info">{{ item.type }}</div>
            </div>
            <div class="wrap-info">
              <div class="title-info">Admittance</div>
              <div class="text-info">{{ item.admittance }}</div>
            </div>
            <div class="wrap-info">
              <div class="title-info">Programs</div>
              <div class="text-info">{{ item.programs }}</div>
            </div>
            <div class="wrap-info">
              <div class="title-info">State</div>
              <div class="text-info">{{ item.state }}</div>
            </div>
            <div class="wrap-info">
              <div class="title-info">Address</div>
              <div class="name-bold">{{ item.addressName }}</div>
              <div class="text-info">{{ item.address }}</div>
            </div>
            <div class="wrap-info">
              <div class="title-info">Phone</div>
              <div class="text-info">{{ item.phone }}</div>
            </div>
            <div class="wrap-info">
              <div class="title-info">Studies</div>
              <div class="mb-4" v-for="(itemChild, indexChild) in item.studies" :key="indexChild">
                <div class="name-bold">{{ itemChild.name }}</div>
                <div class="wrap-chip">
                  <div class="chip-square" v-for="(itemCategory, indexCategory) in itemChild.categoryList" :key="indexCategory">
                    {{ itemCategory }}
                  </div>
                </div>
              </div>
            </div>
            <div class="wrap-info">
              <nuxt-link to="">see all</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listCompare: [
        {
          logo: require("@/assets/images/BACedu_logofav2 1.png"),
          whistlist: false,
          universityName: "Brickfields Asia College",
          type: "College",
          admittance: "Public",
          programs: "Conventional",
          state: "Selangor",
          addressName: "Hisniaga Sdn Bhd",
          address: "B-2, G-Floor, Jl. Utara, Section 14, 46200 Petaling Jaya, Selangor, Malaysia",
          phone: "+60 3-7947 2200",
          studies: [
            {
              name: "Undergraduate",
              categoryList: [
                "Pre-Uni", "Law", "Business", "Digital Media, Design & Comms",
                "Technology & Innovation", "Hospitality, Culinary & Tourism", 
                "Psychology", "Early Childhood"
              ]
            }
          ]
        },
        {
          logo: require("@/assets/images/University-of-Malaya-Logo_neu030719 1.png"),
          whistlist: true,
          universityName: "Universiti Malaya",
          type: "University",
          admittance: "Public",
          programs: "Conventional, Remote Learning, Open Channel, Open Distance Learning ",
          state: "Kuala Lumpur",
          addressName: "Universiti Malaya",
          address: "50603 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia",
          phone: "+60 3-7967 3502",
          studies: [
            {
              name: "D3",
              categoryList: [
                "Life Science", "Physical Science", "Islamic Studies", "Social Science",
                "Islamic Studies and Science", "Special Preparation (Japan)"
              ]
            },
            {
              name: "S1",
              categoryList: [
                "Music", "Law", "Nursing Science", "Science in Applied Geology", "Medicine and Surgery",
                "Biomedical Science", "Real Estate", "Finance"
              ]
            }
          ]
        },
        {
          logo: require("@/assets/images/Ellipse 20.png"),
          whistlist: false,
          universityName: "Some Institution",
          type: "College",
          admittance: "Public",
          programs: "Scholarship",
          state: "Selangor",
          addressName: "Some Building Space",
          address: "19 Somewhere Once Upon a Time Road, Some Country ",
          phone: "+00 0-0000 0000",
          studies: [
            {
              name: "Undergraduate",
              categoryList: [
                "Pre-Uni", "Law", "Business", "Digital Media, Design & Comms",
                "Technology & Innovation", "Hospitality, Culinary & Tourism", 
                "Psychology", "Early Childhood"
              ]
            }
          ]
        },
      ]
    }
  },
}
</script>

<style lang="scss">
  .comparison {
    .container {
      padding-top: 72px;
      padding-bottom: 72px;

      .wrap-item-compare {
        margin: 27px -23px -23px;
        display: flex;
        flex-wrap: wrap;

        .item-compare {
          display: flex;
          flex-flow: column;
          width: fit-content;
          max-width: calc(100% / 3 - 46px);
          margin: 23px;

          .wrap-info {
            margin-top: 14px;

            a {
              color: #000;
            }

            .wrap-chip {
              margin: 10px -4px -4px;
              display: flex;
              flex-wrap: wrap;

              .chip-square {
                margin: 4px;
              }
            }

            .title-info {
              font-size: 14px;
              line-height: 18.12px;
            }

            .text-info {
              font-size: 20px;
              line-height: 25.88px;
            }
          }

          .name-bold {
            font-size: 20px;
            font-weight: 700;
            line-height: 25.88px;
          }

          .heart {
            cursor: pointer;
          }

          .logo {
            max-height: 120px;
            min-height: 120px;
            max-width: 333px;
          }
        }
      }

      .title-page {
        font-size: 36px;
        font-weight: 700;
      }
    }
  }

  @media screen and(max-width: 800px) {
    .comparison {
      .container {
        .wrap-item-compare {
          .item-compare {
            max-width: calc(100% / 2 - 46px);
          }
        }
      }
    }
  }

  @media screen and(max-width: 700px) {
    .comparison {
      .container {
        .wrap-item-compare {
          .item-compare {
            max-width: calc(100% / 1 - 46px);
          }
        }
      }
    }
  }
</style>