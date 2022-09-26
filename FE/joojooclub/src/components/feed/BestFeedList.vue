<template>
	<div class="feed-list">
		<div class="row row-cols-1 row-cols-md-3 g-5">
			<feed-list-item v-for="feed in bestFeeds" :key="feed.feedId" :feed="feed"></feed-list-item>
		</div>
	</div>
</template>

<script>
import FeedListItem from './FeedListItem'
import { mapState } from 'vuex'

export default {
	name: 'BestFeedList',
	components: {
		FeedListItem,
	},
	computed: {
		...mapState('feed', ['bestFeeds'])
	},
}
</script>

<style>
	
</style>