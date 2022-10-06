<template>
	<div class="feed-list">
		<div class="container">
			<div v-if="likeFeeds.length" class="horiz-scroll">
				<feed-list-item v-for="feed in likeFeeds" :key="feed.feedId" :feed="feed"></feed-list-item>
			</div>
			<h3 v-else>좋아요한 피드가 없어요..</h3>
		</div>
	</div>
</template>

<script>
import FeedListItem from '@/components/feed/FeedListItem'
import { mapGetters } from 'vuex'

export default {
	name: "LikeFeedList",
	components: {
		FeedListItem,
	},
	props: {
		currentUser: Object,
	},
	computed: {
		...mapGetters('feed', ['feeds']),
		likeFeeds() {
			const feedIndexes = []
			for (const likeFeed of this.currentUser.likeFeeds) {
				feedIndexes.push(likeFeed.feed.feedIndex)
			}
			return this.feeds.filter(feed => feedIndexes.includes(feed.feedIndex))
		},
	},
}
</script>

<style scoped>
.container {
  width: 100%;
}
.horiz-scroll {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  height: 100%;
	padding: 1rem 0;
  cursor: default;
  overflow: scroll hidden;
	scroll-padding: 0px 1.25rem;
  scrollbar-width: none;
}
.horiz-scroll .card.feed-card {
	aspect-ratio: 3 / 4.5;
	width: 23rem;
	flex: 0 0 auto;
	margin: 0 0.75rem;
	flex-flow: column nowrap;
}
</style>