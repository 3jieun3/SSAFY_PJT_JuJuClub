<template>
  <div>
    <div
    :class="{'todayRight mx-5' : todayDrink.drinkIndex, 'todayLeft mx-5' : !todayDrink.drinkIndex}">
      <div>
        <img class="drinkImg" :src="todayDrink.drinkImage" alt="">
      </div>
      <div class="mx-5">
        <p>{{ todayDrink.ment }}</p>
        <p>{{ todayDrink.drink }}</p>
        <p>{{ todayDrink.info }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodaysDrinkListItem',
  props: {
    todayDrink: Object,
  },
}
</script>

<style scoped>
  .drinkImg {
    width: 200px;
  }

</style>