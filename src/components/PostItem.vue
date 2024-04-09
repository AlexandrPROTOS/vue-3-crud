<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  post: {
    type: Object,
    required: true,
    validator(id, title, body, userId) {
      id > 0,
      title === String,
      body === String,
      userId > 0;
    },
  },
});

</script>

<template>
  <li class="posts-view__item post">
    <RouterLink :to="`/post/${post.id}`" class="post__router-link">
      <h3 class="post__name">
        {{ post.title }}
      </h3>
      <p class="post__text">{{ post.body }}</p>
      <p class="post__id">user id:<span>{{ post.userId }}</span></p>
    </RouterLink>
  </li>
</template>

<style lang="scss" scoped>

.post{
  width: calc(50% - 10px);

  &__router-link{
    display: flex;
    flex-direction: column;
    min-height: 186px;
    padding: 17px;
    gap: 16px;
    text-decoration: none;
    color: black;
    cursor: pointer;
    border: 1px solid rgb(170 170 170);
  }

  &__router-link:hover{
    border: 1px solid rgb(0 0 0);
    box-shadow: 0 2px 8px 0 rgba(99 99 99 / 0.2);
    transition: 0.15s ease;
  }

  &__name,
  &__text,
  &__id{
    margin: 0;
    padding: 0;
  }

  &__id{
    margin-left: auto;
  }
}

</style>
