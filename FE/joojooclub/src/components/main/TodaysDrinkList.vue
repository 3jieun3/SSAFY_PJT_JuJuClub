<template>
  <div class="container mt-5">
    <div class="justify-content-center align-items-center">
      <div class="wrapToday">
        <div class="content">
          <h1 class="mt-5">오늘의 술</h1>
          <h3>이런 술은 어떤가요?</h3>
        </div>
      </div>
    </div>
    <div class="todayItems row">
      <todays-drink-list-item
      class="today my-5 align-items-center"
      v-for="todayDrink in todayDrinks"
      :key="todayDrink.drink"
      :todayDrink="todayDrink">
      </todays-drink-list-item>
    </div>
  </div>
</template>

<script>
import TodaysDrinkListItem from './TodaysDrinkListItem';
import { mapState } from 'vuex'

export default {
  name : 'TodaysDrinkList',
  components: {
    TodaysDrinkListItem,
  },
  computed: {
    ...mapState('drinks',['todayDrinks'])
  }
}
</script>

<style>
  .wrapToday {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  
  .todayLeft {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 100px;
  }
  
  .todayRight {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin-top: 100px;
  }

</style>