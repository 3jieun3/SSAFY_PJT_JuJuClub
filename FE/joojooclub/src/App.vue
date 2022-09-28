<template>
  <div id="app">
    <nav-bar :currentUser="currentUser" :todayDrinks="todayDrinks"></nav-bar>
    <div v-if="drinkList">{{ drinkList }}</div>
    <router-view />
    <footer-com></footer-com>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import NavBar from '@/components/NavBar.vue'
import FooterCom from './components/FooterCom.vue'

export default {
  name: 'App',
  components: { NavBar, FooterCom },
  data() {
    return {
      drinkList: null,
      show: false,
    }
  },
  computed: {
    ...mapGetters(['currentUser']),
    ...mapGetters('drinks', ['todayDrinks',]),
  },
  methods: {
    ...mapActions(['fetchCurrentUser',]), // accounts.js
    ...mapActions('drinks', ['getWeatherInfo']),  // drinks.js
    async getInfo(data) {
      this.drinkList = data
      this.show = true
    },
  },
  async created () {
    try {
      await this.fetchCurrentUser()
      await this.getWeatherInfo()
      await this.getInfo(this.todayDrinks)
      // await function () {
      //   setTimeout(this.getInfo(this.todayDrinks), 100);
      // }
    } catch {
      console.log("error")
    }
  },
  updated() {
    
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
