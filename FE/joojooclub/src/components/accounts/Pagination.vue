<template>
	<div>
		<nav class="pagination-outer">
			<ul class="pagination">
				<li class="page-item">
					<a class="page-link" @click="goPrevPage()">
						<span>«</span>
					</a>
				</li>
				<li class="page-item" v-for="page in pageList" :key="page" :class="{ 'active': page === currentPage }">
					<a @click="goSpecPage(page)" class="page-link">{{ page }}</a>
				</li>
				<li class="page-item">
					<a @click="goNextPage()" class="page-link">
						<span>»</span>
					</a>
				</li>
			</ul>
    </nav>
	</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'PaginationNav',
	props: {
		currentPage: Number,
		pageList: Array,
	},
	methods: {
		...mapActions(['goSpecPage'])
	},
}
</script>

<style scoped>
.pagination-outer{ text-align: center; }
.pagination{
	/* font-family: 'Rubik', sans-serif; */
	padding: 0 30px;
	display: inline-flex;
	position: relative;
}
.pagination li a.page-link{
	color: #909090;
	background-color: transparent;
	font-size: 22px;
	line-height: 35px;
	height: 45px;
	width: 40px;
	margin: 0 3px;
	border: none;
	border-radius: 0;
	overflow: hidden;
	position: relative;
	transition: all 0.4s ease 0s;
}
.pagination li.active a.page-link,
.pagination li a.page-link:hover,
.pagination li.active a.page-link:hover{
	color: #006266;
	background-color: transparent;
}
.pagination li a.page-link span{
	display: block;
	transition: all 0.3s;
}
.pagination li a.page-link:hover span{ transform: rotateY(360deg); }
.pagination li a.page-link:before,
.pagination li a.page-link:after{
	content: "";
	background-color: #006266;
	height: 3px;
	width: 0;
	opacity: 1;
	position: absolute;
	left: 0;
	bottom: 0;
	z-index: -1;
	transition: all 0.3s;
}
.pagination li a.page-link:before{
	background: linear-gradient(135deg,transparent 49%, #006266 50%);
	height: 15px;
	width: 15px;
	transform: translateX(-50%) rotate(45deg);
	bottom: auto;
	top: -20px;
	left: 50%;
}
.pagination li a.page-link:hover:after{ width: 100%; }
.pagination li a.page-link:hover:before{ top: -10px; }
.pagination li a.page-link:hover:before,
.pagination li.active a.page-link:before{
  top: -10px;
}
.pagination li a.page-link:hover:after,
.pagination li.active a.page-link:after{
    width: 100%;
}
@media only screen and (max-width: 480px){
	.pagination{ display: block; }
	.pagination li{
			margin-bottom: 10px;
			display: inline-block;
	}
}
</style>