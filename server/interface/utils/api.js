import Autograph from './autographPlat';
import request from './request';

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
    }
}

export default API;