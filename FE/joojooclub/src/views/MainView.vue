<template>
  <div>
    <main-page v-if="todayDrinks" :todayDrinks="todayDrinks"></main-page>
  </div>
</template>

<script>
import MainPage from '@/components/main/MainPage.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'MainView',
  delay: 4000,
  components: {
    MainPage,
  },
  data() {
    return {
      drinkList: {},
      show: false,
    }
  },
  computed: {
    ...mapGetters('drinks', ['todayDrinks',]),
  },
  methods: {
    ...mapActions('drinks', ['getWeatherInfo']),  // drinks.js
    async getInfo(data) {
      this.drinkList = data
      this.show = true
    },
    // onGeoOk(position) {
    //   const lat = position.coords.latitude;
    //   const lon = position.coords.longitude;
    //   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.API_KEY}&units=metric`;
    //   fetch(url).then((res) => res.json()).then((data) => {
    //     this.weatherInfo.latitude = data.coord.lat;
    //     this.weatherInfo.longitude = data.coord.lon;
    //     this.weatherInfo.country = data.sys.country;
    //     this.weatherInfo.location = data.name;
    //     this.weatherInfo.humidity = data.main.humidity;
    //     this.weatherInfo.temparature = data.main.temp;
    //     this.weatherInfo.weather = data.weather[0].main;
    //     this.weatherInfo.weather_description = data.weather[0].description;
    //   });
    // },
    // onGeoError() {
    //   alert("Can't find you. No weather for you")
    // }
  },
  async created () {
    try {
      await this.getWeatherInfo()
      await this.getInfo(this.todayDrinks)
      // await function () {
      //   setTimeout(this.getInfo(this.todayDrinks), 100);
      // }
    } catch {
      console.log("error")
    }
  },
}
</script>

<style>

</style>