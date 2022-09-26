<template>
	<div class="posting-body">
		<posting-form :feed="feed" :action="edit"></posting-form>
	</div>
</template>

<script>
import PostingForm from '@/components/feed/PostingForm'
import { mapGetters } from 'vuex'

export default {
	name: 'PostingEditView',
	components: {
		PostingForm,
	},
	computed: {
		...mapGetters(['feed']),
	},
	methods: {
		// ...mapActions(['fetchFeed'])
	},
	// created() {
	// 	this.fetchFeed(this.$route.params.feedPK)
	// }
}
</script>

<style>
.posting-body {
	margin: 5vw 3vh;
}
</style>