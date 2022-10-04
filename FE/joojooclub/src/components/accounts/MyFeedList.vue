<template>
	<div class="feed-list">
		<h4>내가 쓴 피드</h4>
		<div class="container">
			<div class="horiz-scroll">
				<feed-list-item v-for="feed in myFeeds" :key="feed.feedId" :feed="feed"></feed-list-item>
			</div>
		</div>
	</div>
</template>

<script>
import FeedListItem from '@/components/feed/FeedListItem'
import { mapGetters } from 'vuex'

export default {
	name: "MyFeedList",
	components: {
		FeedListItem,
	},
	props: {
		currentUser: Object,
	},
	computed: {
		...mapGetters('feed', ['feeds']),
		myFeeds() {
			const feedIndexes = []
			for (const feed of this.currentUser.feeds) {
				feedIndexes.push(feed.feedIndex)
			}
			return this.feeds.filter(feed => feedIndexes.includes(feed.feedIndex))
		},
	},
}
</script>

<style scoped>
.container {
  max-width: 90rem;
  width: 100%;
	height: 55.5vh;
  margin: 0 auto;
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
  margin: 2.5rem 0;
  cursor: default;
  overflow: scroll hidden;
  scroll-snap-type: x mandatory;
  scroll-padding: 0px 1.25rem;
  scrollbar-width: none;
}
.horiz-scroll .card.feed-card {
	width: 25rem;
	height: 100%;
	flex: 0 0 auto;
	margin: 0 0.75rem;
}
</style>