<template>
  <div>
    <div class="container justify-content-center">
      <div class="text-on-img">
        <div class="background-wrap">
          <div class="content">
            <p id="welcomeMent" class="animationTarget">한국 전통의 맛을 경험해보세요</p>
            <button class="btn btn-warning mx-5">전통주 맞춤추천</button>
            <button class="btn btn-warning ">전통주 검색하기</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js'

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
    },
    created() {
      setTimeout(this.moving, 0)
    }
}
</script>

<style>

  #welcomeMent {
    color: white;
    font-size: 70px;
  }

  .background-wrap {
  background-image: url(@/assets/mainImage.jpg);
  background-size: 1280px 720px;
  width: 1280px;
  height: 720px;
  display: flex;
  justify-content: center;
  align-items: center;
  }

  .content {
    margin-top: 50px;
  }
</style>