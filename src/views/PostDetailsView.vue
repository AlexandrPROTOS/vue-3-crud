<script setup>
import {ref} from 'vue';
import {useRoute} from 'vue-router';

const route = useRoute();

console.log(route.params.id);

const post = ref({});

const fetchPost = async (postId) => {
  
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const result = await response.json();
  post.value = result;
};

fetchPost(route.params.id);
</script>

<template>
  <h2
    class="view-header"
  >
    Детальная страница поста
  </h2>
  <div class="post-details">
    <h3 class="post-details__title">Title: {{ post.title }}</h3>
    <p class="post-details__body">Body: {{ post.body }}</p>
    <p class="post-details__id">user id: {{ post.userId }}</p>
  </div>
</template>

<style lang="scss" scoped>

.post-details{
  display: flex;
  flex-direction: column;
  margin-top: 28px;
  gap: 20px;

  &__title,
  &__body,
  &__id{
    margin: 0;
    padding: 0;
  }

  &__title{
    font-size: 21px;
    line-height: 26px;
  }

  &__body{
    max-width: 783px;
    font-size: 20px;
    line-height: 24px;
  }

  &__id{
    font-size: 16px;
    line-height: 18px;
    text-align: right;
  }
}

</style>
