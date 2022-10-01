<template>
	<div class="ui raised card feed-card">
		<div class="card-header">
			<div class="right floated meta">{{ createdDate }}</div>
			<button class="btn"><i class="fa-solid fa-bottle-droplet fa-xl"></i></button>
			<strong>{{ feed.drink.drinkName }}</strong>
		</div>
		<div class="content">
			<div class="image">
				<img v-if="feed.imageUrl" :src="feed.imageUrl" alt="Feed Image">
				<!-- <img v-else :src="feed.drink.imageUrl" class="feed-img" alt="Feed Image"> -->
				<img v-else src="https://dummyimage.com/600x600&text=NO+FEED+IMAGE!">
			</div>
			<div class="content">
				<span class="right floated">
					<span>{{ feed.likeCount }}</span>
					<like-button v-if="isCurrentUser" :feed="feed" :currentUser="currentUser"></like-button>
					<button v-else class="btn"><i class="fa-solid fa-heart fa-2x"></i></button>
				</span>
				<h4 class="card-title">{{ feed.title }}</h4>
				<div class="content">
					<p v-text="feed.content" class="card-text overflow-auto"></p>
				</div>
			</div>
		</div>
		<div class="extra content card-footer">
			<div class="ui large transparent left icon input">
				<p>{{ feed.customTags }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import likeButton from '@/components/feed/likeButton'
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'FeedListItem',
	components: {
		likeButton,
	},
	props: {
		feed: Object,
	},
	data(){
		return {
			createdDate: this.feed.createdAt.substring(2, 10).replaceAll('-', '.'),
		}
	},
	computed: {
		...mapGetters(['currentUser', 'isCurrentUser']),
		// ...mapGetters('feed', ['feeds'])
	},
	methods: {
		...mapActions('feed', ['deleteFeed', 'fetchLikeMembers']),
	},
	created() {
		this.fetchLikeMembers(this.feed.feedIndex)
	},
	// updated() {
	// 	this.fetchLikeMembers(this.feed.feedIndex)
	// }
}
</script>

<style scoped>
.ui.three.cards > .card {
	height: 100%;
}
.ui.cards >.card > .content {
	padding: 0.3rem;
	flex-grow: 0;
}
.ui.cards >.card > .content > .image {
	height: 60%;
}
.card img {
	width: 100%;
	height: 20rem;
	object-fit: cover;
}
.fa-heart {
	color: rgb(233, 187, 131);
}
</style>