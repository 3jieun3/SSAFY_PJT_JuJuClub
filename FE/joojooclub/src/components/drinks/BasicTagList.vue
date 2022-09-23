<template>
  <div>
    <div class="basicTag d-flex align-items-center flex-wrap">
      <h4>당도</h4>
      <div>
        <button class="btn btn-light"
        v-for="sweetTag in tagList.sweetSelect"
        :key="sweetTag">{{ sweetTag }}</button>
      </div>
    </div>
    <hr>
    <div class="basicTag d-flex align-items-center flex-wrap">
      <h4>도수</h4>
      <div>
        <button class="btn btn-light"
        v-for="percentTag in tagList.percentSelect"
        :key="percentTag">{{ percentTag }}</button>
      </div>
    </div>
    <hr>
    <div class="basicTag d-flex align-items-center flex-wrap">
      <h4>주종</h4>
      <div>
        <button class="btn btn-light"
        v-for="kindTag in tagList.kindSelect"
        :key="kindTag">{{ kindTag }}</button>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {

  name: 'BasicTagList',
  computed: {
    ...mapState('drinks', ['tagList'])
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