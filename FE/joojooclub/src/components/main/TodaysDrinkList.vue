<template>
  <div class="container todayDrinkList">
    <div class="justify-content-center align-items-center">
      <div>
        <div class="">
          <h1 class="recommendTitle mt-5">오늘의 술</h1>
          <div class="recommendComment">이런 술은 어떤가요? 색다른 술을 경험해보세요.</div>
        </div>
      </div>
    </div>
    <div v-if="drinkList" class="todayItems row">
      <todays-drink-list-item
      class="today my-5 align-items-center"
      v-for="todayDrink in drinkList"
      :key="todayDrink.drink.drinkIndex"
      :todayDrink="todayDrink">
      </todays-drink-list-item>
    </div>
  </div>
</template>

<script>
import TodaysDrinkListItem from './TodaysDrinkListItem';

export default {
  name : 'TodaysDrinkList',
  components: {
    TodaysDrinkListItem,
  },
  props: {
    weather: String,
    drinkList: Object,
  },
}
</script>

<style scoped>
.todayDrinkList {
  margin-top: 60px;
}
.recommendTitle {
  font-family: 'GongGothicMedium';
  font-size: min(5vw, 2rem);
}
.recommendComment {
  font-family: 'NanumSquareRound';
  font-size: min(3.5vw, 1.5rem);
}
@media (min-width: 700px) {
  .todayDrinkList {
  margin-top: 100px;
}
}
</style>