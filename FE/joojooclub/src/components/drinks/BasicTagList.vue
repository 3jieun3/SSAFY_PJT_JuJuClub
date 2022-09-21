<template>
  <div>
    <div class="d-flex align-items-center">
      <h4>당도</h4>
      <button class="btn btn-light"
      v-for="sweetTag in basicTagList.sweetSelect"
      :key="sweetTag">{{ sweetTag }}</button>
    </div>
    <div class="d-flex align-items-center">
      <h4>도수</h4>
      <button class="btn btn-light"
      v-for="percentTag in basicTagList.percentSelect"
      :key="percentTag">{{ percentTag }}</button>
    </div>
    <div class="d-flex align-items-center">
      <h4>주종</h4>
      <button class="btn btn-light"
      v-for="kindTag in basicTagList.kindSelect"
      :key="kindTag">{{ kindTag }}</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {

  name: 'BasicTagList',
  computed: {
    ...mapState('drinks', ['basicTagList'])
  }
}
</script>

<style>

</style>