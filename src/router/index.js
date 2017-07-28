import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

const Hello = _import('Hello')
const Login = _import('login/login');
const layout = _import('layout/layout');
const Err404 = _import('404/404');

Vue.use(Router)
export const constantRouterMap = [
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    component: Login
  },
  {
    path: '/',
    name: 'index',
    component: layout,
    redirect: '/hello',
    hidden: true,
    children: [{ path: 'hello', component: Hello }]
  },
  { path: '/404',
    component: Err404,
    hidden: true,
    name: 404
  }
];
export const asyncRouterMap = [
  {
    path: '/hello2',
    name: 'Hello',
    component: layout,
    meta: { role: ['a'] },
    children: [{ path: 'hello', component: Hello, name: 'hello' },
      { path: 'hello2', component: Hello, name: 'hello2' }]
  },
  { path: '*', redirect: '/404', hidden: true }
];

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
