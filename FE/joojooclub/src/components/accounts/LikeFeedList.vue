<template>
	<div class="feed-list">
		<h4>좋아요한 피드</h4>
		<div class="horiz-scroll-box">
			<feed-list-item v-for="feed in likedFeeds" :key="feed.feedId" :feed="feed"></feed-list-item>
		</div>
	</div>
</template>

<script>
import FeedListItem from '@/components/feed/FeedListItem'
// import { mapState } from 'vuex'

export default {
	name: "LikeFeedList",
	components: {
		FeedListItem,
	},
	props: {
		currentUser: Object,
	},
	data() {
		return {
			// likeFeedsCount: this.currentUser.feeds.likeCount,	// 좋아요 한 피드 개수
			// likedFeeds: this.currentUser.likedFeeds,	// api 확인 필요
			likedFeeds: [
        {
          feedId: 1,
          memberId: 1,
          title: '피드 1',
          content: '파전에 막걸리만 먹으라는 법은 없지요! 우중충한 하루의 마무리로 피쉬앤칩스와 막걸리 한잔 드시고 가세요^^~ 감각적인 음악과 맛있는 음식, 놀거리가 있는 곳은? 이태원 모마!!',
          likeCount: 3333,
          createdAt: '2022.03.03',
          customTags: ['#막걸리', '#피쉬앤칩스', '#혼막', '#퓨전'],
          imageUrl: 'ryan1.jpg'
        },
        { 
          feedId: 2,
          memberId: 1,
          title: '피드 2',
          content: '어제 곱창전골로 유명한 \'새가덕 순대\'를 다녀왔어요!!!! 곱창두개 삼겹하나 주문했다가 주위사람들이 모듬구이 먹길래 저도 변경해서 주문했어요. 청주랑 먹으니까 더 맛있네요. 다들 소곱말고 청곱 시도해보세요!',
          likeCount: 555,
          createdAt: '2022.03.13',
          customTags: ['#곱창', '#소주 대신 청주'],
          imageUrl: 'ryan2.jpg'
        },
        {
          feedId: 3,
          memberId: 1,
          title: '피드 3',
          content: '안녕하세요.\n 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
          likeCount: 333,
          createdAt: '2022.03.23',
          customTags: ['#청도', '#연어', '#아이스와인'],
          imageUrl: 'ryan3.jpg'
        },
        { 
          feedId: 4,
          memberId: 1,
          title: '피드 2',
          content: '어제 곱창전골로 유명한 \'새가덕 순대\'를 다녀왔어요!!!! 곱창두개 삼겹하나 주문했다가 주위사람들이 모듬구이 먹길래 저도 변경해서 주문했어요. 청주랑 먹으니까 더 맛있네요. 다들 소곱말고 청곱 시도해보세요!',
          likeCount: 555,
          createdAt: '2022.03.13',
          customTags: ['#곱창', '#소주 대신 청주'],
          imageUrl: 'ryan2.jpg'
        },
        {
          feedId: 5,
          memberId: 1,
          title: '피드 3',
          content: '안녕하세요.\n 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
          likeCount: 333,
          createdAt: '2022.03.23',
          customTags: ['#청도', '#연어', '#아이스와인'],
          imageUrl: 'ryan3.jpg'
        }
      ],
		}
	},
	created() {
		// console.log(this.currentUser)
	},
}
</script>

<style scoped>
.horiz-scroll-box {
	display: flex;
	flex-wrap: nowrap;
	overflow: auto;
}
.feed-item {
	width: 25rem;
	flex: 0 0 auto;
}
</style>