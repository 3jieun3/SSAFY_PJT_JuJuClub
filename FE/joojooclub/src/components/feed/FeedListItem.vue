<template>
	<div class="ui card feed-card card-box">
		<div class="card-header">
			<router-link :to="{ name: 'drink', params: { drinkPK: this.feed.drink.drinkIndex } }" class="drink-detail-link">
				<strong class="card-dirnk">{{ feed.drink.drinkName }}</strong>
			</router-link>
		</div>

		<div class="card-image">
			<img v-if="feed.imageUrl" :src="feed.imageUrl" alt="Feed Image" class="img-fluid feed-image card-img-top" style="height: 220px">
			<img v-else :src="require(`@/assets/logo_for_header.png`)" class="img-fluid feed-image card-img-top" style="height: 220px">
			<div v-if="isCurrentUser && (currentUser.member.memberIndex === feed.member.memberIndex)">
				<div class="darkness"></div>
				<i class="btn fa-solid fa-pen-to-square fa-xl" @click="editFeed"></i>
				<i class="btn fa-solid fa-trash-can fa-xl" @click="deleteFeed(feed.feedIndex)"></i>
			</div>
		</div>

		<div class="card-body" style="height: 200px">
			<div class="card-details my-2 d-flex justify-content-between align-items-center">
				<h3 class="card-title my-0">{{ feed.title }}</h3>
				<span class="card-heart d-flex justify-content-center align-items-center" style="margin-right: 7px">
					<span>{{ feed.likeCount >= 1000 ? `999+` : feed.likeCount }}</span>
					<like-button v-if="isCurrentUser" :feed="feed" :currentUser="currentUser"></like-button>
					<div v-else class="px-2"><i class="fa-regular fa-heart fa-2x" style="color: red"></i></div>
				</span>
			</div>
			<div class="card-text overflow-auto" style="height: 120px">
				<p class="text-start p-2" v-html="content"></p>
			</div>
			<div class="card-details">
				<h4 class="card-tags">{{ feed.customTags }}</h4>
			</div>
			<small class="card-date text-muted">{{ createdDate }}</small>
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
}
</script>

<style scoped>
.drink-detail-link {
	color: inherit;
}
.ui.cards>.card, .ui.cards>.card.feed-card {
	aspect-ratio: 3 / 4.5;
	width: 23rem;
	flex-flow: column nowrap;
}
.ui.cards>.card>.card-header {
	flex: 0 0 2rem;
}
.card-image {
	position: relative;
}
.ui.cards>.card>.card-image>.feed-image {
	object-fit: contain;
	background: linear-gradient(200deg, rgba(219,219,219,1) 0%, rgba(235,235,235,1) 50%, rgba(212,205,151,1) 100%);
}
.card-body {
	position: relative;
	padding: 1px;
	flex-flow: column wrap;
}
.card-title, .card-tags {
	float: left;
	text-align: start;
	margin: 1rem 0 0.3rem 1rem;
	font-family: 'NanumSquareRound';
}
.card-text {
	clear: both;
	margin: 0 0.5rem;
}
.card-date {
	position: absolute;
	bottom: 1rem;
	right: 1rem;
}
.fa-heart {
	color: rgb(233, 187, 131);
}
.darkness {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000;
  opacity: 0;
  transition: all .6s linear;
}
.card-image:hover .darkness{
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
	left: 37%;
}
.fa-trash-can {
	left: 57%;
}
.card-image:hover .fa-solid {
  opacity: 1;
	transform: scale(1);
}
</style>