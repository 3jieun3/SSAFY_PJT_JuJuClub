<template>
	<div class="posting-body">
		<posting-form :feed="feed" action="update"></posting-form>
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
		...mapGetters('feed', ['feed']),
	},
	methods: {
		...mapActions('feed', ['fetchFeed'])
	},
	created() {
		this.fetchFeed(this.$route.params.feedPK)
	},
}
</script>

<style>
.posting-body {
	margin: 5vw 3vh;
}
</style>