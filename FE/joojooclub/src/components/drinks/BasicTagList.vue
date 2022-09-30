<template>
  <div>
    <div class="basicTag d-flex align-items-center flex-wrap">
      <h4>주종</h4>
      <div>
        <button class="btn btn-light"
        v-for="(typeTag, index) in getTypeTagList"
        :key="index"
        @click="basicTagClicked([0, typeTag])"
        :class="{'selected' : typeTag.isClicked}">{{ typeTag.tagName }}</button>
      </div>
    </div>
    <hr>
    <div class="basicTag d-flex align-items-center flex-wrap">
      <h4>도수</h4>
      <div>
        <button class="btn btn-light"
        v-for="(percentTag, index) in getPercentTagList"
        :key="index"
        @click="basicTagClicked([1, percentTag])"
        :class="{'selected' : percentTag.isClicked}">{{ percentTag.tagName }}</button>
      </div>
    </div>
    <hr>
    <div class="basicTag d-flex align-items-center flex-wrap">
      <h4>산미</h4>
      <div>
        <button class="btn btn-light"
        v-for="(acidTag, index) in getAcidTagList"
        :key="index"
        @click="basicTagClicked([2, acidTag])"
        :class="{'selected' : acidTag.isClicked}">{{ acidTag.tagName }}</button>
      </div>
    </div>
    <hr>
    <div class="basicTag d-flex align-items-center flex-wrap">
      <h4>당도</h4>
      <div>
        <button class="btn btn-light"
        v-for="(sweetTag, index) in getSweetTagList"
        :key="index"
        @click="basicTagClicked([3, sweetTag])"
        :class="{'selected' : sweetTag.isClicked}">{{ sweetTag.tagName }}</button>
      </div>
    </div>
    <hr>
    <div class="basicTag d-flex align-items-center flex-wrap">
      <h4>과일</h4>
      <div>
        <button class="btn btn-light"
        v-for="(fruitTag, index) in getFruitTagList"
        :key="index"
        @click="basicTagClicked([4, fruitTag])"
        :class="{'selected' : fruitTag.isClicked}">{{ fruitTag.tagName }}</button>
      </div>
    </div>
    <hr>
    <div class="basicTag d-flex align-items-center flex-wrap">
      <h4>바디감</h4>
      <div>
        <button class="btn btn-light"
        v-for="(bodyTag, index) in getBodyTagList"
        :key="index"
        @click="basicTagClicked([5, bodyTag])"
        :class="{'selected' : bodyTag.isClicked}">{{ bodyTag.tagName }}</button>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {

  name: 'BasicTagList',
  computed: {
    ...mapGetters('drinks', ['getTypeTagList', 'getPercentTagList', 'getAcidTagList', 'getSweetTagList', 'getFruitTagList', 'getBodyTagList'])
  },
  methods: {
    ...mapActions('drinks', ['basicTagClicked'])
  }
}
</script>

<style scoped>
 * {
  font-family: 'NanumBarunGothic';
 }

  button {
    margin: 10px;
    /* font-size: min(4vw, 1rem); */
    font-size: min(3vw, 1rem);
  }
  h4 {
    margin-top: 15px !important;
    margin-right: 10px;
  }

  @media (max-width: 700px) {
    button {
      margin: 5px;
      padding: 4px 8px;
    }
    h4 {
      font-size: min(4vw, 1rem);
    }
  }

  .basicTag {
    margin-bottom: 10px;
  }

  .selected {
    background-color: bisque;
  }
</style>