<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid justify-content-center align-items-center">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav col justify-content-between align-items-center">
            <!-- 전체 사용자 이용 -->
            <div class="d-flex">
              <li class="nav-item">
                <router-link to="/" class="nav-link active" aria-current="page">Main</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/recommend" class="nav-link">Recommend</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/drinks" class="nav-link">Drinks</router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'feed' }" class="nav-link">Feed</router-link>
              </li>
            </div>
            <div class="d-flex">
              <!-- 로그인하지 않은 사용자 이용 -->
              <li class="nav-item">
                <router-link v-if="!isLoggedIn" to="/signup" class="nav-link">Sign Up</router-link>
              </li>
              <li class="nav-item">
                <router-link v-if="!isLoggedIn" to="/login" class="nav-link">Login</router-link>
              </li>
              <!-- 로그인한 사용자 이용 -->
              <li class="nav-item">
                <a v-if="isLoggedIn" @click="logout" class="nav-link">로그아웃</a>
              </li>
              <li class="nav-item">
                <!-- <a v-if="currentUser.member.memberIndex" class="nav-link" :href="getLink('profile/')+currentUser.member.memberIndex+'/'" >My Profile</a> -->
                <router-link v-if="currentUser" :to="{ name: 'profile', params: { userPK: 1 } }" class="nav-link">My Profile</router-link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'NavBar',
  props: {
    currentUser: Object,
  },
  computed: {
    ...mapGetters(['isLoggedIn', ])
  },
  methods: {
    ...mapActions(['logout', 'signout']),
    getLink(path) {
      const HOST = 'http://localhost:8080/'
      return HOST + path
    }
  },
  created() {
    console.log(this.currentUser)
  }
}
</script>

<style>

</style>