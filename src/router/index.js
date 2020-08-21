import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'defaultLayout',
        component: () => import('../components/base_layout/Default.vue'),
        children: [
            {
                path: '/menu1',
                name: 'menu1',
                component: () => import('../views/About.vue')
            },
            {
                path: '/menu2',
                name: 'menu2',
                component: () => import('../views/About.vue')
            },
            {
                path: '/menu3',
                name: 'menu3',
                component: () => import('../views/About.vue')
            }
        ]
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
