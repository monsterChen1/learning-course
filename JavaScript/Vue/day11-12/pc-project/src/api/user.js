import axios from '@/utils/request'

export const login = (data) => {
  return axios({
    url: '/auth/login',
    method: 'POST',
    data
  })
}

export const getInfo = () => {
  return axios({
    url: '/auth/currentUser',
    method: 'GET'
  })
}
