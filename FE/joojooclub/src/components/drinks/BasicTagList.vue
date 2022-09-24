<template>
  <div>
    <div class="basicTag d-flex align-items-center flex-wrap">
      <h4>주종</h4>
      <div>
        <button class="btn btn-light"
        v-for="(typeTag, index) in typeTagList"
        :key="index"
        @click="tagClicked(typeTag)"
        :class="{'selected' : typeTag.isClicked}">{{ typeTag.tagName }}</button>
      </div>
    </div>
    <hr>
    <div class="basicTag d-flex align-items-center flex-wrap">
      <h4>도수</h4>
      <div>
        <button class="btn btn-light"
        v-for="(percentTag, index) in percentTagList"
        :key="index"
        @click="tagClicked(percentTag)"
        :class="{'selected' : percentTag.isClicked}">{{ percentTag.tagName }}</button>
      </div>
    </div>
    <hr>
    <div class="basicTag d-flex align-items-center flex-wrap">
      <h4>산미</h4>
      <div>
        <button class="btn btn-light"
        v-for="(acidTag, index) in acidTagList"
        :key="index"
        @click="tagClicked(acidTag)"
        :class="{'selected' : acidTag.isClicked}">{{ acidTag.tagName }}</button>
      </div>
    </div>
    <hr>
    <div class="basicTag d-flex align-items-center flex-wrap">
      <h4>당도</h4>
      <div>
        <button class="btn btn-light"
        v-for="(sweetTag, index) in sweetTagList"
        :key="index"
        @click="tagClicked(sweetTag)"
        :class="{'selected' : sweetTag.isClicked}">{{ sweetTag.tagName }}</button>
      </div>
    </div>
    <hr>
    <div class="basicTag d-flex align-items-center flex-wrap">
      <h4>과일</h4>
      <div>
        <button class="btn btn-light"
        v-for="(fruitTag, index) in fruitTagList"
        :key="index"
        @click="tagClicked(fruitTag)"
        :class="{'selected' : fruitTag.isClicked}">{{ fruitTag.tagName }}</button>
      </div>
    </div>
    <hr>
    <div class="basicTag d-flex align-items-center flex-wrap">
      <h4>바디감</h4>
      <div>
        <button class="btn btn-light"
        v-for="(bodyTag, index) in bodyTagList"
        :key="index"
        @click="tagClicked(bodyTag)"
        :class="{'selected' : bodyTag.isClicked}">{{ bodyTag.tagName }}</button>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {

  name: 'BasicTagList',
  computed: {
    ...mapState('drinks', ['typeTagList', 'percentTagList', 'acidTagList', 'sweetTagList', 'fruitTagList', 'bodyTagList'])
  },
  methods: {
    ...mapActions('drinks', ['tagClicked'])
  }
}
</script>

<style scope>
  button {
    margin: 10px;
  }

  h4 {
    margin-top: 8px;
    margin-right: 10px;
  }

  .basicTag {
    margin-bottom: 20px;
  }
</style>