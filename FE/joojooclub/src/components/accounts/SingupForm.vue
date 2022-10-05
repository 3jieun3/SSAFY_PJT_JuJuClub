<template>
  <div class="container mt-5 d-flex flex-column">
    <div class="container p-5 signup-box border">
      <!-- title -->
      <h2 v-if="action==='create'" class="mb-4">회원가입</h2>
      <h2 v-if="action==='update'" class="mb-4">회원정보 수정</h2>
      <!-- form -->
      <form @submit.prevent="onSubmit">
        <div>
          <!-- member id -->
          <div class="d-flex flex-column align-items-start mb-4">
            <label for="user-id">아이디</label>
            <div class="input-group">
              <input :disabled="action ==='update'" v-model="newCredentials.id" type="text" id="user-id" class="form-control" placeholder="8글자 이상 입력해주세요">
              <button v-if="action ==='create'" @click="checkID" class="btn btn-secondary m-0" type="button">중복검사</button>
            </div>
            <p v-if="idError" class="sub-error">아이디를 8글자 이상 입력해주세요</p>
          </div>
          <!-- year of birth -->
          <div class="d-flex flex-column align-items-start mb-4">
            <label for="birth-year">출생년도</label>
            <select name="year" id="birth-year" class="form-select select-birth" @change="getYear($event)">
              <option v-if="action==='create'" selected>출생년도를 선택하세요</option>
              <option v-if="action==='update'" selected>{{ newCredentials.birthYear }}</option>
              <option v-for="n in get_years()" v-bind:key="n">{{ n }}</option>
            </select>
            <p v-if="birthError" class="sub-error">출생년도를 선택해주세요</p>
          </div>
          <!-- gender -->
          <div class="d-flex flex-column align-items-start mb-4">
            <label for="gender">성별</label>
            <div>
              <button :class="{clicked: newCredentials.gender==='m'}" @click="mDisabled" class="btn btn-outline-secondary m-0 px-5" type="button">남</button>
              <button :class="{clicked: newCredentials.gender==='f'}" @click="fDisabled" class="btn btn-outline-secondary m-0 px-5" type="button">여</button>
            </div>
            <p v-if="genderError" class="sub-error">성별을 선택해주세요</p>
          </div>
          <!-- password -->
          <div v-if="action==='create'" class="d-flex flex-column align-items-start mb-4">
            <label for="password1">비밀번호</label>
            <input v-model="newCredentials.password" type="password" id="password1" class="form-control" placeholder="영문, 숫자, 특수문자 조합 8-16자">
            <p v-if="pwError" class="sub-error">영문, 숫자, 특수문자를 조합하여 입력해주세요 (8-16자)</p>
          </div>
          <!-- confirm password -->
          <div v-if="action==='create'" class="d-flex flex-column align-items-start mb-5">
            <label for="password2">비밀번호 재확인</label>
            <input v-model="passwordConfirm" type="password" id="password2" class="form-control" placeholder="비밀번호를 한 번 더 입력하세요">
            <p v-if="pwConfirmError" class="sub-error">비밀번호를 정확하게 입력해주세요</p>
          </div>
        </div>
        <button v-if="action==='create'" class="btn btn-warning">가입하기</button>
        <button v-if="action==='update'" @click="goback" class="backBtn btn me-2">뒤로가기</button>
        <button v-if="action==='update'" class="btn btn-warning">수정하기</button>
      </form>
    </div>
    <div v-if="action==='update'" class="container signup-box d-flex justify-content-end mt-1 p-0">
      <router-link :to="{ name: 'changePw'}" class="me-4">비밀번호 변경</router-link>
      <router-link to="/signout">회원탈퇴</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'
import joojooclub from '@/api/joojooclub'

export default {
  name: "SignupForm",
  props: {
    currentUser: Object,
    id_dup: Boolean,
    action: String,
    f_check: Boolean,
    m_check: Boolean,
  },
  data() {
    return {
      newCredentials: {
        id: this.currentUser.member.id,
        password: this.currentUser.member.password,
        birthYear: this.currentUser.member.birthYear,
        gender: this.currentUser.member.gender
      },
      now_year: null,
      get_years: function () {
        var list = []
        var i = this.now_year-120;
        for (i; i < this.now_year+1; i++) {
          list.push(i)
        }
        return list
      },
      signup_f_check: this.f_check,
      signup_m_check: this.m_check,
      passwordConfirm: null,
      // 아이디 중복검사
      idDuplicate: this.id_dup,
      nowId: '',
      // 에러처리
      idError: false,
      pwError: false,
      pwConfirmError: false,
      birthError: false,
      genderError: false,
    }
  },
  watch: {
    // ...mapGetters(['authError'])
    id(val) {
      // 8자 글자 이상 입력 필수
      if (val.length > 7) {
        this.idError = false
      }
    },
    password(val) {
      // this.checkPassword(val)
      if (val.length > 0) {
        this.pwError = false
      }
    },
    passwordConfirm(val) {
      if (val === this.newCredentials?.password) {
        this.pwConfirmError = false
      }
    },
    birthYear(val) {
      if (val) {
        this.birthError = false
      }
    },
    gender(val) {
      if (val) {
        this.genderError = false
      }
    }
  },
  methods: {
    // 생년월일 선택
    ...mapActions(['signup', 'updateMember']),
    checkPassword(value) {
      // 비밀번호 형식 검사(영문, 숫자, 특수문자)
      const regex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/
      if (regex.test(value) === true) {
        return true
      } return false
    },
    checkID() {
      if (this.action === "create"){
        if (this.newCredentials.id !== null && this.newCredentials.id.length < 8) {
          this.idError = true
        }
        else if (this.newCredentials.id !== null && this.newCredentials.id.length >= 8) {
          this.idError = false
          axios({
            url: joojooclub.accounts.idCheck(this.newCredentials.id),
            method: 'post',
          }).then(() => {
            this.idDuplicate = true
            this.nowId = this.newCredentials.id
            alert('사용가능한 아이디입니다')
          }).catch(() => {
            this.idDuplicate = false
            alert('이미 존재하는 아이디입니다')
          })
        }
      }
    },
    onSubmit() {
      // 에러 처리
      if(this.isBlank(this.newCredentials.id) || this.newCredentials.id.length < 8){
        this.idError = true
      } else {this.idError = false}
      if(this.isBlank(this.newCredentials.password) || !this.checkPassword(this.newCredentials.password)){
        this.pwError = true
      } else {this.pwError = false}
      if(this.isBlank(this.passwordConfirm) || this.passwordConfirm !== this.newCredentials.password){
        this.pwConfirmError = true
      } else {this.pwConfirmError = false}
      if(this.isBlank(this.newCredentials.birthYear)){
        this.birthError = true
      } else {this.birthError = false}
      if(this.isBlank(this.newCredentials.gender)){
        this.genderError = true
      } else {this.genderError = false}
      // 에러가 없다면 axios 처리
      if (this.action === 'create') {
        if (this.newCredentials.id && !this.idDuplicate || this.newCredentials.id !== this.nowId) {
        alert('아이디 중복체크를 해주십시오.')
        } else {
          if (!this.idError & !this.pwError & !this.pwConfirmError & !this.birthError & !this.genderError) {
            this.signup(this.newCredentials)
          }
        }
      } else {
        if (!this.birthError & !this.genderError) {
          const data = {
            id: this.newCredentials.id,
            birthYear: this.newCredentials.birthYear,
            gender: this.newCredentials.gender,
          }
          this.updateMember(data)
          this.$router.push({name: 'profile', params: {userPK: this.newCredentials.id}})
        }
      }
    },
    isBlank(val) {
      if (val === undefined) return true
      else if(val === null) return true
      else if(val === '') return true
      else return false
    },
    getYear: function(event) {
      this.newCredentials.birthYear = event.target.value;
    },
    // 성별 선택
    fDisabled: function() {
      this.signup_f_check = !this.signup_f_check
      if (this.signup_f_check) {
        this.signup_m_check = false
        this.newCredentials.gender='f'
      }
    },
    mDisabled: function() {
      this.signup_m_check = !this.signup_m_check
      if (this.signup_m_check) {
        this.signup_f_check = false
        this.newCredentials.gender='m'
      }
    },
    goback() {
			this.$router.push({
				name: 'profile',
				params: {
					userPK: this.currentUser.member.id
				}
			})
		},
  },
  created() {
    this.now_year = new Date().getFullYear();
  },
}
</script>

<style>
.backBtn {
  border-radius: 10px;
  background-color: #e0e1e2;
}
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
.sub-error {
  color: red;
}
</style>