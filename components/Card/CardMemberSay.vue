<template>
  <div class="card-member-say">
    <div class="d-flex align-start">
      <img src="@/assets/icons/chat-bubble-left-right.svg" alt="chat-bubble-left-right">
      <div class="regular-body ml-2">
        {{ data.comment }}
      </div>
    </div>
    <v-divider class="my-3" color="#C3C4C3" />
    <div class="user-profile">
      <img class="mr-1" :src="data.img">
      <div>
        <div class="semibold-body">
          {{ data.name }}
        </div>
        <div class="regular-body">
          {{ data.position }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"]
}
</script>

<style lang="scss">
  .card-member-say {
    background: $color-white;
    border-radius: 20px 0px 20px 0px;
    padding: 12px;
    margin: 0 6px;

    .user-profile {
      display: flex;
      align-items: center;

      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: contain;
      }
    }

    .regular-body {
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
</style>