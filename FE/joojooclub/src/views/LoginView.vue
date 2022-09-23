<template>
  <div class="container my-5 p-5 signup-box border">
    <!-- title -->
    <h2 class="mb-4">로그인</h2>
    <!-- form -->
    <form @submit.prevent="onSubmit">
      <div>
        <!-- member id -->
        <div class="d-flex flex-column align-items-start mb-4">
          <label for="user-id">아이디</label>
          <div class="input-group">
            <input v-model="credentials.id" type="text" id="user-id" class="form-control" placeholder="ID / Nickname">
          </div>
          <p v-if="idError" class="sub-error">아이디를 입력해주세요</p>
        </div>
        <!-- password -->
        <div class="d-flex flex-column align-items-start mb-4">
          <label for="password1">비밀번호</label>
          <input v-model="credentials.password" type="password" id="password1" class="form-control" placeholder="비밀번호를 입력하세요">
          <p v-if="pwError" class="sub-error">비밀번호를 입력해 주세요</p>
        </div>
      </div>
      <button class="btn btn-warning">로그인</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LoginView',
  data: function() {
    return {
      credentials: {
        id: null,
        password: null,
      },
      // 에러처리
      idError: false,
      pwError: false,
    }
  },
  watch: {
    id(val) {
      if (val.length > 0) {
        this.idError = false
      }
    },
    password(val) {
      if (val.length > 0) {
        this.pwError = false
      }
    },
  },
  methods: {
    ...mapActions(['login']),
    isBlank(val) {
      if (val === undefined) return true
      else if(val === null) return true
      else if(val === '') return true
      else return false
    },
    onSubmit() {
      // 에러 처리
      if(this.isBlank(this.credentials.id)){
        this.idError = true
      } else {this.idError = false}
      if(this.isBlank(this.credentials.password)){
        this.pwError = true
      } else {this.pwError = false}

      // 에러가 없다면 axios 처리
      if (!this.idError & !this.pwError) {
        this.login(this.credentials)
      }
    },
  }
}
</script>

<style>
.sub-error {
  color: red;
}
</style>