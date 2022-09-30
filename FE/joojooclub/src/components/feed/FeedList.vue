<template>
	<div class="feed-list">
		<div v-if="isFeeds" class="row row-cols-1 row-cols-md-3 g-5">
			<feed-list-item v-for="feed in feeds" :key="feed.feedId" :feed="feed"></feed-list-item>
		</div>
	</div>
</template>

<script>
import FeedListItem from './FeedListItem'
import { mapGetters } from 'vuex'

export default {
	name: 'FeedList',
	components: {
		FeedListItem,
	},
	computed: {
		...mapGetters('feed', ['feeds', 'isFeeds']),
	},
}
</script>

<style>
.feed-list {
	margin-top: 5vh;
}
</style>