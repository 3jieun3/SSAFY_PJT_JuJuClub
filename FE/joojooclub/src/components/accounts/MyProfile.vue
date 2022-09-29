<template>
	<div class="profile-box">
		<div class="summary-box">
			<div>
				<img src="@/assets/avatar.jpg" style="width: 3rem;">
				<span>{{ memberId }}</span>
			</div>
			<div>
				<button class="btn btn-warning">총 {{ reviewCount }}건의 후기</button>
				<button class="btn btn-warning">총 {{ feedCount }}건의 피드</button>
				<button class="btn btn-warning" @click="createFeed()">+</button>
			</div>
		</div>
		<button class="btn btn-warning" @click="updateProfile()">내 정보 편집</button>
	</div>
</template>

<script>
import router from '@/router'

export default {
	name: "MyProfile",
	props: {
		currentUser: Object,
	},
	data() {
		return {
			memberId: this.currentUser.member.id,
			reviewCount: this.currentUser.reviews.length,
			feedCount: this.currentUser.feeds.length,
		}
	},
	methods: {
		createFeed() {
			router.push({ name: 'feedNew' })
		},
		updateProfile() {
			router.push({ name: 'update' })
		},
	},
	created() {
		console.log(this.currentUser)
	},
}
</script>

<style scoped>
.profile-box {
	display: grid;
	row-gap: 1rem;
}
.summary-box, .summary-box div {
	display: flex;
	flex-flow: row wrap;
	gap: 1rem;
}
.summary-box div:first-child {
	justify-content: space-around;
	flex-grow: 1;
}
</style>