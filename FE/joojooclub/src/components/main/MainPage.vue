<template>
  <div>
    <main-image></main-image>
    <!-- <div class="d-flex flex-column align-items-start p-5">
      <div>{{ nowDate }} {{ nowWeekday }} {{ weatherInfo.country }}, {{ weatherInfo.location }}</div>
      <div class="d-flex justify-content-between">
        <div class="me-5">습도: {{ weatherInfo.humidity }} %</div>
        <div>온도: {{ weatherInfo.temparature }} ℃</div>
      </div>
      <div>오늘 날씨: {{ weatherInfo.weather }} / {{ weatherInfo.weather_description }}</div>
    </div> -->
    <todays-drink-list :todayDrinks="todayDrinks" :todayDrinkList="todayDrinkList"></todays-drink-list>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import MainImage from './MainImage.vue';
import TodaysDrinkList from './TodaysDrinkList.vue';


export default {
  name : 'MainPage',
  components : {
    MainImage,
    TodaysDrinkList,
  },
  props: {
    todayDrinks: Object
  },
  data() {
    return {
      nowTime: null,
      nowDate: null,
      nowWeekday: null,
      todayDrinkList: {},
    }
  },
  methods: {
    ...mapActions('drinks', ['getTodayWeekDrink', 'getTodayWeatherDrink',]),
    setDate(){
      const hour =new Date().getHours() < 10? "0" + new Date().getHours(): new Date().getHours();
      const minute =new Date().getMinutes() < 10? "0" + new Date().getMinutes(): new Date().getMinutes();
      const seconds =new Date().getSeconds() < 10? "0" + new Date().getSeconds(): new Date().getSeconds();
      return {
        'hour' : hour, 
        'minute' : minute,
        'seconds' : seconds,
      }
    },
    nowTimes() {
      this.nowTime = this.setDate().hour + ":" + this.setDate().minute + ":" + this.setDate().seconds;
    },
    init() {
      setInterval(this.nowTimes, 1000);
    },
  },
  created() {
    this.init();
    this.nowTimes();
    this.nowDate = new Date().toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    this.nowWeekday = new Date().toLocaleDateString('ko-KR', {
        weekday: 'long',
    })
},
  updated() {
    this.init();
    this.nowTimes();
  }
}
</script>