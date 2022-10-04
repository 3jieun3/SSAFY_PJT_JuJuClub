<template>
	<div class="posting-body">
		<posting-form v-if="isFeed && currentUser" :feed="feed" action="update"></posting-form>
	</div>
</template>

<script>
import PostingForm from '@/components/feed/PostingForm'
import { mapGetters, mapActions } from 'vuex'

export default {
	name: 'PostingEditView',
	components: {
		PostingForm,
	},
	computed: {
		...mapGetters('feed', ['feed', 'isFeed']),
		...mapGetters(['currentUser']),
	},
	methods: {
		...mapActions('feed', ['fetchFeed']),
		...mapActions('drinks', ['setSearchDrink']),
		...mapActions(['fetchCurrentUser']),
	},
	created() {
		this.fetchFeed(this.$route.params.feedPK)
		this.setSearchDrink({ drinkIndex: this.$route.params.feedPK, drinkName: this?.feed?.drink?.drinkName })
	},
}
</script>

<style>
.posting-body {
	margin: 5vw 3vh;
}
</style>