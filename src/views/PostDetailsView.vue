<script setup></script>

<template>
  <h2
    class="post-details
  view-header"
  >
    Детальная страница поста
  </h2>
  <div class="post-details__box">
    <h3 class="post-details__title">Title: {{ title }}</h3>
    <p class="post-details__body">Body: {{ body }}</p>
    <p class="post-details__id">user id: {{ id }}</p>
  </div>
</template>

<style lang="scss" scoped>

.post-details__box{
  display: flex;
  flex-direction: column;
  margin-top: 28px;
  gap: 20px;
}

.post-details__title,
.post-details__body,
.post-details__id{
  margin: 0;
  padding: 0;
}

.post-details__title{
  font-size: 21px;
  line-height: 26px;
}

.post-details__body{
  max-width: 783px;
  font-size: 20px;
  line-height: 24px;
}

.post-details__id{
  font-size: 16px;
  line-height: 18px;
  text-align: right;
}
</style>
