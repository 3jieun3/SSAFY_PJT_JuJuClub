<template>
  <div>
    <signup-form :currentUser="currentUser" :f_check="f_check" :m_check="m_check" :id_dup="id_dup" action="create"></signup-form>
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
      currentUser: {
        member: {
          id: null,
          password: null,
          birthYear: null,
          gender: null,
        }
      },
      id_dup: false,
      // credentials: {
      //   id: null,
      //   password: null,
      //   birthYear: null,
      //   gender: null,
      // },
      f_check: false,
      m_check: false,
    }
  }
}
</script>

<style>

</style>