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
				drink: {
					drinkName: '',
					drinkIndex: 4,
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