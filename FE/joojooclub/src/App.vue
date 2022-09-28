<template>
  <div id="app">
    <nav-bar :currentUser="currentUser"></nav-bar>
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
  computed: {
    ...mapGetters(['currentUser']),
  },
  methods: {
    ...mapActions(['fetchCurrentUser',]), // accounts.js
  },
  created () {
    this.fetchCurrentUser()
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
