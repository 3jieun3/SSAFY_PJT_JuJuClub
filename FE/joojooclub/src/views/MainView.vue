<template>
  <div>
    <main-page v-if="todayDrinks"></main-page>
  </div>
</template>

<script>
import MainPage from '@/components/main/MainPage.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'MainView',
  components: {
    MainPage,
  },
  data() {
    return {
      drinkList: null,
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