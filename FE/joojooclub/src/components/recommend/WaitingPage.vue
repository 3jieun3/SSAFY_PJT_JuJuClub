<template>
  <div>
    <div class="title">
      <h2 class="titleText">어울리는 술을 찾고 있습니다...</h2>
    </div>
    <div class="container d-flex justify-content-center align-items-center">
      <bounce-loader class="" :loading="loading" :color="color" :size="size"></bounce-loader>
    </div>
  </div>
</template>

<script>
import router from '@/router'
import BounceLoader from 'vue-spinner/src/BounceLoader.vue'
   
export default {
  name: 'WaitingPage',
  components: {
    BounceLoader,
  },
  data() {
    return {
      color: "rgb(233, 187, 131)",
      size: '150px',
      loading: 'loading'
    }
  },
  created() {
    setTimeout(() => router.push({ name: 'recommendResult'}), 3500)
  }
}
</script>

<style scoped>
  .container {
    width: 100vw;
    height: 100vh;
  }

  .title {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 30%;
    left: 50%;
  }

  .titleText {
    font-family: 'GongGothicMedium' !important;
  }

</style>