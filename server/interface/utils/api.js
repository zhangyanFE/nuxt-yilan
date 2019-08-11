/* eslint-disable camelcase */
import Autograph from './autographPlat'
import request from './request'
// import { getUdid } from '~/plugins/util.server';

const openapisUrl = 'https://openapis.yladm.com'

const API = {
  playVideoApi(data) {
    const req = data
    const timestamp = new Date() * 1
    const { access_key, id, udid, uid } = data
    const signData = {
      access_key,
      id,
      timestamp,
      udid,
      uid
    }
    const getsign = Autograph(signData)
    req.sign = getsign
    req.timestamp = timestamp
    req.udid = udid
    req.uid = uid
    return request(`${openapisUrl}/plat/play`, req, 'get')
  },
  videoRecommendListApi(data) {
    const req = data
    const timestamp = new Date() * 1
    const { access_key, id, udid, uid } = data
    const signData = {
      access_key,
      timestamp,
      udid,
      uid,
      x_yl_h5: timestamp,
      id
    }
    const getsign = Autograph(signData)
    req.sign = getsign
    req.timestamp = timestamp
    req.udid = udid
    req.uid = uid
    req.x_yl_h5 = timestamp
    return request(`${openapisUrl}/plat/recommend`, req, 'get')
  },
  openH5AdApi(data) {
    const req = data
    const timestamp = new Date() * 1
    const { access_key, id: vid, udid, uid } = data
    const signData = {
      access_key,
      timestamp,
      udid,
      uid,
      x_yl_h5: timestamp,
      sver: '2019-05-01',
      vid
    }
    const getsign = Autograph(signData)
    req.sign = getsign
    req.vid = vid
    req.timestamp = timestamp
    req.udid = udid
    req.uid = uid
    req.x_yl_h5 = timestamp
    req.sver = '2019-05-01'
    return request(`${openapisUrl}/plat/h5ad`, req, 'get')
  },
  videoListApi(data) {
    const req = data
    const timestamp = new Date() * 1
    const { access_key } = data
    const signData = {
      access_key,
      timestamp,
      udid: '111',
      x_yl_h5: timestamp
    }
    const getsign = Autograph(signData)
    req.sign = getsign
    req.timestamp = timestamp
    req.x_yl_h5 = timestamp
    req.platform = 'h5'
    req.prid = '13'
    req.udid = '111'

    return request(`https://openapiv2.yladm.com/plat/ugcfeed`, req, 'get')
  }
}

export default API
