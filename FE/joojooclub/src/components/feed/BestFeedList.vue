<template>
	<div class="d-flex justify-content-center my-0 mx-auto">
		<div class="ui cards">
			<feed-list-item v-for="feed in bestFeeds" :key="feed.id" :feed="feed" class="mx-3 mx-lg-4 mx-xl-5"></feed-list-item>
		</div>
	</div>
</template>

<script>
import FeedListItem from './FeedListItem'
import { mapGetters } from 'vuex'

export default {
	name: 'BestFeedList',
	components: {
		FeedListItem,
	},
	computed: {
		...mapGetters('feed', ['feeds', 'bestfeeds']),
		bestFeeds() {
			const feedIndexes = []
			for (const feed of this.bestfeeds) {
				feedIndexes.push(feed.feedIndex)
			}
			return this.feeds.filter(feed => feedIndexes.includes(feed.feedIndex))
		},
	},
}
</script>

<style scoped>

* {
	font-family: 'NanumSquareRound';
}

.ui.cards {
	justify-content: center;
	position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: default;
}
.ui.cards .card.feed-card {
	aspect-ratio: 3 / 4.5;
	width: 23rem;
	flex: 0 0 auto;
	margin: 0 0.75rem;
	flex-flow: column nowrap;
}

@media (max-width: 1380px) {
	.ui.cards {
		justify-content: start;
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
		scroll-snap-type: x mandatory;
		scroll-padding: 0px 1.25rem;
		scrollbar-width: none;
	}
}
</style>