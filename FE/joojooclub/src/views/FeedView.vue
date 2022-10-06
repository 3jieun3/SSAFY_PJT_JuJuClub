<template>
	<div class="feed-body">
		<div class="feed-header">
			<best-feed-list v-if="isFeeds"></best-feed-list>
		</div>
		<search-bar v-if="isDrinkNames" :drinkNames="drinkNames"></search-bar>
		<feed-list v-if="isFeeds"></feed-list>
	</div>
</template>

<script>
import SearchBar from '@/components/feed/SearchBar'
import BestFeedList from '@/components/feed/BestFeedList'
import FeedList from '@/components/feed/FeedList'
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'FeedView',
	components: {
		SearchBar,
		BestFeedList,
		FeedList,
	},
	computed: {
		...mapGetters('drinks', ['isDrinkNames', 'drinkNames']),
		...mapGetters('feed', ['isFeeds', 'bestFeeds']),
	},
	methods: {
		...mapActions('drinks', ['fetchDrinkNames']),
		...mapActions('feed', ['fetchAllFeeds']),
		...mapActions(['fetchCurrentUser',]),
	},
	created() {
		this.fetchAllFeeds()
		this.fetchDrinkNames()
		this.fetchCurrentUser()
	},
	updated() {
		this.fetchCurrentUser()
	}
}
</script>

<style scoped>
* {
	font-family: 'NanumSquareRound';
}
.feed-body {
	margin: 5vh 5vw;
}
.search-bar {
	margin: 10vh 0;
	padding: 0 20vw;
}
#drinkSearch {
	border-color: black;
}
</style>