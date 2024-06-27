import { type Post } from '@/helpers/post';
import { usePostsStore } from '@/stores/PostsStore';
import { storeToRefs } from 'pinia';
import { ref, type Ref } from 'vue';

const isLoading = ref(false);
type UsePostsReturns = {
  isLoading: Ref<boolean>,
  posts: Ref<Post[]>,
  pagesCount: Ref<number>,
  loadPosts: () => void,
}
export const usePosts = (): UsePostsReturns => {
  const postsStore = usePostsStore();
  const { posts, pagesCount } = storeToRefs(postsStore);

  const loadPosts = (): void => {
    isLoading.value = true;
    setTimeout(async () => {
      await postsStore.addPostsInState();
      isLoading.value = false;
    }, 500);
  };

  if (!isLoading.value && pagesCount.value === 1) {
    loadPosts();
  }
  
  return {
    isLoading,
    posts,
    pagesCount,
    loadPosts,
  };
};

