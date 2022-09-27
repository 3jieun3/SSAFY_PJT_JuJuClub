<template>
  <div id="app">
    <nav-bar :currentUser="currentUser"></nav-bar>
    <!-- <div>
      <router-link to="/">Main</router-link> |
      <router-link to="/recommend">Recommend</router-link> |
      <router-link to="/drinks">Drinks</router-link> |
      <router-link :to="{ name: 'feed' }">Feed</router-link> |
      <router-link :to="{ name: 'profile', params: { userPK: 1 } }">My Profile</router-link> | 
      <router-link to="/signup">Sign Up</router-link> | 
      <router-link to="/login">Login</router-link> | 
      <router-link to="/member/update">회원정보 수정</router-link> | 
      <a href="" @click="logout">로그아웃</a> | 
      <router-link to="/signout">회원탈퇴</router-link> | 
      <router-link :to="{ name: 'drink', params: { drinkPK: 1 } }">Drink Detail</router-link>
    </div> -->
    <router-view/>
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
    ...mapGetters(['currentUser'])
  },
  methods: {
  ...mapActions(['fetchCurrentUser',])
  },
  created() {
    this.fetchCurrentUser()
  },
  updated() {
    // this.fetchCurrentUser()
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
