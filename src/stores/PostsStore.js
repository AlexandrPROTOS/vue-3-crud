import { defineStore } from 'pinia';

export const usePostsStore = defineStore('postsStore', {
  state: () => ({
    posts: [],

    pagesCount: 1,
  }),
});
