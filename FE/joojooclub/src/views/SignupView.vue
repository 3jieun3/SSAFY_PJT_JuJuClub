<template>
  <div>
    <signup-form :credentials="credentials" :check="check" :f_check="f_check" :m_check="m_check" action="create"></signup-form>
  </div>
</template>

<script>
// import { mapActions, mapGetters } from "vuex"
import SignupForm from '@/components/accounts/SingupForm.vue'
export default {
  name: "SignupView",
  components: {SignupForm},
  data() {
    return {
      credentials: {
        id: '',
        password: '',
        birth: '',
        gender: ''
      },
      check: '',
      f_check: false,
      m_check: false,
    }
  }
}
</script>

<style>

</style>