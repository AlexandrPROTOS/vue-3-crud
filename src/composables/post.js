import { usePostsStore } from '@/stores/PostsStore';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const isLoading = ref(false);

export const usePosts = () => {
  const postsStore = usePostsStore();
  const { posts, pagesCount } = storeToRefs(postsStore);

  const loadingPosts = () => {
    isLoading.value = true;
    setTimeout(async () => {
      await postsStore.addPostsInState();
      isLoading.value = false;
    }, 500);
  };

  if (!isLoading.value && pagesCount.value === 1) {
    loadingPosts();
  }
  
  return {
    isLoading,
    posts,
    pagesCount,
    loadingPosts,
  };
};

