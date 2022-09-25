<template>
	<div class="profile-box">
		<div class="summary-box">
			<div>
				<span>💜</span>
				<span>{{ memberId }}</span>
			</div>
			<div>
				<button class="btn btn-warning">총 {{ commentCount }}건의 후기</button>
				<button class="btn btn-warning">총 {{ feedCount }}건의 피드</button>
				<button class="btn btn-warning" @click="createFeed()">+</button>
			</div>
		</div>
		<button class="btn btn-warning">내 정보 편집</button>
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
			memberId: '',
			commentCount: 0,
			feedCount: 0,
		}
	},
	methods: {
		createFeed() {
			router.push({ name: 'feedNew' })
		},
	},
	created() {
		this.memberId = this.currentUser.member.id
		this.commentCount = this.currentUser.comments.length
		this.feedCount = this.currentUser.feeds.length
	},
}
</script>

<style>
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