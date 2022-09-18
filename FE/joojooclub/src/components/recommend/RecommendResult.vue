<template>
  <div class="container">
    <p>당신에게 어울리는 술은</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'RecommenResult',
  computed: {
    ...mapState
  }
}
</script>

<style>

</style>