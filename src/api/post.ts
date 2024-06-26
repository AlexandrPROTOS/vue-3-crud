const POST_BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export const POSTS_PER_PAGE = 4;

import { type Post } from '@/helpers/post';

export const fetchPosts = async (startPost: number, endPost: number): Promise<Post[]> => {
  const response = await fetch(`${POST_BASE_URL}?_start=${startPost}&_end=${endPost}`);
  const result = response.json();
  return result;
};

export const fetchPost = async (postId: string): Promise<Post> => {
  const response = await fetch(`${POST_BASE_URL}/${postId}`);
  const result = response.json();
  return result;
};
