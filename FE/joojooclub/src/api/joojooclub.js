const HOST = "http://j7d106.p.ssafy.io/api/"

// const MAIN = "main/"
// const RECOMMEND = "recommend/"
// const INFO = "info/"
const MEMBER = 'member/'
// const FEED = 'feed/'
// const REVIEW = 'review/'

export default {
  accounts: {
    signup: () => HOST + MEMBER + 'signup/',    // 회원가입, POST
    login: () => HOST + MEMBER + 'login/',      // 로그인, POST
    idCheck: (id) => HOST + MEMBER + 'checkid/' + `${id}/`,  // id 중복체크, POST
    info: () => HOST + MEMBER,  // (회원정보 GET), (수정, PUT), (탈퇴, DELETE)
    // logout: () => HOST + MEMBER + 'logout/',  // fe에서 jwt token 폐기
  },
  drinks: {
  },
  feed: {
  },
}