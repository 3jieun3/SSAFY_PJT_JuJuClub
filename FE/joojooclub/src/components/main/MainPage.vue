<template>
  <div>
    <main-image></main-image>
    <!-- 날씨 표시 -->
    <!-- <div class="weather-forecast d-flex flex-column align-items-start px-5 pt-4">
      <i class="weather-text fa-solid fa-location-dot mb-1"> {{ weatherInfo.location }}</i>
      <div class="d-flex justify-content-between mb-1">
        <i class="weather-text fa-solid fa-droplet humidity"> {{ weatherInfo.humidity }}%</i>
        <i class="weather-text fa-solid fa-temperature-three-quarters"> {{ weatherInfo.temparature }}℃</i>
      </div>
      <div class="weather-text fa">{{ weatherInfo.weather }}, {{ weatherInfo.weather_description }}</div>
    </div> -->
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
      weatherType: {
        'Clouds': ['Clouds'],
        'Clear': ['Clear'],
        'Atmosphere': ['Mist', 'Smoke', 'Haze', 'Dust', 'Fog', 'Sand', 'Dust', 'Ash', 'Squall', 'Tornado'],
        'Snow': ['Snow'],
        'Rain': ['Rain'],
        'Drizzle': ['Drizzle'],
        'Thunderstorm': ['Thunderstorm'],
      }
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

<style>
.whole-page {
  position: relative;
}

.weather-forecast {
  position: absolute;
  font-size: min(1.5vw, 1rem);
}

.humidity {
  margin-right: 15px;
}

@media (min-width: 600px) {
  .humidity {
    margin-right: 40px;
  }
}
</style>