<template>
	<div class="profile-box">
		<div class="summary-box">
			<div class="profile-level" id="profile-level">
				<i v-if="reviewCount <= 50" class="level1 fa-2xl fa-solid fa-medal me-4 me-sm-5"></i>
				<i v-else-if="reviewCount <= 100" class="level2 fa-2xl fa-solid fa-medal me-4 me-sm-5"></i>
				<i v-else class="level3 fa-2xl fa-solid fa-medal me-4 me-sm-5"></i>
				<h1 class="profile-title m-0">{{ memberId }}</h1>
			</div>
			<div class="profile-info">
				<div>총 <b>{{ reviewCount }}</b>건의 후기</div>
				<div>총 <b>{{ feedCount }}</b>건의 피드</div>
				<button class="main-btn btn btn-warning" @click="createFeed()">
					<i class="create-icon fa-solid fa-file-pen"></i>
				</button>
			</div>
		</div>
		<button class="btn btn-warning" @click="updateProfile()">내 정보 편집</button>
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
	display: grid;
	row-gap: 1rem;
}
.summary-box {
	display: flex;
	align-items: baseline;
	flex-flow: row wrap;
	gap: 1rem;
}

.profile-info {
	display: flex;
	align-items: center;
	flex-flow: row wrap;
	gap: min(2vw, 2rem);
}

#profile-level {
	display: flex;
	align-items: center;
	justify-content: start
}

.profile-title {
	font-size: min(5vw, 2rem);
}

.summary-box div:first-child {
	justify-content: space-around;
	flex-grow: 1;
}

.level1 {
	color: #624637;
}
.level2 {
	color: silver;
}
.level3 {
	color: gold;
}

</style>