<template>
	<div class="feed-item col">
		<div class="card">
			<img v-if="feed.imageUrl" :src="feed.imageUrl" class="card-img-top" alt="Feed Image">
			<img v-else src="https://dummyimage.com/600x600&text=NO+FEED+IMAGE!" class="card-img-top" alt="Feed Image">
			<div class="card-body">
				<h4 class="card-title">{{ feed.title }}</h4>
				<span>{{ feed.likeCount }}</span>
				<i class="fa-solid fa-heart fa-2x"></i>
				<p class="card-text overflow-auto" v-text="feed.content"></p>
			</div>
			<div class="card-footer">
				<span>{{ feed.customTags }}</span>
				<small class="text-muted">{{ feed.createdAt.substring(0, 10).replaceAll('-', '.') }}</small>
				<router-link :to="{ name: 'feedEdit', params: {feedPK: feed.feedIndex} }">
					<button v-if="isCurrentUser && (currentUser.member.memberIndex === feed.member.memberIndex)" class="btn btn-light">수정</button>
				</router-link>
					<button v-if="isCurrentUser && (currentUser.member.memberIndex === feed.member.memberIndex)" class="btn btn-light" @click="deleteFeed(feed.feedIndex)">삭제</button>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'FeedListItem',
	props: {
		feed: Object,
	},
	computed: {
		...mapGetters(['currentUser', 'isCurrentUser'])
	},
	methods: {
		...mapActions('feed', ['deleteFeed']),
	},
}
</script>

<style scoped>
.card {
	height: 100%;
}
.card img {
	width: 100%;
	height: 20rem;
	object-fit: cover;
}
.card-footer {
	height: 5em;
}
.card-text {
	height: 10rem;
}
</style>