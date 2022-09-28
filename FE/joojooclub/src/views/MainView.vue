<template>
  <div>
    <main-page v-if="weatherInfo" :weatherInfo="weatherInfo"></main-page>
  </div>
</template>

<script>
import MainPage from '@/components/main/MainPage.vue';
import config from '@/api_key.js'

export default {
  name: 'MainView',
  components: {
    MainPage,
  },
  data() {
    return {
      API_KEY: config.VUE_APP_WEATHER_API,
      weatherInfo: {
        latitude: null, // 경도 ex) 36.1071
        longitude: null,  // 위도 ex) 128.408
        country: '',  // 국가 ex) KR
        location: '', // 지역 ex) Gumi
        humidity: null, // ex) 66
        temparature: null, // ex) 17.88
        weather: null,  // ex) clouds
        weather_description: '', // ex) overcast cloud
      },
    }
  },
  methods: {
    onGeoOk(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.API_KEY}&units=metric`;
      fetch(url).then((res) => res.json()).then((data) => {
        this.weatherInfo.latitude = data.coord.lat;
        this.weatherInfo.longitude = data.coord.lon;
        this.weatherInfo.country = data.sys.country;
        this.weatherInfo.location = data.name;
        this.weatherInfo.humidity = data.main.humidity;
        this.weatherInfo.temparature = data.main.temp;
        this.weatherInfo.weather = data.weather[0].main;
        this.weatherInfo.weather_description = data.weather[0].description;
      });
    },
    onGeoError() {
      alert("Can't find you. No weather for you")
    }
  },
  created() {
    navigator.geolocation.getCurrentPosition(this.onGeoOk, this.onGeoError)
  },
}
</script>

<style>

</style>