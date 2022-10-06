<template>
  <div class="this-container">
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
  .this-container {
    margin: 100px 41px 0 41px;
    border: 4px solid lightcoral;
    /* color: bisque; */
    padding: 20.84px;
    border-radius: 1rem;
  }

  .btn {
    font-family: 'NanumSquareRound';
    font-size: min(3vw, 1rem);
  }

  .searchBtn {
    display: flex;
    justify-content: start;
    margin-top: 20px;
    /* margin-bottom: 4px; */
  }

  @media (max-width: 700px) {
    .this-container {
      border-radius: 1rem;
      margin: 50px 10px 0 10px;
      padding: 12px;
    }

    .searchBtn {
      margin-bottom: 10px;
    }
  }

</style>