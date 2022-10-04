<template>
  <div class="container my-5 p-5 border">
    <p class="title1">404</p>
    <p class="title1 mb-3">Not Found</p>
    <p class="content">요청한 페이지를 찾을 수 없습니다.</p>
    <p class="content mb-5">입력한 주소가 정확한지 다시 한 번 확인해주세요.</p>
    <button class="btn btn-secondary" @click="goMain">홈으로 가기</button>
  </div>
</template>

<script>
export default {
  name: 'NotFound404',
  methods: {
    goMain() {
      this.$router.push('/')
    }
  }
}
</script>

<style>
.title1 {
  font-size: min(5vw, 4rem);
  font-weight: bold;
  color: red;
  margin: 0;
}

.content {
  /* font-size: min(2vw, 1.5rem); */
  margin: 0;
}
</style>