<template>
	<div class="posting-body">
		<posting-form :feed="feed" :action="post"></posting-form>
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
				drinkIndex: null,
				title: '',
				content: '',
				customTags: '',
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