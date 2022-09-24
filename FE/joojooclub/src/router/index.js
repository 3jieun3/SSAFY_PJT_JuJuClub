import Vue from 'vue'
import VueRouter from 'vue-router'

import MainView from '@/views/MainView'
import RecommendView from '@/views/RecommendView'
import RecommendResultView from '@/views/RecommendResultView'
import DrinksView from '@/views/DrinksView'
import DrinkDetailView from '@/views/DrinkDetailView'
import FeedView from '@/views/FeedView'
import ProfileView from '@/views/ProfileView'
import SignupView from '@/views/SignupView'
import MemberUpdateView from '@/views/MemberUpdateView'
import LoginView from '@/views/LoginView'
import SignOutView from '@/views/SignOutView'
// import store from '@/store'  // 추후 주석 해제 필요(로그인 접근 제한)

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/recommend',
    name: 'recommend',
    component: RecommendView
  },
  {
    path: '/recommend/result',
    name: 'recommendResult',
    component: RecommendResultView
  },
  {
    path: '/drinks',
    name: 'drinks',
    component: DrinksView
  },
  {
    path: '/drinks/:drinkPK',
    name: 'drink',
    component: DrinkDetailView
  },
  {
    path: '/feed',
    name: 'feed',
    component: FeedView
  },
  // {
  //   path: '/feed/new',
  //   name: 'feedNew',
  //   component: PostingNewView
  // },
  // {
  //   path: '/feed/:feedPK/edit',
  //   name: 'feedEdit',
  //   component: PostingEditView
  // },
  {
    path: '/profile/:userPK',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  // {
  //   path: '/logout',
  //   name: 'logout',
  //   component: LogoutView
  // },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/member/update',
    name: 'update',
    component: MemberUpdateView
  },
  {
    path: '/signout',
    name: 'signout',
    component: SignOutView
  },
  // {
  //   path: '/404',
  //   name: 'NotFound404',
  //   component: NotFound404
  // },
  // {
  //   path: '*',
  //   redirect: '/404'
  // },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() { 
    return { x: 0, y: 0 } 
  },
})

// router.beforeEach((to, from, next) => {
//   // 이전 페이지에서 뜬 에러 메세지 삭제
//   store.commit('SET_AUTH_ERROR', null)
//   const { isLoggedIn } = store.getters
//   // 로그인(Authentication)이 필요 없는 route 이름들 저장(/login, /signup)
//   const noAuthPages = ['login', 'signup']
//   const freePages = ['main', 'recommend', 'recommendResult', 'drinks', 'drink', 'feed',  'NotFound404',]
//   // 1. 현재 이동하고자 하는 페이지가 로그인이 필요한지 확인
//   const isAuthRequired = !noAuthPages.includes(to.name)
//   const freeAuthRequired = freePages.includes(to.name)
//   // 2. 로그인이 필요한 페이지인데 로그인이 되어있지 않다면 로그인 페이지(/login)로 이동
//   if (freeAuthRequired) {
//     next()
//   }
//   else if (isAuthRequired && !isLoggedIn) {
//     alert('로그인이 필요한 페이지입니다')
//     next({ name: 'login', })
//   } else {
//     next()
//   }
//   // 4. 로그인이 되어있는데 /login, /signup 페이지로 이동한다면 메인 페이지로 이동
//   if (!isAuthRequired && isLoggedIn) {
//     next({ name: 'main' })
//   }
// })

export default router
