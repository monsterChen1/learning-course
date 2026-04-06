import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Layout from '@/views/Layout.vue';
import ArticleDetail from '@/views/ArticleDetail.vue';
import Article from '@/views/Layout/Article.vue';
import Collect from '@/views/Layout/Collect.vue';
import Like from '@/views/Layout/Like.vue';
import User from '@/views/Layout/User.vue';

const router = new VueRouter({
    // 一级路由
    routes: [{
        name: 'layout',
        path: '/',
        component: Layout,
        // 二级路由
        children: [
            { path: "/article", component: Article},
            { path: "/collect", component: Collect},
            { path: "/like", component: Like},
            { path: "/user", component: User},
        ]
    }, {
        name: 'detail',
        path: '/detail/:id(\\d+)*',
        component: ArticleDetail
    }]
});

export default router;