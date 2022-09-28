const HOST = "http://j7d106.p.ssafy.io/api/"

// const MAIN = "main/"
// const RECOMMEND = "recommend/"
const INFO = "info/"
const MEMBER = 'member/'
const FEED = 'feed/'
const REVIEW = 'review/'
const MAIN = 'main/'

export default {
  accounts: {
    signup: () => HOST + MEMBER + 'signup/',    // 회원가입, POST
    login: () => HOST + MEMBER + 'login/',      // 로그인, POST
    idCheck: (id) => HOST + MEMBER + 'checkid/' + `${id}/`,  // id 중복체크, POST
    info: () => HOST + MEMBER,  // (회원정보 GET), (수정, PUT), (탈퇴, DELETE)
    checkpw: () => HOST + MEMBER + 'checkpw/',  // pw 일치 확인, GET
    changepw: () => HOST + MEMBER + 'pw/',  // pw 변경, PUT
    // logout: () => HOST + MEMBER + 'logout/',  // fe에서 jwt token 폐기
  },
  drinks: {
    info: () => HOST + INFO,
    drinkTag: () => HOST + INFO + 'tag',                                    // 술 전체 정보 GET
    drinkInfo: (drinkIndex) => HOST + INFO + `${drinkIndex}/`,  // 술 상세 정보 GET
    drinkNames: () => HOST + INFO + `drink/`,                   // 술 이름 리스트 GET
    review: () => HOST + REVIEW,                                // 술 리뷰 (등록, POST), (삭제, DELETE)
    todayWeekDrink: () => HOST + MAIN + 'day/', // 오늘의 술(요일별) GET
    todayWeatherDrink: (weather) => HOST + MAIN + `weather/${weather}/`, // 오늘의 술(날씨별) GET
  },
  feed: {
    info: (feedIndex) => HOST + FEED + `${feedIndex}/`          // 피드 정보 GET
  },
}