<template>
  <div>
    <nav class="navbar navbar-expand-md bg-light">
      <div class="container-fluid justify-content-center align-items-center">
        <router-link to="/" class="navbar-brand" aria-current="page">Navbar</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fa-solid fa-bars hamberger"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav col justify-content-between align-items-center">
            <!-- 전체 사용자 이용 -->
            <div class="d-flex flex-column align-items-end flex-md-row justify-content-md-center">
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
            <!-- 로그인 여부에 따라 구분 -->
            <div class="d-flex align-items-center">
              <!-- 로그인하지 않은 사용자 이용 -->
              <li class="nav-item">
                <router-link v-if="!isLoggedIn" to="/login" class="nav-link"><button type="button" class="btn btn-outline-warning py-1 px-3 m-0">Login</button></router-link>
              </li>
              <li class="nav-item">
                <router-link v-if="!isLoggedIn" to="/signup" class="nav-link"><button type="button" class="btn btn-warning py-1 px-3 m-0">Sign Up</button></router-link>
              </li>
              <!-- 로그인한 사용자 이용 -->
              <li class="nav-item">
                <router-link v-if="isLoggedIn && currentUser" :to="{ name: 'profile', params: { userPK: currentUser.member?.memberIndex } }" class="nav-link"><button type="button" class="btn btn-outline-warning py-1 px-3 m-0">My Page</button></router-link>
              </li>
              <li class="nav-item">
                <div>
                  <button v-if="isLoggedIn" @click="logout" class="btn btn-warning py-1 px-3 m-0">Log out</button>
                </div>
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
    // console.log(this.currentUser)
    // console.log(this.isLoggedIn)
  },
  updated() {
  }
}
</script>

<style>
:hover.nav-logout  {
  cursor: pointer;
}
.hamberger {
  /* background-color: black; */
}
</style>