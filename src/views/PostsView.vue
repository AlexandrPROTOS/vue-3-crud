<script setup>
import { POSTS_PER_PAGE } from '@/api/post';
import { fetchPosts } from '@/api/post';
import PostItem from '@/components/PostItem.vue';
import SkeletonItem from '@/components/SkeletonItem.vue';
import { usePostsStore } from '@/stores/PostsStore';
import { ref } from 'vue';

const postsStore = usePostsStore();
const isLoading = ref(false);

const loadNextPage = async () => {
  isLoading.value = true;
  const endPost = postsStore.pagesCount * POSTS_PER_PAGE;
  const startPost = endPost - 4;

  setTimeout(async () => {
    const result = await fetchPosts(startPost, endPost);
    postsStore.posts.push(...result);
    isLoading.value = false;
    postsStore.pagesCount+=1;
  }, 500);
};

if (!postsStore.posts.length) {
  loadNextPage();
}

</script>

<template>
  <h2 class="view-header posts-view">Получение списка всех постов</h2>

  <ul class="posts-view__list">
    <PostItem
      class="posts-view__item"
      v-for="post in postsStore.posts"
      :key="post.id"
      :post="post"
    />

    <SkeletonItem 
      class="posts-view__item"
      v-for="n in POSTS_PER_PAGE" 
      :key="n" 
      v-show="isLoading"
    />
  </ul>
  
  <el-button
    type="primary"
    size="large"
    class="posts-view__btn"
    :loading="isLoading"
    @click="loadNextPage"
  >
    Загрузить страницу {{ postsStore.pagesCount }}
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

  &__item {
    width: calc(50% - 10px);
  }

  &__btn{
    margin-top: 20px;
    margin-right: auto;
    margin-left: auto;
    cursor: pointer;
  }
}
</style>
