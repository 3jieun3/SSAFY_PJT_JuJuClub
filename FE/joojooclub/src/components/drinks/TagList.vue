<template>
  <div class="container">
    <basic-tag-list></basic-tag-list>
    <custom-tag-list></custom-tag-list>
  </div>
</template>

<script>
import BasicTagList from './BasicTagList.vue'
import CustomTagList from './CustomTagList.vue'

export default {
  name: 'TagList',
  components: {
    BasicTagList,
    CustomTagList,
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
</style>