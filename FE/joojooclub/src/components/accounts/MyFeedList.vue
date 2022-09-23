<template>
	<div class="feed-list">
		<h4>내가 쓴 피드</h4>
		<div class="horiz-scroll-box">
			<feed-list-item v-for="feed in feeds" :key="feed.feedId" :feed="feed"></feed-list-item>
		</div>
	</div>
</template>

<script>
import FeedListItem from '@/components/feed/FeedListItem'
import { mapState } from 'vuex'

export default {
	name: "MyFeedList",
	components: {
		FeedListItem,
	},
	props: {
		profile: Object,
	},
	computed: {
		...mapState('accounts', ['feeds']),
	}

}
</script>

<style scoped>
.horiz-scroll-box {
	display: flex;
	flex-wrap: nowrap;
	overflow: auto;
}
.feed-item {
	flex: 0 0 auto;
}
</style>