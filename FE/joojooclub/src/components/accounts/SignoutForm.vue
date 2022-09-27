<template>
  <div>
    <div class="container mt-5 mb-2 p-5 signup-box border">
      <h2 class="mb-5">회원탈퇴</h2>
      <form @submit.prevent="onSubmit">
        <div class="d-flex flex-column align-items-start mb-4">
          <label for="password">비밀번호 확인</label>
          <input v-model="password" type="password" id="password" class="form-control">
          <p v-if="pwError" class="sub-error">비밀번호를 입력해 주세요</p>
          <p v-if="!pwError & pwConfirmError" class="sub-error">비밀번호가 일치하지 않습니다</p>
        </div>
        <button class="btn btn-warning">회원탈퇴</button>
      </form>
    </div>
    <p class="position-relative text-muted fs-6 end-0 mb-3">회원탈퇴를 하시면 회원정보가 모두 삭제됩니다.</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import axios from 'axios'
import joojooclub from '@/api/joojooclub'

export default {
  name: 'SignoutForm',
  props: {
    currentUser: Object,
  },
  data() {
    return {
      password: '',
      pwError: false,
      pwConfirmError: false,
    }
  },
  watch: {
    password(val) {
      if (val.length > 0) {
        this.pwError = false
      }
    },
  },
  computed: {
    ...mapGetters(['isCurrentUser', 'authHeader'])
  },
  methods: {
    ...mapActions(['signout', 'logout', ]),
    // 공백 처리
    isBlank(val) {
      if (val === undefined) return true
      else if(val === null) return true
      else if(val === '') return true
      else return false
    },
    onSubmit() {
      // 에러 처리
      if (this.isBlank(this.password)){
        this.pwError = true
      } else {this.pwError = false}
      if (!this.pwError) {
        const pw = {password: this.password}
        this.checkPassword(pw)
      }
    },
    checkPassword(password) {
      axios({
        url: joojooclub.accounts.checkpw(),
        method: 'post',
        data: password,
        headers: this.authHeader,
      }).then(() => {
        this.pwConfirmError = false
        if (window.confirm("정말 탈퇴하시겠습니까?")) {
          this.signout()
        }
      }).catch((err) => {
        if (err.response.data === 'mismatch') {
          this.pwConfirmError = true
          alert("비밀번호가 일치하지 않습니다.")
        }
      })
    },
  },
}
</script>

<style>

</style>