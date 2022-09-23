<template>
  <div>
    <signup-form :currentUser="currentUser" :f_check="f_check" :m_check="m_check" :id_dup="id_dup" action="update"></signup-form>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import SignupForm from '@/components/accounts/SingupForm.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "MemberUpdateView",
  components: {SignupForm},
  data() {
    return {
      // credentials: {
      //   id: '',
      //   password: '',
      //   birth: '',
      //   gender: 'f'
      // },
      id_dup: true,
      f_check: false,
      m_check: false,
      now: this.$store.getters.currentUser,
    }
  },
  methods: {
    checkGender() {
      // if (this.credentials.gender === 'f') {
      //   this.f_check = true
      //   this.m_check = false
      // }
      // else {
      //   this.f_check = false
      //   this.m_check = true
      // }
    },
    ...mapActions(['fetchCurrentUser'])
  },
  computed: {
    ...mapGetters(['currentUser']),
  },
  created() {
    this.checkGender()
    this.fetchCurrentUser()
    // console.log(this.currentUser)
    // console.log(this.$store.state.currentUser)
    // console.log(this.now)
  },
  updated() {
    this.checkGender()
    this.fetchCurrentUser()
  }
}
</script>

<style>

</style>