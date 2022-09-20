<template>
  <div class="container-bg">
    <div class="container">
      <basic-tag-list></basic-tag-list>
      <custom-tag-list></custom-tag-list>
    </div>
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

<style>
  .container-bg {
    margin-top: 100px;
    background-color: rgb(rgb(255, 217, 159));
  }
</style>