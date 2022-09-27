<template>
  <div>
    <div class="background-wrap">
      <div class="content">
        <div id="welcomeMent" class="animationTarget">
          <p>한국 전통의 맛을</p>
          <p>경험해보세요</p>
        </div>
        <button class="btn btn-warning mx-5"
        @click="goRecommend">전통주 맞춤추천</button>
        <button class="btn btn-warning mx-5"
        @click="goDrinks">전통주 검색하기</button>
      </div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js'
import router from '@/router'

export default {
  name : 'MainImage',
  methods: {
    moving() {
      anime({
        targets: '.animationTarget',
        opacity: ['0', '1'],
        translateY: '-150px',
        duration: 5000
      })
    },
    goRecommend() {
      router.push('recommend')
    },
    goDrinks() {
      router.push('drinks')
    }
  },
  created() {
    setTimeout(this.moving, 0)
  },
}
</script>

<style scoped>

  #welcomeMent {
    color: white;
    font-size: 45px;
    width: auto;
  }

  .background-wrap {
    background: url(@/assets/mainImage.png) no-repeat center;
    position: relative;
    height: 80vh;
    }

  .content {
    height: 30px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    justify-content: center;
  }
</style>