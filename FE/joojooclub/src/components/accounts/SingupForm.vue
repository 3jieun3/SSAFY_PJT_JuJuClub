<template>
  <div class="container my-5 p-5 signup-box border">
    <!-- title -->
    <h3 v-if="action==='create'" class="mb-4">회원가입</h3>
    <h3 v-if="action==='update'" class="mb-4">회원정보 수정</h3>
    <!-- form -->
    <form @submit.prevent="">
      <div>
        <!-- member id -->
        <div class="d-flex flex-column align-items-start">
          <label for="user-id">ID</label>
          <div class="input-group mb-4">
            <input type="text" id="user-id" class="form-control" placeholder="ID / Nickname">
            <button v-if="action === 'create'" class="btn btn-secondary m-0" type="button">중복검사</button>
          </div>
        </div>
        <!-- year of birth -->
        <div class="d-flex flex-column align-items-start mb-4">
          <label for="birth-year">출생년도</label>
          <select name="year" id="birth-year" class="form-select select-birth" @change="getYear($event)">
            <option selected>출생년도를 선택하세요</option>
            <option v-for="n in get_years()" v-bind:key="n">{{ n }}</option>
          </select>
        </div>
        <!-- gender -->
        <div class="d-flex flex-column align-items-start mb-4">
          <label for="gender">성별</label>
          <div>
            <button :class="{clicked: signup_m_check & signup_check==='m'}" @click="mDisabled" class="btn btn-outline-secondary m-0 px-5" type="button">남</button>
            <button :class="{clicked: signup_f_check & signup_check==='f'}" @click="fDisabled" class="btn btn-outline-secondary m-0 px-5" type="button">여</button>
          </div>
        </div>
        <!-- password -->
        <div class="d-flex flex-column align-items-start mb-4">
          <label for="password1">비밀번호</label>
          <input type="password" id="password1" class="form-control" placeholder="비밀번호를 입력하세요">
        </div>
        <!-- confirm password -->
        <div class="d-flex flex-column align-items-start mb-5">
          <label for="password2">비밀번호 확인</label>
          <input type="password" id="password2" class="form-control" placeholder="비밀번호를 한 번 더 입력하세요">
        </div>
      </div>
      <button class="btn btn-warning">가입하기</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignupForm",
  props: {
    credentials: Object,
    action: String,
    check: String,
    f_check: Boolean,
    m_check: Boolean,
  },
  data() {
    return {
      now_year: null,
      get_years: function () {
        var list = []
        var i = this.now_year-120;
        for (i; i < this.now_year+1; i++) {
          list.push(i)
      }
      return list
      },
      signup_check: this.check,
      signup_f_check: this.f_check,
      signup_m_check: this.m_check,
    }
  },
  methods: {
    // 생년월일 선택
    getYear: function(event) {
      console.log(event.target.value)
    },
    // 성별 선택
    fDisabled: function() {
      this.signup_f_check = !this.signup_f_check
      if (this.signup_f_check) {
        this.signup_m_check = false
        this.signup_check='f'
      }
    },
    mDisabled: function() {
      this.signup_m_check = !this.signup_m_check
      if (this.signup_m_check) {
        this.signup_f_check = false
        this.signup_check='m'
      }
    }
  },
  computed: {
    
  },
  created() {
    this.now_year = new Date().getFullYear();
    // console.log(this.credentials);
  }
}
</script>

<style>
.signup-box {
  max-width: 500px;
}
:hover.select-birth {
  cursor: pointer;
}
.clicked {
  background-color: #6b747c;
  color: white;
}
</style>