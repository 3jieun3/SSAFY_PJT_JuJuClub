<template>
  <div>
    <div class="container justify-content-center align-items-center">
      <div class="wrapToday">
        <div class="content">
          <p>오늘의 술</p>
        </div>
      </div>
    </div>
    <div class="container col">
      <todays-drink-list-item
      class="today"
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
    width: 1280px;
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