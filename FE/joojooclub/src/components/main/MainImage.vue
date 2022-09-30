<template>
  <div>
    <div class="background-wrap">
      <div class="content">
        <div id="welcomeMent" class="animationTarget">
          <p class="m-0">한국 전통의 맛을 경험해보세요</p>
        </div>
        <button class="main-btn btn btn-warning mx-3 mx-md-5"
        @click="goRecommend">전통주 맞춤추천</button>
        <button class="main-btn btn btn-warning mx-3 mx-md-5"
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
        translateY: ('-10vw', '-50px'),
        duration: 5000,
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

  

  .background-wrap {
    background-image: url("@/assets/mainImage.png");
    background-size: cover;
    position: relative;
    height: min(80vh, 600px);
  }
  .content {
    height: 30px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* justify-content: center; */
  }
  #welcomeMent {
    font-family: ChosunKm;
    color: white;
    font-size: 3rem;
    width: auto;
  }
  @media (max-width: 600px) {
    .background-wrap {
      height: 300px;
    }
    #welcomeMent {
      font-size: 1.6rem;
    }
  }
  .main-btn {
    font-family: 'NanumBarunGothic';
    font-size: min(2vw, 1rem);
    opacity: 0.8;
  }
</style>