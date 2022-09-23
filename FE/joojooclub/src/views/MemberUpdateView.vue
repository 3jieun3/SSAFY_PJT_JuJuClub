# MemberUpdateView.vue
<template>
  <div>
    <signup-form v-if="isCurrentUser" :currentUser="currentUser" :f_check="f_check" :m_check="m_check" :id_dup="id_dup" action="update"></signup-form>
  </div>
</template>

<script>
import SignupForm from '@/components/accounts/SingupForm.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "MemberUpdateView",
  components: {SignupForm},
  data() {
    return {
      id_dup: true,
      f_check: false,
      m_check: false,
    }
  },
  methods: {
    ...mapActions(['fetchCurrentUser'])
  },
  computed: {
    ...mapGetters(['currentUser', 'isCurrentUser']),
  },
  created() {
    this.fetchCurrentUser()
  },
}
</script>

<style>

</style>