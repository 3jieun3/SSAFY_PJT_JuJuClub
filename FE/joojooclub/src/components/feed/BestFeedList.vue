<template>
	<div class="my-0 mx-auto">
		<div class="ui three cards">
			<feed-list-item v-for="feed in bestFeeds" :key="feed.id" :feed="feed" class="h-100"></feed-list-item>
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
.ui.cards {
	position: relative;
	flex-flow: row nowrap;
	align-content: center;
	justify-content: space-between;
}
@media (max-width: 1140px) {
	.ui.cards {
		justify-content: flex-start;
		overflow: scroll hidden;
		scroll-snap-type: x mandatory;
		scroll-padding: 0px 1.25rem;
	}
}
</style>