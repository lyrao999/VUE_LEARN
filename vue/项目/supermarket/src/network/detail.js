import { request } from 'network/request'
import { detailURL } from 'network/baseURL'

export function getGoodsDetail(id) {
    return request({
        url: detailURL + '/' + id
    })
}