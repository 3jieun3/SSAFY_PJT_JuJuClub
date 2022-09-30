<template>
  <div>
    <div class="d-flex align-items-center flex-wrap mt-3">
      <custom-tag-list-item
      class="btn btn-light"
      v-for="(customTag, index) in customTagList"
      :key="index"
      :customTag="customTag"
      :index="index"></custom-tag-list-item>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CustomTagListItem from './CustomTagListItem';

export default {

  name: 'CustomTagList',
  components: {
    CustomTagListItem,
  },
  computed: {
    ...mapState('drinks', ['customTagList']),
  },
}
</script>

<style scoped>

  * {
    font-family: 'NanumBarunGothic';
  }

  button {
    margin: 10px;
    font-size: min(3vw, 1rem);
  }
  @media (max-width: 700px) {
    button {
      margin: 5px;
      padding: 4px 8px;
    }
  }
</style>