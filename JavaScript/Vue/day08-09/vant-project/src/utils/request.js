import axios from 'axios'
import { Toast } from 'vant'
import router from '@/router'

const request = axios.create({
  baseURL: 'http://interview-api-t.itheima.net/h5/',
  timeout: 5000
})

request.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = token
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

request.interceptors.response.use(function (response) {
  return response.data
}, function (error) {
  if (error.response.data.code === 401) {
    localStorage.removeItem('token')
    router.push({ path: '/login' })
  } else {
    Toast.fail(error.response.data.message || '请求失败')
  }

  return Promise.reject(error)
})

export default request
