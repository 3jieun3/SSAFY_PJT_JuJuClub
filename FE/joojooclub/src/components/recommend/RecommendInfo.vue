<template>
  <div class="row text-center">
    <h4>{{ result.drinkName }}</h4>
  </div>
</template>

<script>
export default {
  name: 'RecommendInfo',
  props: {
    result: Object
  }
}
</script>

<style>

</style>