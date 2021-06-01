import { request } from './request'
import baseURL from './baseURL'

export function getHomeMutilData() {
    return request({
        url: baseURL.homeData
    })
}

export function getHomeGoods(type, page) {
    const params = {
        page
    }
    params[type] = 1

    return request({
        url: baseURL.homeCate,
        params
    })
}