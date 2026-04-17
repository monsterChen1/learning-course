import axios from '@/utils/request'

export const getArticleList = (data) => {
  return axios({
    url: '/admin/interview/query',
    method: 'GET',
    params: data
  })
}

export const addArticle = (data) => {
  return axios({
    url: '/admin/interview/create',
    method: 'POST',
    data
  })
}

export const updateArticle = (data) => {
  return axios({
    url: '/admin/interview/update',
    method: 'PUT',
    data
  })
}

export const getArticle = (id) => {
  return axios({
    url: '/admin/interview/show',
    method: 'GET',
    params: { id }
  })
}

export const delArticle = (id) => {
  return axios({
    url: '/admin/interview/remove',
    method: 'DELETE',
    data: { id }
  })
}
