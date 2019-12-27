import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'iview/dist/styles/iview.css';  // 导入iview样式
import './assets/styles/common.scss';
import './assets/fonts/iconfont.css';
import '@/api/axiosConfig';

// 声明全局axios
// Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

// 全局过滤器
import * as filtration from '@/utils/filters';
Object.keys(filtration).forEach((key) => {
  Vue.filter(key, (filtration as any)[key]);
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
