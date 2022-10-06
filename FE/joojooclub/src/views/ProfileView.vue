<template>
	<div v-if="isCurrentUser">
		<div class="mypage-body row justify-content-between">
			<my-profile class="mypage-nav col-12 col-sm-3 col-xl-2" :currentUser="currentUser"></my-profile>
			<div class="mypage-section col-12 col-sm-8 col-xl-9">
				<h4>내가 쓴 후기</h4>
				<my-comment-list class="mypage-article" :currentUser="currentUser"></my-comment-list>
				<h4>내가 쓴 피드</h4>
				<my-feed-list class="mypage-article" v-if="isFeeds" :currentUser="currentUser"></my-feed-list>
				<h4>좋아요한 피드</h4>
				<like-feed-list class="mypage-article" v-if="isFeeds" :currentUser="currentUser"></like-feed-list>
			</div>
		</div>
	</div>
</template>

<script>
import MyProfile from '@/components/accounts/MyProfile'
import MyCommentList from '@/components/accounts/MyCommentList'
import MyFeedList from '@/components/accounts/MyFeedList'
import LikeFeedList from '@/components/accounts/LikeFeedList'
import { mapGetters, mapActions } from 'vuex'

export default {
	name: "ProfileView",
	components: {
		MyProfile,
		MyCommentList,
		MyFeedList,
		LikeFeedList,
	},
	computed: {
		// isCurrentUser: rednering 전 변수 undefined 문제 해결 위해 사용
		...mapGetters(['currentUser', 'isCurrentUser']),
		...mapGetters('feed', ['isFeeds']),
	},
	methods: {
		...mapActions(['fetchCurrentUser', 'goMyPage']),
		...mapActions('feed', ['fetchAllFeeds']),
		
  },
	created() {
		this.fetchCurrentUser()
		this.fetchAllFeeds()
	},
	updated() {
		this.fetchCurrentUser()
	}
}
</script>

<style>
.mypage-body {
	margin: 5vh 3vw;
}
.mypage-nav {
	margin-bottom: 5vh;
}
.mypage-section > h4 {
	text-align: start;
}
</style>