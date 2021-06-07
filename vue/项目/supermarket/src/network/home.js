import { request } from './request'
import {homeDataURL, homeCateURL} from './baseURL'

export function getHomeMutilData() {
    return request({
        url: homeDataURL
    })
}

export function getHomeGoods(type, page) {
    const params = {
        page
    }
    params[type] = 1

    return request({
        url: homeCateURL,
        params
    })
}