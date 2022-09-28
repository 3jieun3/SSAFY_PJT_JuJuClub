<template>
  <div>
    <change-password-form v-if="isCurrentUser" :currentUser="currentUser"></change-password-form>
  </div>
</template>

<script>
import ChangePasswordForm from '@/components/accounts/ChangePasswordForm.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'MemberUpdateView',
  components: { ChangePasswordForm },
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