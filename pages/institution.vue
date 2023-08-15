<template>
  <div class="page-institution">
    <v-container class="py-5 d-flex justify-center">
      <div class="content-left">
        <InstitutionBanner />
        <InstitutionSearch class="mt-2" />
      </div>
      <div class="content-right">
        <CardTopCourse />
        <CardTopCategories class="my-2" />
        <CardAds />
      </div>
    </v-container>
  </div>
</template>

<style lang="scss">
  .page-institution {
    background: $color-lightest-grey;

    .content-left {
      margin-right: 16px;
      width: 100%;
      max-width: 888px;
    }

    .content-right {
      width: 100%;
      max-width: 270px;
    }
  }

  @media screen and(max-width: 890px) {
    .page-institution {
      .card-university,
      .card-college {
        .card-content {
          flex-wrap: wrap;
        }

        .group-info {
          width: 100%;
          margin-top: 12px;
        }
      }
    }
  }

  @media screen and(max-width: 750px) {
    .page-institution {
      .institution-search {
        .search-filter {
          div:first-child {
            flex-wrap: wrap;

            .wrap-select {
              width: 100%;
              margin-right: 0px;
              margin-bottom: 12px;
            }

            .wrap-select:last-child {
              margin-bottom: 0px;
            }
          }
        }
      }

      .card-university,
      .card-college {
        .card-content {
          .wrap-info:first-child {
            margin-left: 0px;
          }
        }
      }
    }
  }

  @media screen and(max-width: 650px) {
    .page-institution {
      .container {
        flex-wrap: wrap;

        .content-left {
          margin-right: 0px;
          max-width: 100%;
          margin-bottom: 8px;
        }

        .content-right {
          max-width: 100%;
        }
      }
    }
  }
</style>