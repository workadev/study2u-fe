<template>
  <div class="comparison">
    <v-container>
      <div class="title-page">COMPARISON</div>
      <div v-if="loading" class="d-flex align-center justify-center" style="height: 50vh;">
        <v-progress-circular
          indeterminate
          :size="100"
        />
      </div>
      <div v-else class="wrap-item-compare">
        <div 
          class="item-compare" 
          v-for="(item, index) in listCompare" 
          :key="index"
          :style="{width: `calc(100% / ${listCompare.length > 3 ? '3' : listCompare.length} - 46px)`}"
        > 
          <div class="d-flex flex-column align-center">
            <img class="logo mb-4" :src="item.logo ? item.logo : '@/assets/images/Ellipse 20.png'">
            <img
              class="heart"
              width="25"
              height="25"
              :src="require(`@/assets/icons/${item.is_shortlisted ? 'heart-color' : 'heart'}.svg`)"
              @click="item.is_shortlisted = !item.is_shortlisted"
            >
          </div>
          <div class="mt-4">
            <div class="name-bold">{{ item.name }}</div>
            <div class="wrap-info">
              <div class="title-info">Type</div>
              <div class="text-info">{{ item.institution_type | capitalized }}</div>
            </div>
            <div class="wrap-info">
              <div class="title-info">Admittance</div>
              <div class="text-info">{{ item.ownership | capitalized }}</div>
            </div>
            <div class="wrap-info">
              <div class="title-info">Programs</div>
              <div class="text-info">
                {{ programsName(item.majors) }}
              </div>
            </div>
            <div class="wrap-info">
              <div class="title-info">State</div>
              <div class="text-info">{{ item.state.name }}</div>
            </div>
            <div class="wrap-info">
              <div class="title-info">Address</div>
              <div class="name-bold">{{ item.titleAddress }}</div>
              <div class="text-info">{{ item.shortAddress }}</div>
            </div>
            <div class="wrap-info">
              <div class="title-info">Phone</div>
              <div class="text-info">{{ item.phone_number }}</div>
            </div>
            <div class="wrap-info">
              <div class="title-info">Studies</div>
              <div class="mb-4">
                <div class="name-bold">{{ programsName(item.study_levels) }}</div>
                <div class="wrap-chip">
                  <div class="chip-square" v-for="(itemCategory, indexCategory) in item.interests" :key="indexCategory">
                    {{ itemCategory.name }}
                  </div>
                </div>
              </div>
            </div>
            <div class="wrap-info">
              <nuxt-link :to="`/institutions/${item.id}`">
                see all
              </nuxt-link>
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
      listCompare: [],
      loading: true
    }
  },
  async mounted() {
    await this.$axios.post("v1/institutions/compares", this.$route.query, this.token)
    .then((res) => {
      if (res.status == 200) {
        this.listCompare = res.data.data.institutions
        if (this.listCompare.length != 0) {
          this.listCompare.forEach((element, index) => {
            this.listCompare[index] = {
              ...this.listCompare[index],
              shortAddress: element.address.slice(element.address.indexOf(", ")+2, element.address.length),
              titleAddress: element.address.slice(0, element.address.indexOf(", "))
            }
          });
        }
      }
    })
    .catch(err => {})
    this.loading = false
  },
  methods: {
    programsName(list) {
      var names = list.map(function(item) {
        return item['name'];
      });
      return names.length == 0 ? "-" : names.toString().replace(/,/g, ", ")
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