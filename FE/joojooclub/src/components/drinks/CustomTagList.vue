<template>
  <div>
    <div class="d-flex align-items-center flex-wrap mt-3">
      <custom-tag-list-item
      class="btn btn-light"
      v-for="(customTag, index) in tagList.customTagList"
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
    ...mapState('drinks', ['tagList']),
  },
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
</style>