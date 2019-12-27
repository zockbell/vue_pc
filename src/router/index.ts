import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  { // 初始
    path: '/',
    redirect: '/login',
  },
  { // login
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/index.vue'),
    meta: {
      title: '登录',
    },
  },
  { // home
    path: '/home',
    name: 'home',
    component: () => import('../views/Home/index.vue'),
    meta: {
      title: '首页',
    },
  },
  { // about
    path: '/about',
    name: 'about',
    component: () => import('../views/About/index.vue'),
    meta: {
      title: '关于我们',
    },
  },
  { // read
    path: '/read',
    name: 'read',
    component: () => import('../views/Read/index.vue'),
    meta: {
      title: '音频',
    },
  },
  { // 404
    path: '*',
    name: 'NotFound404',
    component: () => import('../views/404/index.vue'),
    meta: {
      title: '页面不存在',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savePosition) {
    if (savePosition) {
      return savePosition;
    } else {
      return {
        x: 0, y: 0,
      };
    }
  },
});

/**
 * 导航守卫
 * 全局前置守卫，判断用户是否为登录状态
 */
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  if (to.matched.some((item) => item.meta.login)) {

    const userId = localStorage.getItem('user_id');
    if (userId) {
      next();
    } else {
      router.push({
        path: '/login',
        query: {
          redirect: to.path.slice(1),
        },
      });
    }

  }
  next();
});

export default router;
