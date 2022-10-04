<template>
	<div class="ui three stackable cards">
		<feed-list-item v-for="feed in bestFeeds" :key="feed.id" :feed="feed"></feed-list-item>
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
	align-content: center;
	justify-content: center;
}
</style>