<template>
	<div class="feed-item col">
		<div class="card">
			<img :src="require(`@/assets/feed/${feed.imageUrl}`)" class="card-img-top" alt="Feed Image">
			<div class="card-body">
				<h4 class="card-title">{{ feed.title }}</h4>
				<span>{{ feed.likeCount }}</span>
				<p class="card-text overflow-auto" v-text="feed.content"></p>
			</div>
			<div class="card-footer">
				<span v-for="tag in feed.customTags" :key="tag">{{ tag }}</span>
				<small class="text-muted">{{ feed.createdAt }}</small>
				<router-link :to="{ name: 'feedEdit', params: feedId }">
					<button class="btn">수정</button>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'FeedListItem',
	props: {
		feed: Object,
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