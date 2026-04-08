import request from '@/utils/request'

export const getDetail = (data) => {
  return request({
    url: 'interview/show',
    params: data
  })
}

export const actions = (data) => {
  return request({
    url: 'interview/opt',
    method: 'POST',
    data
  })
}
