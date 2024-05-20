import { createRouter, createWebHashHistory } from 'vue-router';
import PostDetails from '../views/PostDetailsView.vue';
import Posts from '../views/PostsView.vue';
import TaskDetails from '../views/TaskDetailsView.vue';
import Tasks from '../views/TasksView.vue';

// export default createRouter({
//   history: createWebHistory('/vue-3-crud'),
//   routes: [],
// });

// import.meta.env.BASE_URL


const router = createRouter({
  history: createWebHashHistory('/vue-3-crud'),
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
      path: '/post/:id',
      name: 'postDetails',
      component: PostDetails,
    },
    {
      path: '/taskDetails/:id',
      name: 'taskDetails',
      component: TaskDetails,
    },
  ],
});

export default router;
