<template>
	<div class="ui three stackable cards">
		<feed-list-item v-for="feed in filteredFeeds" :key="feed.id" :feed="feed"></feed-list-item>
	</div>
</template>

<script>
import FeedListItem from '@/components/feed/FeedListItem'
import { mapGetters } from 'vuex'

export default {
	name: 'FeedList',
	components: {
		FeedListItem,
	},
	computed: {
		...mapGetters('feed', ['feeds']),
		...mapGetters('drinks', ['isSearched', 'searchedDrink']),
		filteredFeeds() {
			if (!this.isSearched) {
				return this.feeds.filter(feed => feed.drink.drinkName === this.searchedDrink.drinkName)
			} else {
				return this.feeds
			}
		}
	},
}
</script>

<style scoped>
</style>