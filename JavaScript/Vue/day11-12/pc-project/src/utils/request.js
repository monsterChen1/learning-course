import axios from 'axios'
import store from '@/store'
import router from '@/router'
import { Message } from 'element-ui'

const request = axios.create({
  baseURL: 'http://interview-api-t.itheima.net/',
  timeout: 5000
})

// 请求拦截器
request.interceptors.request.use(function (config) {
  const { token } = store.state.user
  if (token) {
    config.headers.Authorization = token
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(function (response) {
  return response.data
}, function (error) {
  const { response } = error
  if (response.data.code === 401) {
    store.commit('user/removeToken')
    router.push({ path: '/login' })
  } else {
    Message({
      type: 'error',
      message: response.data.message || '请求失败',
      showClose: true
    })
  }
  return error
})

export default request
