<template>
	<div class="ui three stackable cards">
		<feed-list-item v-for="feed in bestFeeds" :key="feed.id" :feed="feed"></feed-list-item>
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

<style scoped>
.ui.cards {
	align-content: center;
	justify-content: center;
}
</style>