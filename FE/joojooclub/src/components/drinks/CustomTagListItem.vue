<template>
  <button
  :class="{ 'selected' : isClicked }"
  @click="setClicked()">
  #{{ customTag }}
  </button>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  name: 'CustomTagListItem',
  props: {
    customTag: String,
    index: Number,
  },
  data() {
    return {
      isClicked: false,
    }
  },
  computed: {
    ...mapState('drinks', ['tagList']),
    ...mapGetters('drinks', ['getCustomClicked']),
  },
  methods: {
    ...mapActions('drinks', ['tagClicked']),
    setClicked() {
      this.isClicked = !this.isClicked
    }
  },
}
</script>

<style scoped>

  .selected {
    background-color: bisque;
  }
</style>