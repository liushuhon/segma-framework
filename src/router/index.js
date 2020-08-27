import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'defaultLayout',
        component: () => import('../components/base_layout/Index.vue'),
        children: [
            {
                path: '/menu1',
                name: 'menu1',
                component: () => import('../views/About.vue')
            },
            {
                path: '/menu2',
                name: 'tableAndForm',
                component: () => import('../components/table_and_form/Index.vue')
            },
            {
                path: '/menu3',
                name: 'tableLayout',
                component: () => import('../components/table_layout/Index.vue')
            },
            {
                path: 'list-button-layout',
                name: 'listButtonLayout',
                component: () => import('../components/list_button_layout/Index.vue')
            },
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
