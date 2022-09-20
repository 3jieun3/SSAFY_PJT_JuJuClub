import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '@/views/MainView'
import RecommendView from '@/views/RecommendView'
import RecommendResultView from '@/views/RecommendResultView'
import DrinksView from '@/views/DrinksView'

// import store from '@/store'

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
  // {
  //   path: '/drinks/:drinkPK',
  //   name: 'drink',
  //   component: DrinkDetailView
  // },
  // {
  //   path: '/feed',
  //   name: 'feed',
  //   component: FeedView
  // },
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
  // {
  //   path: '/profile/:userPK',
  //   name: 'profile',
  //   component: ProfileView
  // },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: LoginView
  // },
  // {
  //   path: '/logout',
  //   name: 'logout',
  //   component: LogoutView
  // },
  // {
  //   path: '/signup',
  //   name: 'signup',
  //   component: SignUpView
  // },
  // {
  //   path: '/signout',
  //   name: 'signout',
  //   component: SignOutView
  // },
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

export default router
