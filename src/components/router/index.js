import { createRouter, createWebHistory } from 'vue-router';
import List from '@/components/container/List.vue';
import Form from '@/components/container/Form.vue';
import Video from '@/components/container/Video.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: List,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Form,
  },
  {
    path: '/video/:video',
    name: 'Video',
    component: Video,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;