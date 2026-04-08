import request from '@/utils/request'

export const getArticleList = (data) => {
  // current: 当前页码
  // sorter: 排序方式
  return request({
    url: 'interview/query',
    params: data
  })
}

export const getOptList = (data) => {
  return request({
    url: '/interview/opt/list',
    params: data
  })
}
