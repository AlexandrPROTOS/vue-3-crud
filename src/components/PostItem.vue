<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  post: {
    type: Object,
    required: true,
    validator({ id, title, body, userId }) {
      return id !== undefined
        && userId !== undefined
        && title.length && typeof title === 'string'
        && body.length && typeof body === 'string';
    },
  },
});
</script>

<template>
  <li class="post">
    <RouterLink :to="`/post/${post.id}`" class="post__router-link">
      <h3 class="post__name">{{ post.title }}</h3>
      <p class="post__text">{{ post.body }}</p>
      <p class="post__id">user id: {{ post.userId }}</p>
    </RouterLink>
  </li>
</template>

<style lang="scss" scoped>

.post{
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

  &__name{
    font-size: 17px;
    line-height: 22px;
  }

  &__text{
    font-size: 14px;
    line-height: 20px;
  }

  &__id{
    margin-left: auto;
    font-size: 13px;
    line-height: 16px;
  }
}

</style>
