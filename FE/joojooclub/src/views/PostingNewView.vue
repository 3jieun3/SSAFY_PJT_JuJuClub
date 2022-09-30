<template>
	<div class="posting-body">
		<posting-form :feed="feed" action="create"></posting-form>
	</div>
</template>

<script>
import PostingForm from '@/components/feed/PostingForm'

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
			}
		}
	},
}
</script>

<style>
.posting-body {
	margin: 5vw 3vh;
}
</style>