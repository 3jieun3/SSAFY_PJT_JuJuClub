<template>
  <div class="drinkImg">
    <div class="mainText">
      <h2 class="text">{{ imageTitle }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name : 'DrinkImage',
  props: {
    imageTitle: String,
  },
}
</script>

<style scoped>
  .drinkImg {
    background: url(@/assets/recommendPage.png) no-repeat center;
    background-size: 100%;
    position: relative;
    height: 20vw;
  }

  .mainText {
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    justify-content: center;
  }

  .text {
    font-family: 'NanumSquareRound';
  }
</style>