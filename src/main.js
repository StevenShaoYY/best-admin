import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import NProgress from 'nprogress'

import 'element-ui/lib/theme-default/index.css'
import 'nprogress/nprogress.css'
import 'normalize.css/normalize.css'
import 'common/stylus/index.styl'

// const whiteList = ['/login'];
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

Vue.config.productionTip = false

Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
