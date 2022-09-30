<template>
	<form class="ui form">
		<div class="field">
			<label for="drinkSearch">전통주명</label>
			<search-bar :drinkName="drinkName"></search-bar>
			<p v-if="searchedDrink">{{ this.searchedDrink.drinkName }}</p>
		</div>
		<div class="field">
			<label for="title">제목</label>
			<input v-model.trim="newFeed.title" type="text" id="title" placeholder="제목을 입력하세요.">
		</div>
		<div class="field">
			<label for="content">내용</label>
			<textarea v-model.trim="newFeed.content" id="content" placeholder="내용을 입력하세요."></textarea>
		</div>
		<div class="field">
			<label for="imageFile">첨부 파일</label>
			<div>
				<input type="file" ref="image" id="imageFile" @change="uploadImage">
				<img v-if="newFeed.imgFile" :src="newFeed.imgFile" alt="uploaded feed image" class="preview-image">
			</div>
		</div>
		<div class="field">
			<label for="tags">태그</label>
			<input v-model.trim="newFeed.customTags" type="text" id="tags" placeholder="태그를 입력하세요.">
		</div>
		<button class="ui button" @click="$router.back()">뒤로</button>
		<button class="ui button" @click.prevent="onSubmit">저장</button>
	</form>
</template>

<script>
import SearchBar from '@/components/feed/SearchBar'
import { mapActions, mapGetters } from 'vuex'

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
			drinkName: this.feed.drink.drinkName,
			newFeed: {
				drinkIndex: this.feed.drink.drinkIndex,
				title: this.feed.title,
				content: this.feed.content,
				customTags: this.feed.customTags,
				imgFile: this.feed.imageUrl,
			}
		}
	},
	computed: {
		...mapGetters('drinks', ['searchedDrink'])
	},
	methods: {
		...mapActions('feed', ['createFeed','updateFeed']),
		...mapActions('drinks', ['fetchDrinkNames']),
		onSubmit() {
			// form data 선언
      const formdata = new FormData()
      // 키값 추가
			this.drinkIndex = this.searchedDrink.drinkIndex,
      formdata.append('drinkIndex', this.drinkIndex)
			formdata.append('title', this.newFeed.title)
			formdata.append('content', this.newFeed.content)
			formdata.append('customTags', this.newFeed.customTags)
			formdata.append('imgFile', this.newFeed.imgFile)

			if (this.action === 'create') {
				for (let value of formdata.values()) {
					console.log(value)
				}
				this.createFeed(formdata)
			} else if (this.action === 'update') {
					formdata.append('feedIndex', this.feed.feedIndex)
				this.updateFeed(formdata)
			}
		},
		uploadImage() {
			this.newFeed.imgFile = URL.createObjectURL(this.$refs['image'].files[0])
		}
	},
	created() {
		this.fetchDrinkNames()
	},
	watch: {
		feed() {
			this.newFeed = this.feed
		}
	}
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