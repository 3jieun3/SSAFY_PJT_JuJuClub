<template>
	<form class="ui form">
		<div class="field">
			<label for="drinkSearch">전통주명</label>
			<search-bar></search-bar>
		</div>
		<div class="field">
			<label for="title">제목</label>
			<input v-model="newFeed.title" type="text" name="title" id="title" placeholder="제목을 입력하세요.">
		</div>
		<div class="field">
			<label for="content">내용</label>
			<textarea v-model="newFeed.content" name="content" id="content" placeholder="내용을 입력하세요."></textarea>
		</div>
		<div class="field">
			<label for="imageFile">첨부 파일</label>
			<input type="file" name="image-file" id="imageFile">
		</div>
		<div class="field">
			<label for="tags">태그</label>
			<input v-model="newFeed.customTags" type="text" name="tags" id="tags" placeholder="태그를 입력하세요.">
		</div>
		<button class="ui button">뒤로</button>
		<button class="ui button" @click.prevent="onSubmit">작성</button>
	</form>
</template>

<script>
import SearchBar from '@/components/feed/SearchBar'
import { mapActions } from 'vuex'

export default {
	name: 'PostingForm',
	components: {
		SearchBar,
	},
	props: {
		feed: Object,
		action: String,
	},
	data() {
		return {
			newFeed: {
				drinkIndex: this.feed.drinkIndex,
				title: this.feed.title,
				content: this.feed.content,
				customTags: this.feed.customTags,
			}
		}
	},
	methods: {
		...mapActions('feed', ['createFeed','updateFeed']),
		onSubmit() {
			if (this.action === 'post') {
				const payload = {
					drinkIndex: 1,
					feed: this.newFeed,
				}
				this.createFeed(payload)
			} else if (this.action === 'edit') {
				const payload = {
					feedIndex: this.$route.params.feedPK,
					...this.newFeed
				}
				this.updateFeed(payload)
			}
		}
	},
}
</script>

<style scoped>
.field {
	display: grid;
	column-gap: 2vw;
	grid-template-columns: 10vw auto;
}
.field > label {
	text-align: end;
	word-break: keep-all;
}
</style>