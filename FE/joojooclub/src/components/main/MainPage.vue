<template>
  <div>
    <main-image></main-image>
    <div class="d-flex flex-column align-items-start p-5">
      <div>{{ nowDate }} {{ nowWeekday }} {{ weatherInfo.country }}, {{ weatherInfo.location }}</div>
      <div class="d-flex justify-content-between">
        <div class="me-5">습도: {{ weatherInfo.humidity }} %</div>
        <div>온도: {{ weatherInfo.temparature }} ℃</div>
      </div>
      <div>오늘 날씨: {{ weatherInfo.weather }} / {{ weatherInfo.weather_description }}</div>
    </div>
    <todays-drink-list :drinkList="drinkList"></todays-drink-list>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import MainImage from './MainImage.vue';
import TodaysDrinkList from './TodaysDrinkList.vue';


export default {
  name : 'MainPage',
  components : {
    MainImage,
    TodaysDrinkList,
  },
  data() {
    return {
      nowTime: null,
      nowDate: null,
      nowWeekday: null,
      drinkList: null,
    }
  },
  computed: {
    ...mapGetters('drinks', ['weatherInfo', 'todayDrinks'])
  },
  methods: {
    ...mapActions('drinks', ['getWeatherInfo',]),
    async getInfo(data) {
      this.drinkList = data
    },
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
  async created () {
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
    try {
      await this.getWeatherInfo()
      await this.getInfo(this.todayDrinks)
    } catch {
      console.log("error")
    }
  },
  updated() {
    this.init();
    this.nowTimes();
  }
}
</script>