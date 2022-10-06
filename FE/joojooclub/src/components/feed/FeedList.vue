<template>
	<div class="d-flex justify-content-center">
		<div class="ui cards justify-content-evenly row">
			<feed-list-item v-for="feed in filteredFeeds" :key="feed.id" :feed="feed"></feed-list-item>
		</div>
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
	display: grid;
	grid-template-columns: 1fr;
}
.ui.cards .card.feed-card {
	margin: 1rem 14px;
}

@media (min-width: 768px) {
	.ui.cards {
		grid-template-columns: repeat(2, 1fr);
		/* column-gap: 21px; */
	}
	.ui.cards .card.feed-card {
		margin: 1rem 21px;
	}
}
@media (min-width: 992px) {
	.ui.cards {
		grid-template-columns: repeat(2, 1fr);
		/* column-gap: 21px; */
	}
	.ui.cards .card.feed-card {
		margin: 1rem 21px;
	}
}
@media (min-width: 1200px) {
	.ui.cards {
		grid-template-columns: repeat(3, 1fr);
		/* column-gap: 84px; */
	}
	.ui.cards .card.feed-card {
		margin: 1rem 42px;
	}
}
</style>