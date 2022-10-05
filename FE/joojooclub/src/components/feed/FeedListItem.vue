<template>
	<div class="ui raised card feed-card">
		<i class=""></i>
		<div class="card-header">
			<div class="right floated meta">{{ createdDate }}</div>
			<i class="fa-solid fa-bottle-droplet fa-xl mx-2"></i>
			<router-link :to="{ name: 'drink', params: { drinkPK: this.feed.drink.drinkIndex } }" class="drink-detail-link">
				<strong class="card-dirnk">{{ feed.drink.drinkName }}</strong>
			</router-link>
		</div>
		<div class="image">
			<img v-if="feed.imageUrl" :src="feed.imageUrl" alt="Feed Image">
			<!-- <img v-else :src="feed.drink.imageUrl" class="feed-img" alt="Feed Image"> -->
			<img v-else :src="require(`@/assets/logo_for_header.png`)">
			<div v-if="isCurrentUser && (currentUser.member.memberIndex === feed.member.memberIndex)">
				<div class="darkness"></div>
				<i class="btn fa-solid fa-pen-to-square fa-xl" @click="editFeed"></i>
				<i class="btn fa-solid fa-trash-can fa-xl" @click="deleteFeed(feed.feedIndex)"></i>
			</div>
		</div>
		<div class="card-body overflow-auto">
			<div class="sticky-header">
				<span class="card-heart">
					<span>{{ feed.likeCount >= 1000 ? `999+` : feed.likeCount }}</span>
					<like-button v-if="isCurrentUser" :feed="feed" :currentUser="currentUser"></like-button>
					<button v-else class="btn"><i class="fa-solid fa-heart fa-2x"></i></button>
				</span>
				<h4 class="card-title">{{ feed.title }}</h4>
			</div>
			<p class="card-text overflow-auto text-center p-2" v-html="content"></p>
		</div>
		<div class="card-footer">
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
		content() {
			return this.feed.content.replaceAll('\n', '<br />')
		}
	},
	methods: {
		...mapActions('feed', ['deleteFeed', 'fetchLikeMembers']),
		editFeed() {
			this.$router.push({ 
				name: 'feedEdit',
				params: {feedPK: this.feed.feedIndex}
			})
		},
	},
	created() {
		//this.fetchLikeMembers(this.feed.feedIndex)
	},
	updated() {
		//this.fetchLikeMembers(this.feed.feedIndex)
	}
}
</script>

<style scoped>
.drink-detail-link {
	color: black;
}
.ui.three.cards > .card.feed-card {
	width: 25rem;
	/* height: 100%; */
	/* margin: 2rem; */
}
@media only screen and (min-width: 771px) {
.ui.card > .image, .ui.cards >.card > .image {
	flex: 0 0 23rem;
	background-color: white;
}
}
.ui.card > .image > img {
	/* position: absolute; */
	/* top: 0;
	left: 0; */
	/* height: 100%; */
	height: 50vh;
	width: 100%;
	/* object-fit: contain; */
	/* padding: 0.3rem; */
	object-fit: cover;
}
.card-header {
	padding-top: 1rem;
}
.card-title {
	margin-top: 0.2rem;
	margin-left: 1rem;
}
span > .btn {
	padding: 0 0.5rem 0 0.3rem;
}
.card-body {
	position: relative;
	flex: 0 0 13rem;
	padding-top: 0;
}
.sticky-header {
	background-color: white;
	position: sticky;
	top: 0;
	height: 2.5rem;
	padding: 0.4rem 0 0.5rem 0;
}
.card-heart {
	position: absolute;
	top: 0;
	right: 0.5rem;
}
.fa-heart {
	color: rgb(233, 187, 131);
}
.darkness {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 23rem;
  background: #000000;
  opacity: 0;
  transition: all .6s linear;
}
.image:hover .darkness{
  opacity: 0.4;
}
.fa-pen-to-square, .fa-trash-can {
	color: white;
	position: absolute;
	top: 45%;
	opacity: 0;
	transform: scale(2);
	transition: all .4s linear;
}
.fa-pen-to-square {
	left: 33%;
}
.fa-trash-can {
	left: 53%;
}
.image:hover .fa-solid {
  opacity: 1;
	transform: scale(1);
}
</style>