<template>
	<div v-if="isCurrentUser">
		<div class="mypage-body">
			<div class="mypage-header">
				<my-profile :currentUser="currentUser"></my-profile>
			</div>
			<div class="mypage-content">
				<!-- <comment-list :comments="comments"></comment-list> -->
				<my-feed-list :currentUser="currentUser"></my-feed-list>
				<like-feed-list :currentUser="currentUser"></like-feed-list>
			</div>
		</div>
	</div>
</template>

<script>
import MyProfile from '@/components/accounts/MyProfile'
// import CommentList from '@/components/drinks/CommentList'
import MyFeedList from '@/components/accounts/MyFeedList'
import LikeFeedList from '@/components/accounts/LikeFeedList'
import { mapGetters, mapActions } from 'vuex'

export default {
	name: "ProfileView",
	components: {
		MyProfile,
		// CommentList,
		MyFeedList,
		LikeFeedList,
	},
	computed: {
		// isCurrentUser: rednering 전 변수 undefined 문제 해결 위해 사용
		...mapGetters(['currentUser', 'isCurrentUser']),
		// ...mapState('accounts', ['profile', 'comments']),
	},
	methods: {
    ...mapActions(['fetchCurrentUser'])
  },
	created() {
		this.fetchCurrentUser()
	},
	updated() {
	}
}
</script>

<style>
.mypage-body {
	margin: 5vh 5vw;
}
.mypage-header {
	margin-bottom: 5vh;
}
h4 {
	text-align: start;
}
.feed-list {
	margin-top: 5vh;
}
</style>