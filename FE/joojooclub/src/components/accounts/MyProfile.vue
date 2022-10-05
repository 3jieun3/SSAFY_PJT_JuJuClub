<template>
	<div class="profile-box">
		<div class="summary-box">
			<div class="profile-level" id="profile-level">
				<i v-if="reviewCount <= 50" class="level level1 fa-solid fa-medal"></i>
				<i v-else-if="reviewCount <= 100" class="level level2 fa-solid fa-medal"></i>
				<i v-else class="level level3 fa-solid fa-medal"></i>
				<h1 class="profile-title mt-2 mb-0 mx-0">{{ memberId }}</h1>
				<button class="mt-2 btn edit-button" @click="updateProfile()">정보 편집</button>
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
				<div>
					<button class="main-btn btn p-0" @click="createFeed()">
					<!-- <i class="create-icon fa-solid fa-file-pen"></i> -->
					<i class="fa-solid fa-plus"></i>
				</button>
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
	/* align-items: start; */
	align-items: start;
	/* gap: 1rem; */
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
	color: #624637;
}
.level2 {
	color: silver;
}
.level3 {
	color: gold;
}

.edit-button {
	background-color: #e0e1e2;
}
</style>