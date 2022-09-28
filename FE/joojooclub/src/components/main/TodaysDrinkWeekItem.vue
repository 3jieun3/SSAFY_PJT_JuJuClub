<template>
  <div></div>
</template>

<script>
export default {
  name: 'TodaysDrinkWeekItem',
  props: {
    drink: Object,
  },
  created() {
    console.log(this.drink)
  }
}
</script>

<style>

</style>