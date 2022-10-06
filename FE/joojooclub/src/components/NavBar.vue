<template>
  <!-- <div class="sticky-top" style="background-color: white;"> -->
  <div>
    <nav class="navbar navbar-expand-md">
      <div class="container-fluid">
        <!-- 로고 -->
        <div class="order-1 order-md-0 ms-5 ms-md-0">
          <router-link to="/" class="navbar-brand m-0" aria-current="page">
            <img class="logo" src="@/assets/logo_for_header.png" alt="Logo">
          </router-link>
        </div>
        <!-- 햄버거: 공통 페이지 -->
        <button class="navbar-toggler order-0 order-md-1 m-0 p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fa-solid fa-bars hamberger"></i>
        </button>
        <div class="collapse navbar-collapse order-3 order-md-1" id="navbarNav">
          <ul class="navbar-nav col justify-content-start align-items-start .d-none .d-md-block .d-lg-none">
            <li class="nav-item mt-2" @click="[clearQuestionCount(), clearChoose()]">
              <router-link to="/recommend" class="nav-common px-2 ps-2 ps-md-5 pe-2">Recommend</router-link>
            </li>
            <li @click="clearSearchDrink()" class="nav-item mt-2">
              <router-link to="/drinks" class="nav-common px-2">Drinks</router-link>
            </li>
            <li class="nav-item my-2">
              <router-link :to="{ name: 'feed' }" class="nav-common px-2">Feed</router-link>
            </li>
          </ul>
        </div>
        <!-- 구분 페이지 -->
        <div class="order-2 order-md-2">
          <ul class="navbar-nav">
          <!-- 로그인 여부에 따라 구분 -->
            <!-- 로그인하지 않은 사용자 이용 -->
            <div class="d-flex justify-content-end">
              <li class="nav-item">
                <router-link v-if="!isLoggedIn" to="/login" class="nav-link"><button type="button" class="colorbtn btn btn-outline-warning">Login</button></router-link>
              </li>
              <li class="nav-item d-flex justify-content-center align-items-center">
                <router-link v-if="!isLoggedIn" to="/signup" class="nav-link"><button type="button" class="colorbtn2 btn btn-warning">Sign Up</button></router-link>
              </li>
            </div>
            <!-- 로그인한 사용자 이용 -->
            <div class="d-flex justify-content-end">
              <li class="nav-item">
                <router-link v-if="isLoggedIn && currentUser" :to="{ name: 'profile', params: { userPK: currentUser.member?.memberIndex } }" class="nav-link"><button type="button" class="colorbtn btn btn-outline-warning">My Page</button></router-link>
              </li>
              <li class="nav-item d-flex justify-content-center align-items-center">
                <button v-if="isLoggedIn" @click="logout" class="colorbtn2 btn btn-warning">Log out</button>
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
    ...mapActions('drinks', ['clearQuestionCount', 'clearChoose', 'clearSearchDrink'])
  },
}
</script>

<style scoped>
* {
	font-family: 'NanumSquareRound';
}

:hover.nav-logout  {
  cursor: pointer;
}
.logo {
  width: 8vw;
  min-width: 35px;
  max-width: 50px;
}

:hover.nav-common {
  color: rgb(233, 187, 131);
}

a.router-link-exact-active {
  color: rgb(233, 187, 131);
}

.nav-common {
  font-size: min(4vw, 1.1rem);
}
.colorbtn {
  font-size: min(2vw, 1rem);
  padding: min(0.8vw, 4px) min(1.6vw, 1rem);
  margin: 5px;
  color: black;
}
.colorbtn2 {
  font-size: min(2vw, 1rem);
  padding: min(0.8vw, 4px) min(1.6vw, 1rem);
  margin: 5px;
}

.btn-outline-warning {
  color: black;
  border-color: rgb(237, 198, 150);
  border-radius: 10px;
}

.btn-outline-warning:hover,
.btn-outline-warning:focus,
.btn-outline-warning:active {
  background-color: rgb(233, 187, 131);
  color: black;
  border-color: rgb(233, 187, 131);
}
</style>