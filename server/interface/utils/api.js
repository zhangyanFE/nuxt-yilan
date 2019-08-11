/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-06 13:38:57
 * @LastEditTime: 2019-08-10 00:04:20
 * @LastEditors: Please set LastEditors
 */
import Autograph from './autographPlat';
import request from './request';
import { getUdid } from '~/plugins/util';

const openapisUrl = 'https://openapis.yladm.com';

const API = {
    playVideoApi(data) {
        let req = data;
        const timestamp = new Date() * 1;
        const { access_key, id, udid, uid } = data;
        let signData = {
            access_key,
            id,
            timestamp,
            udid,
            uid,
        }
        let getsign = Autograph(signData);
        req.sign = getsign;
        req.timestamp = timestamp;
        req.udid = udid;
        req.uid = uid;
        return request(`${openapisUrl}/plat/play`, req, 'get')
    },
    videoRecommendListApi(data) {
        let req = data;
        const timestamp = new Date() * 1;
        const { access_key, id, udid, uid } = data;
        let signData = {
            access_key,
            timestamp,
            udid,
            uid,
            x_yl_h5: timestamp,
            id,
        }
        let getsign = Autograph(signData);
        req.sign = getsign;
        req.timestamp = timestamp;
        req.udid = udid;
        req.uid = uid;
        req.x_yl_h5 = timestamp;
        return request(`${openapisUrl}/plat/recommend`, req, 'get')
    },
    openH5AdApi(data) {
        let req = data;
        const timestamp = new Date() * 1;
        const { access_key, id: vid, udid, uid } = data;
        let signData = {
            access_key,
            timestamp,
            udid,
            uid,
            x_yl_h5: timestamp,
            sver: '2019-05-01',
            vid,
        }
        let getsign = Autograph(signData);
        req.sign = getsign;
        req.vid = vid;
        req.timestamp = timestamp;
        req.udid = udid;
        req.uid = uid;
        req.x_yl_h5 = timestamp;
        req.sver = '2019-05-01';
        return request(`${openapisUrl}/plat/h5ad`, req, 'get')
    },
    videoListApi(data) {
        let req = data;
        const timestamp = new Date() * 1;
        const { access_key } = data;
        let signData = {
            access_key,
            timestamp,
            udid: '111',
            x_yl_h5: timestamp,
        }
        let getsign = Autograph(signData);
        req.sign = getsign;
        req.timestamp = timestamp;
        req.x_yl_h5 = timestamp;
        req.platform = 'h5';
        req.prid = '13';
        req.udid = '111';

        return request(`https://openapiv2.yladm.com/plat/ugcfeed`, req, 'get')
    },
}

export default API;