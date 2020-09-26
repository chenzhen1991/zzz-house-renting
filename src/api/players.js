import api from './index'
// axios
import request from '@/utils/request'

// 获取球员信息
export function players() {
  return request({
    url: api.Player,
    method: 'get',
  })
}
