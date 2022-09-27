<template>
  <div>
    <div class="container my-5 p-5 signup-box border">
      <h2 class="mb-5">비밀번호 변경</h2>
      <form @submit.prevent="onSubmit">
        <div>
          <!-- 기존 비밀번호 -->
          <div class="d-flex flex-column align-items-start mb-4">
            <label for="origin-password">기존 비밀번호</label>
            <input v-model="password" type="password" id="origin-password" class="form-control">
            <p v-if="pwError" class="sub-error">기존 비밀번호를 입력해 주세요</p>
            <p v-if="isOriginError" class="sub-error">기존 비밀번호와 일치하지 않습니다</p>
          </div>
          <!-- 새 비밀번호 -->
          <div class="d-flex flex-column align-items-start mb-4">
            <label for="newPassword">새 비밀번호</label>
            <input v-model="newPassword" type="password" id="newPassword" class="form-control" placeholder="영문, 숫자, 특수문자 조합 8-16자">
            <p v-if="newPwError" class="sub-error">영문, 숫자, 특수문자를 조합하여 입력해주세요 (8-16자)</p>
          </div>
          <!-- 비밀번호 확인 -->
          <div class="d-flex flex-column align-items-start mb-4">
            <label for="passwordConfirm">새 비밀번호 확인</label>
            <input v-model="passwordConfirm" type="password" id="passwordConfirm" class="form-control" placeholder="비밀번호를 한 번 더 입력하세요">
            <p v-if="newPwConfirmError" class="sub-error">비밀번호를 정확하게 입력해주세요</p>
          </div>
        </div>
        <button class="btn btn-warning">변경하기</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import joojooclub from '@/api/joojooclub'
import { mapGetters } from 'vuex'

export default {
  name: 'ChangePasswordView',
  props: {
    currentUser: Object,
  },
  data() {
    return {
      password: '', // 기존 비밀번호 입력
      newPassword: '',  // 새 비밀번호 입력
      passwordConfirm: '',  // 새 비밀번호 재입력
      pwError: false, // 기존 비밀번호 null 값인지 확인
      isOriginError: false, // 기존 비밀번호와 일치하는지 확인
      newPwError: false,  // 새 비밀번호가 없거나 형식에 맞지 않을 때
      newPwConfirmError: false, // 비밀번호 재입력 틀렸을 때
    }
  },
  watch: {
    password(val) {
      if (val.length > 0) {
        this.pwError = false
      }
    },
    newPassword(val) {
      if (val.length > 0) {
        this.newPwError = false
      }
    },
    passwordConfirm(val) {
      if (val === this.newPassword) {
        this.newPwConfirmError = false
      }
    },
  },
  computed: {
    ...mapGetters(['authHeader'])
  },
  methods: {
    isBlank(val) {
      if (val === undefined) return true
      else if(val === null) return true
      else if(val === '') return true
      else return false
    },
    checkPasswordForm(value) {
      // 비밀번호 형식 검사(영문, 숫자, 특수문자)
      const regex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/
      if (regex.test(value) === true) {
        return true
      } return false
    },
    onSubmit() {
      // 새로운 비밀번호 체크
      if(this.isBlank(this.newPassword) || !this.checkPasswordForm(this.newPassword)){
        this.newPwError = true
      } else {this.newPwError = false}
      
      // 비밀번호 재확인
      if(this.isBlank(this.passwordConfirm) || this.passwordConfirm !== this.newPassword){
        this.newPwConfirmError = true
      } else {this.newPwConfirmError = false}

      // 기존 비밀번호 확인
      // 빈 값인지 체크
      if(this.isBlank(this.password)){
        this.pwError = true
      } else {this.pwError = false}
      // 빈 값이 아니면 기존 비밀번호와 일치하는지 체크
      if (!this.pwError) {
        const pw = {password: this.password}
        this.checkPassword(pw)
      }

      // 모든 에러가 없다면 비밀번호 변경 axios 보내기
      if (!this.pwError && !this.isOriginError && !this.newPwError && !this.newPwConfirmError) {
        const pw = {password: this.password}
        axios({
          url: joojooclub.accounts.changepw(),
          method: 'put',
          data: pw,
          headers: this.authHeader,
        }).then((res) => {
          console.log(res)
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    checkPassword(password) {
      axios({
        url: joojooclub.accounts.checkpw(),
        method: 'post',
        data: password,
        headers: this.authHeader,
      }).then(() => {
        this.isOriginError = false
        console.log(this.isOriginError)
      }).catch((err) => {
        if (err.response.data === 'mismatch') {
          this.isOriginError = true
        }
      })
    },
  }
}
</script>

<style>
.sub-error {
  color: red;
}
</style>