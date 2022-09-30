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

.btn-warning {
  background-color: rgb(237, 198, 150);
  color: black;
  border-color: rgb(237, 198, 150);
  border-radius: 10px;
}

.btn-warning:hover,
.btn-warning:focus,
.btn-warning:active {
  background-color: rgb(233, 187, 131);
  color: black;
  border-color: rgb(233, 187, 131);
}

@font-face {
  font-family: 'NanumBarunGothic';
  font-style: normal;
  font-weight: 400;
  src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot');
  src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot?#iefix') format('embedded-opentype'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.woff') format('woff'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.ttf') format('truetype');
}

@font-face {
 font-family: 'NanumBarunGothic Bold';
 font-style: normal;
 font-weight: 700;
 src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.eot');
 src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.eot?#iefix') format('embedded-opentype'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.woff') format('woff'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.ttf') format('truetype')
}

@font-face {
  font-family: 'ChosunKm';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.0/ChosunKm.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
</style>
