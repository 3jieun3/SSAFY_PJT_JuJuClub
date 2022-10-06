<template>
	<div class="ui card feed-card card-box">
		<div class="card-header">
			<router-link :to="{ name: 'drink', params: { drinkPK: this.feed.drink.drinkIndex } }" class="drink-detail-link">
				<strong class="card-dirnk">{{ feed.drink.drinkName }}</strong>
			</router-link>
		</div>

		<div class="card-image">
			<img v-if="feed.imageUrl" :src="feed.imageUrl" alt="Feed Image" class="img-fluid feed-image card-img-top">
			<img v-else :src="require(`@/assets/logo_for_header.png`)" class="img-fluid feed-image card-img-top">
			<div v-if="isCurrentUser && (currentUser.member.memberIndex === feed.member.memberIndex)">
				<div class="darkness"></div>
				<i class="btn fa-solid fa-pen-to-square fa-xl" @click="editFeed"></i>
				<i class="btn fa-solid fa-trash-can fa-xl" @click="deleteFeed(feed.feedIndex)"></i>
			</div>
		</div>

		<div class="card-body" style="height: 200px">
			<div class="card-details container">
				<div class="row">
					<h4 class="card-title col-12">{{ feed.title }}</h4>
				</div>
				<div class="row">
					<span class="col-6"><i class="fa fa-calendar fa-xl px-3 mt-4"></i>{{ createdDate }}</span>
					<span class="card-heart col-6">
						<like-button v-if="isCurrentUser" :feed="feed" :currentUser="currentUser"></like-button>
						<button v-else class="btn"><i class="fa-solid fa-heart fa-2x"></i></button>
						<span>{{ feed.likeCount >= 1000 ? `999+` : feed.likeCount }}</span>
					</span>
				</div>
			
				<div style="height: 120px" class="overflow-auto">
					<p class="card-text overflow-auto text-center p-2" v-html="content"></p>
				</div>
			</div>
		</div>

		<div class="card-footer">
			<strong>{{ feed.customTags }}</strong>
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
	position: relative;
	aspect-ratio: 3 / 4.5;
	width: 23rem;
	/* min-width: 22rem; */
	/* max-width: 36rem; */
	flex-flow: column nowrap;
}
.ui.cards>.card>.card-header, .ui.cards>.card>.card-footer {
	flex: 0 0 2rem;
}

/* .ui.cards>.card>.card-body {
	flex: 1 1 0;
} */
.card-box {
	position: relative;
}

.ui.cards>.card>.card-image {
	background-color: rgb(243, 242, 242);
}
.ui.cards>.card>.card-image>.feed-image {
	height: 200px;
	object-fit: contain;
	background-color: white;
}
.card-body {
	flex-flow: column wrap;
}
.card-details > span {
	margin: 0 4rem;
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