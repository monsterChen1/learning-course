import request from '@/utils/request'

export const register = (data) => {
  return request({
    url: 'user/register',
    method: 'post',
    data
  })
}

export const login = (data) => {
  return request({
    url: 'user/login',
    method: 'post',
    data
  })
}

export const getCurrent = () => {
  return request({
    url: '/user/currentUser'
  })
}
