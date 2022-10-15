<template>
	<div class="btn">
		<i class="btn fa-solid fa-heart fa-2x" @click="likeSubmit" :class="{ 'is-liked': isLiked, 'hithere': isCliked }"></i>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
	name: 'likeButton',
	props: {
		feed: Object,
		currentUser: Object,
	},
	data() {
		return {
			isCliked: false,
			currentRoute: window.location.pathname.toString(),
		}
	},
	computed: {
		...mapGetters('feed', ['feeds']),
		isLiked() {
			if (this.feed.likeMembers.includes(this.currentUser.member.memberIndex)) return true
			else return false
		},
	},
	methods: {
		...mapActions(['updateMyLikeFeeds']),
		...mapActions('feed', ['likeFeed']),
		likeSubmit() {
			// like post api 및 feeds 의 likemembers 배열 update
			this.likeFeed(this.feed.feedIndex)
			if (this.feed.likeMembers.includes(this.currentUser.member.memberIndex)) {
				this.isCliked = false		// 좋아요 취소
			} else {
				this.isCliked = true		// 새로 좋아요 누름 -> 애니메이션
			}
			// 마이페이지에서의 실시간 업데이트를 위한 로직
			if (this.currentRoute.startsWith('/profile')) {
				this.updateMyLikeFeeds([this.feed.feedIndex, this.feed])
			}
		}
	},
}
</script>

<style scoped>
.fa-heart {
	color: gray;
	padding: 0 0.5rem 0 0.3rem;
}
.is-liked {
	color: rgb(196, 6, 22);
	--fa-animation-duration: 2s;
}
.hithere {
  animation: hithere 1s ease infinite;
	animation-iteration-count: 1;
}
@keyframes hithere {
  30% { transform: scale(1.2); }
  40%, 60% { transform: rotate(-20deg) scale(1.2); }
  50% { transform: rotate(20deg) scale(1.2); }
  70% { transform: rotate(0deg) scale(1.2); }
  100% { transform: scale(1); }
}
</style>