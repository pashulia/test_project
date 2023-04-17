import {
  createRouter,
  createWebHistory,
} from 'vue-router';

import Favorites from '@/pages/Favorites';
import Main from '@/pages/Main';
import PostIdPage from '@/pages/PostIdPage';

const routes = [
    { 
        path: '/', 
        component: Main
    },
    {
        path: '/photo/:id',
        component: PostIdPage
    },
    {
        path: '/favorites',
        component: Favorites
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;