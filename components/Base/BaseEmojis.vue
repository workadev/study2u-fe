<template>
  <div v-if="show" class="base-emojis">
    <div>
      <div class="regular-subtitle">
        Smiley & Orang
      </div>
      <div>
        <v-btn
          text
          height="fit-content"
          min-width="fit-content"
          width="fit-content"
          class="px-0"
        >
          <h6 class="regular-h6">🙏</h6>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["show"],
  mounted() {
    
  },
}
</script>

<style lang="scss">
  .base-emojis {
    background: #fff;
    position: absolute;
    bottom: 0px;
    margin-bottom: 24px;
    left: 0px;
    width: max-content;
    padding: 10px;
    border-radius: 4px;
    box-shadow: 0px 4px 13px 0px rgba(0,0,0,0.25098);
  }
</style>