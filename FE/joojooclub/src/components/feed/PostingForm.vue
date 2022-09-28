<template>
	<form class="ui form" enctype="multipart/form-data">
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
			<div>
				<input type="file" ref="image" name="image-file" id="imageFile" accept="image/*" @change="uploadImage">
				<img :src="this.uploadedImageUrl" alt="uploaded feed image" class="preview-image">
			</div>
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
			uploadedImageUrl: '',
			newFeed: {
				drinkIndex: this.feed.drinkIndex,
				title: this.feed.title,
				content: this.feed.content,
				customTags: this.feed.customTags,
				imageUrl: this.feed.imageUrl,
			}
		}
	},
	methods: {
		...mapActions('feed', ['createFeed','updateFeed']),
		onSubmit() {
			console.log(this.newFeed)
			if (this.action === 'create') {
				const payload = {
					...this.newFeed,
				}
				this.createFeed(payload)
			} else if (this.action === 'edit') {
				const payload = {
					...this.newFeed,
				}
				this.updateFeed(payload)
			}
		},
		uploadImage() {
			this.uploadedImageUrl = URL.createObjectURL(this.$refs['image'].files[0])
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
.preview-image {
	width: 30vw;
}
</style>