<template>
	<div class="comment-list">
		<hr>
		<comment-list-item v-for="(comment, index) in comments" :key="index" :comment="comment"></comment-list-item>
		<pagination-nav :currentPage="currentPage" :pageList="pageList"></pagination-nav>
	</div>
</template>

<script>
import CommentListItem from '@/components/drinks/CommentListItem'
import PaginationNav from '@/components/accounts/Pagination'
import { mapGetters } from 'vuex'

export default {
	name: "CommentList",
	components: { 
		CommentListItem,
		PaginationNav,
	},
	props: {
		currentUser: Object,
	},
	data() {
		return {
			// comments: this.currentUser.comments,
			comments: [
        {
          index: 1,
          score: 5,
          content: '안녕하세요.\n 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
          createdAt: new Date(),
          memberPK: 1,
          drinkName: '복순도가 생막걸리'
        },
        {
          index: 2,
          score: 5,
          content: '안녕하세요.\n 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
          createdAt: new Date(),
          memberPK: 1,
          drinkName: '복순도가 생막걸리'
        },
        {
          index: 3,
          score: 5,
          content: '안녕하세요.\n 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
          createdAt: new Date(),
          memberPK: 1,
          drinkName: '딸링 막걸리'
        },
        {
          index: 4,
          score: 5,
          content: '안녕하세요.\n 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
          createdAt: new Date(),
          memberPK: 1,
          drinkName: '복순도가 생막걸리'
        }, 
        {
          index: 5,
          score: 5,
          content: '안녕하세요.\n 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
          createdAt: new Date(),
          memberPK: 1,
          drinkName: '복순도가 생막걸리'
        },
        {
          index: 6,
          score: 5,
          content: '안녕하세요.\n 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
          createdAt: new Date(),
          memberPK: 1,
          drinkName: '복순도가 생막걸리'
        },
        {
          index: 7,
          score: 5,
          content: '안녕하세요.\n 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
          createdAt: new Date(),
          memberPK: 1,
          drinkName: '복순도가 생막걸리'
        },
        {
          index: 8,
          score: 5,
          content: '안녕하세요.\n 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
          createdAt: new Date(),
          memberPK: 1,
          drinkName: '복순도가 생막걸리'
        },
        {
          index: 9,
          score: 5,
          content: '안녕하세요.\n 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
          createdAt: new Date(),
          memberPK: 1,
          drinkName: '딸링 막걸리'
        },
        {
          index: 10,
          score: 5,
          content: '안녕하세요.\n 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
          createdAt: new Date(),
          memberPK: 1,
          drinkName: '복순도가 생막걸리'
        }, 
        {
          index: 11,
          score: 5,
          content: '안녕하세요.\n 오늘은  코로나19 여파로 인해서 외식보다는 아무래도 집에서 먹는날이 많아졌는데요. 오늘은 엄마랑 같이 이마트가서 꼬막도 사고, 계란도 사고 야채도 사고 신나게 장보기 하고 오늘 당장 이걸로 먹자! 싶어서 사온 메뉴가 있어서 소개해드리려고합니다. 바로바로 연어사시미! 어릴때 신촌현대백화점가면 맨날 이거 사먹었는데..ㅎ\n 한동안 안먹다가.. ㅎ 추억의 맛으로 이걸 먹기로했어요. 마침 집에 아이스와인도 있었죠 ㅎ',
          createdAt: new Date(),
          memberPK: 1,
          drinkName: '복순도가 생막걸리'
        },
      ],
		}
	},
	computed: {
		...mapGetters(['currentPage', 'pageList']),
	},
	methods: {
	},
}
</script>

<style>
</style>