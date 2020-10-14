import api from './index'
// axios
import request from '@/utils/request'

// 获取球员信息
export function games() {
    return request({
        url: api.Games,
        method: 'get',
    })
}