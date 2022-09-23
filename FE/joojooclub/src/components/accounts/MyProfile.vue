<template>
	<div class="profile-box">
		<div class="summary-box">
			<div>
				<span>💜</span>
				<span>{{ profile.id }}</span>
			</div>
			<div>
				<button class="btn btn-warning">총 10건의 후기</button>
				<button class="btn btn-warning">총 3건의 피드</button>
				<button class="btn btn-warning">+</button>
			</div>
		</div>
		<button class="btn btn-warning">내 정보 편집</button>
	</div>
</template>

<script>
export default {
	name: "MyProfile",
	props: {
		profile: Object,
	},
}
</script>

<style>
.profile-box {
	display: grid;
	row-gap: 1rem;
}
.summary-box, .summary-box div {
	display: flex;
	flex-flow: row wrap;
	gap: 1rem;
}
.summary-box div:first-child {
	justify-content: space-around;
	flex-grow: 1;
}
</style>