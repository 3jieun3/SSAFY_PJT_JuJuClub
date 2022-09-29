<template>
	<div class="feed-list">
		<h4>좋아요한 피드</h4>
		<div class="horiz-scroll-box">
			<feed-list-item v-for="feed in likeFeeds" :key="feed.feedId" :feed="feed"></feed-list-item>
		</div>
	</div>
</template>

<script>
import FeedListItem from '@/components/feed/FeedListItem'

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
			likeFeeds: this.currentUser.likeFeeds,
		}
	},
	created() {
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