<template>
	<div class="ui three stackable cards">
		<feed-list-item v-for="feed in filteredFeeds" :key="feed.id" :feed="feed"></feed-list-item>
	</div>
</template>

<script>
import FeedListItem from '@/components/feed/FeedListItem'
import { mapGetters, mapActions } from 'vuex'

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
	methods: {
		...mapActions('drinks', ['setSearchDrink']),
	},
	created() {
		this.setSearchDrink({})
	},
}
</script>

<style scoped>
.ui.cards {
	align-content: center;
	justify-content: center;
}
@media (max-width: 767px) {
	/* .ui.stackable.cards .card.feed-card {
		height: 55.5vh;
		margin: 2rem;
	} */
	.ui.card > .image, .ui.cards >.card > .image {
		height: 23rem;
		background-color: white;
	}
}
</style>