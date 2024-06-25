import { fetchPosts } from '@/api/post';
import { POSTS_PER_PAGE } from '@/api/post';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePostsStore = defineStore('postsStore', () => {
  const posts = ref([]);
  const pagesCount = ref(1);
  const addPostsInState =  async () => {
    const endPost = pagesCount.value * POSTS_PER_PAGE;
    const startPost = endPost - POSTS_PER_PAGE;
    const result = await fetchPosts(startPost, endPost);
    posts.value.push(...result);
    pagesCount.value+=1;
  };

  return { posts, pagesCount, addPostsInState };
});
