import { createRouter, createWebHistory } from 'vue-router';
import PostDetails from '../views/PostDetailsView.vue';
import Posts from '../views/PostsView.vue';
import TaskDetails from '../views/TaskDetailsView.vue';
import Tasks from '../views/TasksView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'posts',
      component: Posts,
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: Tasks,
    },
    {
      path: '/postDetails',
      name: 'postDetails',
      component: PostDetails,
    },
    {
      path: '/taskDetails',
      name: 'taskDetails',
      component: TaskDetails,
    },
  ],
});

export default router;
