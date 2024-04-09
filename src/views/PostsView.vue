<script setup>
import PostItem from '@/components/PostItem.vue';
import { ref } from 'vue'; 

const postsPagesNext = ref(1);
const fromPost = ref(0);
const toPost = ref(4);

const posts =ref([]);

const fetchPosts = async () => {
  const API_POSTS_BASE_URL = `https://jsonplaceholder.typicode.com/posts?_start=${fromPost.value}&_end=${toPost.value}`;
  const response = await fetch(API_POSTS_BASE_URL);
  const result = await response.json();
  result.forEach(post => {
    posts.value.push(post);  
  });
};
 

const AddPostsAndIncreasePages = () => {
  fetchPosts();
  postsPagesNext.value+=1;
  fromPost.value+=4;
  toPost.value+=4;
};

AddPostsAndIncreasePages();

</script>

]<template>
  <h2 class="view-header posts-view">Получение списка всех постов</h2>

  <ul class="posts-view__list">
    <PostItem
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />
  </ul>
  
  <el-button
    type="primary"
    size="large"
    class="posts-view__btn"
    @click="AddPostsAndIncreasePages"
  >
    <span>Загрузить страницу <span>{{ postsPagesNext }}</span></span>
  </el-button>
</template>

<style lang="scss" scoped>

.posts-view{
  &__list{
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    margin-top: 28px;
    padding: 0;
    gap: 20px;
  }

  &__btn{
    margin-top: 20px;
    margin-right: auto;
    margin-left: auto;
    cursor: pointer;
  }

}



</style>
