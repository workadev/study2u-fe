<template>
  <div class="table-pagination">
    <div class="pagination-center">
      <ul v-if="totalPages > 1">
        <li
          class="mr-4 regular-subtitle px-0 py-0"
          :class="{ disabled: pageNumber == 1 }"
          @click="prevPage()"
        >
          Prev
        </li>
        <li v-if="dotsLeft" @click="jumpPage(1)" class="page-number">
          <a
            role="button"
            :class="[1 === pageNumber ? 'active page' : '']"
            class="regular-body"
          >
            1
          </a>
        </li>
        <li
          v-if="dotsLeft && limitPage + 1 != totalPages"
          class="mr-1 ellipsis"
        >
          ...
        </li>
        <li
          v-for="num in pages"
          :key="num"
          class="page-number"
          :class="{ 
            active: num === pageNumber,
            'mr-0': num == totalPages
          }"
          @click="jumpPage(num)"
        >
          <div class="regular-body">{{ num }}</div>
        </li>
        <li
          v-if="dotsRight && limitPage + 1 != totalPages"
          class="mr-1 ellipsis"
        >
          ...
        </li>
        <li v-if="dotsRight" @click="jumpPage(totalPages)" class="page-number mr-0">
          <a
            role="button"
            :class="[totalPages === pageNumber ? 'active page' : '']"
            class="regular-body"
          >
            {{ totalPages }}
          </a>
        </li>
        <li 
          class="ml-4 regular-subtitle px-0 py-0" 
          :class="{ disabled: pageNumber == totalPages }"
          @click="nextPage()"
        >
          Next
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    totalPages: {
      type: [Number],
      required: true,
    },
    pageNumber: {
      type: [Number],
      required: true,
    },
    limitPage: {
      type: [Number],
      required: true,
    },
  },
  data() {
    return {
      dotsRight: false,
      dotsLeft: false,
      pages: [],
    };
  },
  watch: {
    totalPages() {
      this.clickPaging(this.pageNumber);
    },
  },
  mounted() {
    this.clickPaging(this.pageNumber);
  },
  methods: {
    jumpPage(val) {
      if (this.pageNumber != val) {
        this.clickPaging(val);
        this.$emit("clickPage", val);
      }
    },
    nextPage() {
      if (this.totalPages != this.pageNumber) {
        this.clickPaging(this.pageNumber + 1);
        this.$emit("clickPage", this.pageNumber + 1);
      }
    },
    prevPage() {
      if (this.pageNumber != 1) {
        this.clickPaging(this.pageNumber - 1);
        this.$emit("clickPage", this.pageNumber - 1);
      }
    },
    clickPaging(page) {
      if (page >= 1 && page <= this.totalPages) {
        let datapage = [];
        for (let index = 0; index < this.totalPages; index++) {
          datapage[index] = index + 1;
        }

        if (this.totalPages > this.limitPage) {
          if (page == 1) {
            let setPages = datapage.slice(0, this.limitPage);
            this.dotsRight = true;
            this.dotsLeft = false;
            if (setPages.length === this.limitPage) {
              this.pages = setPages;
            } else {
              this.pages = datapage.slice(
                this.totalPages - this.limitPage,
                this.totalPages
              );
            }
          } else if (page === this.totalPages) {
            let setPages = datapage.slice(
              this.totalPages - this.limitPage,
              this.totalPages
            );
            this.dotsRight = false;
            this.dotsLeft = true;
            if (setPages.length === this.limitPage) {
              this.pages = setPages;
            } else {
              this.pages = datapage.slice(
                this.totalPages - this.limitPage,
                this.totalPages
              );
            }
          }

          if (this.pages[this.pages.length - 1] == page) {
            let setPages = datapage.slice(page - 2, this.limitPage + page - 2);
            (this.dotsRight =
              this.totalPages === setPages[setPages.length - 1] ? false : true),
              (this.dotsLeft = true);
            if (setPages.length === this.limitPage) {
              this.pages = setPages;
            } else {
              this.pages = datapage.slice(
                this.totalPages - this.limitPage,
                this.totalPages
              );
            }
          } else {
            if (this.pages[0] == page) {
              let getStart =
                page - this.limitPage <= 0 ? 0 : page - this.limitPage + 1;
              let getEnd = getStart === 0 ? this.limitPage : this.pages[0] + 1;
              let setPages = datapage.slice(getStart, getEnd);
              this.dotsRight = true;
              this.dotsLeft =
                setPages[setPages.length - 1] === this.limitPage ? false : true;
              if (setPages.length === this.limitPage) {
                this.pages = setPages;
              } else {
                this.pages = datapage.slice(
                  this.totalPages - this.limitPage,
                  this.totalPages
                );
              }
            }
          }
        } else {
          this.pages = datapage;
          this.dotsRight = false;
          this.dotsLeft = false;
        }
      }
    },
  },
};
</script>

<style lang="scss">
.table-pagination {
  color: $color-black;
  display: flex;
  align-items: center;

  .pagination-center {
    ul {
      display: flex;
      list-style: none;
      padding: 0 12px;
      margin: 0px;
      align-items: center;

      li {
        display: flex;
        cursor: pointer;
        padding: 4px 10px;
        min-width: 30px;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        transition: all 0.2s;
      }

      .page-number {
        margin-right: 5px;
        border: 1px solid $color-pacific;
      }

      .ellipsis {
        cursor: default;
        padding: 0 12px;
      }

      .ellipsis:hover {
        background: none;
      }

      .active,
      .active:hover {
        background: $color-pacific;
      }
    }

    .disabled {
      pointer-events: none;
      color: $color-grey;
    }
  }
}
</style>
