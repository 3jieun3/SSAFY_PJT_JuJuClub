<template>
  <div>
    <div class="comment-box">
      <p class="info-row">
        <span>
          <strong>{{ comment.drink.drinkName }}</strong>
          <span>{{ comment.score }}</span>
        </span>
        <small class="date">{{ comment.createdAt.substring(0, 10).replaceAll('-', '.') }}</small>
      </p>
      <p class="comment-row">{{ comment.review }}</p>
      <button class="btn">삭제</button>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: "CommentListItem",
  props: {
    comment: Object,
  },
}
</script>

<style scoped>
.info-row, .info-row > span:first-child {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  column-gap: 1rem;
}
.comment-box {
  position: relative;
  text-align: start;
}
button {
  position: absolute;
  right: 0;
  bottom: -1rem;
}
p {
  margin-bottom: 0;
}
.comment-row {
  padding: 2%;
}
</style>