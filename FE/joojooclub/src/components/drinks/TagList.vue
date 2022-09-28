<template>
  <div class="container">
    <basic-tag-list></basic-tag-list>
    <custom-tag-list></custom-tag-list>
    <hr>
    <div class="searchBtn">
      <button class="btn btn-warning justify-content-end"
      @click="tagSearch(1)">조회하기</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import BasicTagList from './BasicTagList.vue'
import CustomTagList from './CustomTagList.vue'

export default {
  name: 'TagList',
  components: {
    BasicTagList,
    CustomTagList,
  },
  methods: {
    ...mapActions('drinks', ['tagSearch'])
  }
}
</script>

<style scoped>
  .container {
    margin-top: 100px;
    border: 4px solid lightcoral;
    /* color: bisque; */
    padding: 2vw;
    border-radius: 1rem;
  }

  .searchBtn {
    display: flex;
    justify-content: start;
    margin-top: 20px;
  }

  @media (max-width: 850px) {
    .container {
      padding: 3rem;
    }
  }

</style>