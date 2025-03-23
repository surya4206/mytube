import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '@/components/container/HomeView.vue'
import ProfileView from '@/components/container/ProfileView.vue'
import VideoView from '@/components/container/VideoView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/profile', component: ProfileView },
  { path: '/video/:id',component: VideoView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
