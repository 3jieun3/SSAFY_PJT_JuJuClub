<template>
	<div class="posting-body" v-if="currentUser">
		<posting-form :currentUser="currentUser" :feed="feed" action="create"></posting-form>
	</div>
</template>

<script>
import PostingForm from '@/components/feed/PostingForm'
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'PostingNewView',
	components: {
		PostingForm,
	},
	data() {
		return {
			feed: {
				feedIndex: null,
				drink: {
					drinkName: '',
					drinkIndex: null,
				},
				title: '',
				content: '',
				customTags: '',
				imgFile: '',
				imageUrl: '',
			}
		}
	},
	computed: {
		...mapGetters(['currentUser'])
	},
	methods: {
		...mapActions(['fetchCurrentUser'])
	},
}
</script>

<style>
.posting-body {
	margin: 5vw 3vh;
}
</style>