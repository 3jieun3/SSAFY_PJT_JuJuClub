<template>
	<div class="feed-body">
		<div class="feed-header">
			<best-feed-list></best-feed-list>
		</div>
		<div class="feed-content">
			<search-bar></search-bar>
			<feed-list></feed-list>
		</div>
	</div>
</template>

<script>
import SearchBar from '@/components/feed/SearchBar'
import BestFeedList from '@/components/feed/BestFeedList'
import FeedList from '@/components/feed/FeedList'

export default {
	name: 'FeedView',
	components: {
		SearchBar,
		BestFeedList,
		FeedList,
	}
}
</script>

<style scoped>
.feed-body {
	margin: 5vh 5vw;
}
.feed-header {
	margin-bottom: 5vh;
}
.search-bar {
	padding: 0 20vw;
}
#drinkSearch {
	border-color: black;
}
</style>