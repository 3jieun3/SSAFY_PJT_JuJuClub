<template>
	<div>
		<search-bar v-if="isDrinkNames" :drinkNames="drinkNames" class="search-form"></search-bar>
		<span v-if="drinkError" class="sub-error">* 전통주명을 검색해주세요</span>
		<form class="ui form" enctype="multipart/form-data">
			<div class="field">
				<label for="drinkSearch">전통주명</label>
				<input type="text" v-model="selectedDrinkName" class="form-control" readonly>
			</div>
			<div class="field">
				<label for="title">제목</label>
				<input v-model.trim="newFeed.title" type="text" multiple="multiple" id="title" placeholder="제목" class="form-control">
			</div>
			<span v-if="titleError" class="sub-error">* 제목을 입력해주세요</span>
			
			<div class="field">
				<label for="content">내용</label>
				<textarea v-model.trim="newFeed.content" id="content" placeholder="내용"></textarea>
			</div>
			<span v-if="contentError" class="sub-error">* 내용을 입력해주세요</span>

			<div class="field">
				<label for="imageFile">첨부 파일</label>
				<div>
					<input type="file" accept="image/*" ref="image" id="imageFile" @change="uploadImage($event)">
					<img v-if="newFeed.previewImgUrl" :src="newFeed.previewImgUrl" alt="uploaded feed image" class="preview-image">
					<div class="ui button image-delete-button" @click="onDeleteImage()">업로드 취소</div>
				</div>
			</div>
			<!-- <span v-if="(action === `update`) && fileError" class="sub-error">* 피드 이미지를 수정해주세요</span> -->

			<div class="field">
				<label for="tags">태그</label>
				<input v-model.trim="newFeed.customTags" type="text" id="tags" placeholder="태그">
			</div>

			<button class="ui button" @click="goback">뒤로</button>
			<button class="ui button" @click.prevent="onSubmit">저장</button>
		</form>
	</div>
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
		currentUser: Object,
	},
	data() {
		return {
			newFeed: {
				feedIndex: this.feed.feedIndex,
				drinkIndex: this.feed.drink.drinkIndex,
				drinkName: this.feed.drink.drinkName,
				title: this.feed.title,
				content: this.feed.content,
				customTags: this.feed.customTags,
				imgFile: this.feed.imgFile ? this.feed.imgFile : '',
				imgUrl: this.feed.imageUrl ? this.feed.imageUrl : '',
				previewImgUrl: this.feed.imageUrl	// 업로드한 이미지 미리보기
			},

			// required warning message
			drinkError: false,
			titleError: false,
			contentError: false,
			memberIndex: this?.currentUser?.member?.memberIndex,
		}
	},
	computed: {
		...mapGetters('drinks', ['isSearched', 'searchedDrink', 'isDrinkNames', 'drinkNames']),
		selectedDrinkName() {
			if (this.isSearched) { 
				this.setSearchDrink({drinkIndex: this.feed.drink.drinkIndex, drinkName: this.feed.drink.drinkName})
				return this.feed.drink.drinkName
			} else { 
				return this.searchedDrink.drinkName
			}
		},
		// isdrinkError() {
		// 	if (!this.isSearched) { return false }
		// 	else { return true }
		// },
	},
	methods: {
		...mapActions('feed', ['createFeed','updateFeed']),
		...mapActions('drinks', ['fetchDrinkNames', 'setSearchDrink']),
		goback() {
			this.$router.push({
				name: 'profile',
				params: {
					userPK: this?.memberIndex
				}
			})
		},
		onSubmit() {
			// required 확인
			this.drinkError = this.checkRequiredError(this.searchedDrink.drinkIndex)
			this.titleError = this.checkRequiredError(this.newFeed.title)
			this.contentError = this.checkRequiredError(this.newFeed.content)
			if (!this.drinkError && !this.titleError && !this.contentError) {
				// form data 선언
				let formdata = new FormData()
				// 키값 추가
				this.newFeed.drinkIndex = this.searchedDrink.drinkIndex,
				formdata.append('drinkIndex', this.newFeed.drinkIndex)
				formdata.append('title', this.newFeed.title)
				formdata.append('content', this.newFeed.content)
				formdata.append('customTags', this.newFeed.customTags)

				if (this.action === 'create') {
					for (let [k, v] of formdata.entries()) console.log(k, v)
					formdata.append('imgFile', this.newFeed.imgFile)
					this.createFeed(formdata)
				} else if (this.action === 'update') {
					formdata.append('feedIndex', this.feed.feedIndex)
					formdata.append('imgFile', this.newFeed.imgFile)
					formdata.append('imgUrl', this.newFeed.imgUrl)
					for (let [k, v] of formdata.entries()) console.log(k, v)
					this.updateFeed(formdata)
				}
			}
		},
		uploadImage(event) {
			// 업로드한 이미지 파일 가져오기
			this.newFeed.imgFile = event.target.files[0]
			event.target.value = ''
			// 기존 이미지 url 필드 삭제
			this.newFeed.imgUrl = ''	
			// 미리보기를 위한 url 변환
			this.newFeed.previewImgUrl = URL.createObjectURL(this.newFeed.imgFile)
		},
		onDeleteImage() {		// 업로드한 이미지 삭제
			this.newFeed.imgFile = ''
			this.newFeed.imgUrl = ''
			this.newFeed.previewImgUrl = ''
		},
		checkRequiredError(val) {
			if (val === undefined) return true
			else if (val === null) return true
			else if (val === '') return true
			else return false
		},
	},
	watch: {
		feed() {
			this.newFeed = this.feed
		},
		title(val) {
			if (val.length >= 1) this.titleError = false
		},
		content(val) {
			if (val.length >= 1) this.contentError = false
		},
		drinkIndex(val) {
			if (val > 0) this.drinkError = false
			else if (val !== null) this.drinkError = false
		}
	},
	created() {
		this.fetchDrinkNames()
	},
}
</script>

<style scoped>
.ui.form .field {
	margin-top: 1rem;
}
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
.search-form {
	width: 50vw;
	margin-bottom: 1.5vw;
	margin-left: 25vw;
}
/* .image-delete-button {
	
} */
</style>