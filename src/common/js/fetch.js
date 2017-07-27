/**
 * Created by shaojunyan on 2017-7-26.
 */
import axios from 'axios'
import store from 'store'
import { Message, MessageBox } from 'element-ui'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000                  // 请求超时时间
})
//  添加一个请求拦截器
service.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers['X-Token'] = store.getters.token; // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  return config;
}, error => {
  console.log('err' + error)
  return Promise.reject(error)
})

//  添加一个响应拦截器
service.interceptors.response.use(response => {
  const res = response.data
  if (res.code === 14 || res.code === 12) {
    // 14 token 过期,12 其他用户登录
    MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
      confirmButtonText: '重新登录',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      store.dispatch('FedLogOut').then(() => {
        location.reload()// 为了重新实例化vue-router对象 避免bug
      })
    })
    return Promise.reject()
  } else if (res.code !== 0) {
    Message({
      message: res.data,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject()
  } else {
    return response
  }
}, error => {
  console.log('err' + error)
  Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(error)
})

export default service
