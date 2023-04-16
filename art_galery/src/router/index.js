import {
  createRouter,
  createWebHistory,
} from 'vue-router';

import Favorites from '@/pages/Favorites';
import Main from '@/pages/Main';

const routes = [
    { 
        path: '/', 
        component: Main
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