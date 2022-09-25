<template>
	<div class="feed-list">
		<h4>좋아요한 피드</h4>
		<div class="horiz-scroll-box">
			<feed-list-item v-for="feed in likedFeeds" :key="feed.feedId" :feed="feed"></feed-list-item>
		</div>
	</div>
</template>

<script>
import FeedListItem from '@/components/feed/FeedListItem'
// import { mapState } from 'vuex'

export default {
	name: "LikeFeedList",
	components: {
		FeedListItem,
	},
	props: {
		currentUser: Object,
	},
	data() {
		return {
			// feeds: this.currentUser.feeds,	// feeds: Array([])
			// likeFeedsCount: this.currentUser.feeds.likeCount,	// 좋아요 한 피드 개수
			likedFeeds: this.currentUser.likedFeeds,	// api 확인 필요
		}
	},
	created() {
		// console.log(this.currentUser)
	},
}
</script>

<style scoped>
.horiz-scroll-box {
	display: flex;
	flex-wrap: nowrap;
	overflow: auto;
}
.feed-item {
	width: 25rem;
	flex: 0 0 auto;
}
</style>