<template>
  <div>
    <signup-form :credentials="credentials" :check="check" :f_check="f_check" :m_check="m_check" action="update"></signup-form>
  </div>
</template>

<script>
// import { mapActions, mapGetters } from "vuex"
import SignupForm from '@/components/accounts/SingupForm.vue'
export default {
  name: "MemberUpdateView",
  components: {SignupForm},
  data() {
    return {
      credentials: {
        id: '',
        password: '',
        birth: '',
        gender: ''
      },
      check: 'm',
      f_check: false,
      m_check: true,
    }
  }
}
</script>

<style>

</style>