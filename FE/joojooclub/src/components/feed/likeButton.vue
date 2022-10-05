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
			// isLiked: this.feed.likeMembers.includes(this.currentUser.member.memberIndex),
			isCliked: false,
		}
	},
	computed: {
		...mapGetters('feed', ['feeds']),
		isLiked() {
			if (this.feed.likeMembers.includes(this.currentUser.member.memberIndex)) return true
			else return false
		}
	},
	methods: {
		...mapActions('feed', ['likeFeed']),
		likeSubmit() {
			this.likeFeed(this.feed.feedIndex)
			// this.isLiked = !this.isLiked
			this.isCliked = !this.isCliked
		}
	},
	created() {
		// console.log("clicked")
	},
	updated() {
		// console.log("clicked")
	}
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