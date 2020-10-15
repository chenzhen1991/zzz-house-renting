import api from './index'
// axios
import request from '@/utils/request'

// 获取球员列表信息
export function players() {
  return request({
    url: api.Players,
    method: 'get',
  })
}
// 获取球员详细信息
export function playerDetail(id) {
  return request({
    url: api.PlayerDetail+"?playerId=" + id,
    method: 'get',
  })
}
