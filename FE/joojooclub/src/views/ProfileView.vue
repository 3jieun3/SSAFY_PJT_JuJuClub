<template>
	<div class="mypage-body">
		<div class="mypage-header">
			<my-profile :profile="profile"></my-profile>
		</div>
		<!-- <div class="mypage-content">
			<comment-list :comments="comments"></comment-list>
			<my-feed-list :profile="profile"></my-feed-list>
			<like-feed-list :profile="profile"></like-feed-list>
		</div> -->
	</div>
</template>

<script>
import MyProfile from '@/components/accounts/MyProfile'
import { mapState } from 'vuex'

export default {
	name: "ProfileView",
	components: {
		MyProfile,
	},
	computed: {
		...mapState('accounts', ['profile', 'comments']),
	},
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