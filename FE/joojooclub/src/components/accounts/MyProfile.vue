<template>
	<div class="profile-box">
		<div class="summary-box">
			<div class="profile-level" id="profile-level">
				<i v-if="reviewCount <= 50" class="level level1 fa-solid fa-medal"></i>
				<i v-else-if="reviewCount <= 100" class="level level2 fa-solid fa-medal"></i>
				<i v-else class="level level3 fa-solid fa-medal"></i>
				<h1 class="profile-title mt-2 mb-0 mx-0">{{ memberId }}</h1>
				<button class="mt-3 me-1 me-lg-2 btn colorbtn btn-outline-warning" @click="updateProfile()">정보 편집</button>
				<button class="mt-3 me-1 main-btn btn colorbtn2 btn-warning" @click="createFeed()">피드 작성</button>
			</div>
			<div class="row-flex mt-4 mt-sm-5 mb-3">
				<div class="col-flex">
					<h4>{{ reviewCount }}</h4>
					<div>후기</div>
				</div>
				<div class="col-flex">
					<h4>{{ feedCount }}</h4>
					<div>피드</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import router from '@/router'

export default {
	name: "MyProfile",
	props: {
		currentUser: Object,
	},
	computed: {
		...mapGetters(['myReviews']),
		memberId() { return this.currentUser.member.id },
		reviewCount() { return this.myReviews.length },
		feedCount() { return this.currentUser.feeds.length }
	},
	methods: {
		createFeed() {
			router.push({ name: 'feedNew' })
		},
		updateProfile() {
			router.push({ name: 'update' })
		},
	},
}
</script>

<style scoped>
.profile-box {
	display: flex;
	flex-direction: column;
	justify-content: start;
}

.profile-info {
	display: flex;
	align-items: center;
	flex-flow: row wrap;
	gap: min(2vw, 2rem);
}

.row-flex {
	display: flex;
	justify-content: space-around;
	align-items: center;
	/* gap: min(20vw, 3rem); */
}
.col-flex {
	display: flex;
	flex-direction: column;
}

.profile-title {
	font-size: min(5vw, 2rem);
}
.level {
	font-size: min(10vw, 150px);
}
.level1 {
	/* color: #624637; */
  display: block;
  background: -webkit-linear-gradient(25deg, rgba(120,69,14,1) 0%, rgba(190,155,38,1) 48%, rgba(215,124,20,1) 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.level2 {
	display: block;
  background: -webkit-linear-gradient(25deg, rgba(112,112,112,1) 0%, rgba(224,224,224,1) 50%, rgba(186,186,186,1) 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.level3 {
	display: block;
  background: -webkit-linear-gradient(25deg, rgba(255,194,24,1) 0%, rgba(230,205,135,1) 50%, rgba(253,187,45,1) 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.colorbtn {
  font-size: min(2vw, 1rem);
  padding: min(0.8vw, 4px) min(1.6vw, 1rem);
  margin: 5px;
  color: black;
}
.colorbtn2 {
  font-size: min(2vw, 1rem);
  padding: min(0.8vw, 4px) min(1.6vw, 1rem);
  margin: 5px;
}

.btn-outline-warning {
  color: black;
  border-color: rgb(237, 198, 150);
  border-radius: 10px;
}

.btn-outline-warning:hover,
.btn-outline-warning:focus,
.btn-outline-warning:active {
  background-color: rgb(233, 187, 131);
  color: black;
  border-color: rgb(233, 187, 131);
}

.btn-warning {
  background-color: rgb(237, 198, 150);
  color: black;
  border-color: rgb(237, 198, 150);
  border-radius: 10px;
}

.btn-warning:hover,
.btn-warning:focus,
.btn-warning:active {
  background-color: rgb(233, 187, 131);
  color: black;
  border-color: rgb(233, 187, 131);
}
</style>