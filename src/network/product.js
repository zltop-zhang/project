import {request} from './request.js'
//详情页数据
export function getProduct(){
  return request({
    url:'/product/',
  })
}