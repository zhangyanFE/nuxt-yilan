const Router = require('koa-router');
// import API from './utils/api';
const API = require('./utils/api');

let router = new Router({prefix: '/play'});

// 视频播放接口
router.get('/video', async (ctx) => {
    const { access_key, id, udid, uid } = ctx.query;
    let params = {
        id,
        access_key,
        udid,
        uid
    }

    try {
        let { retcode, bitrates } = await API.playVideoApi(params);
        if(retcode == 200) {
            ctx.body = {
                bitrates,
                retcode
            }
        }
    } catch (error) {
        console.log(error)
        ctx.body = {
            bitrates: [],
            retcode: -1
        }
    }
})

// 推荐列表接口
router.get('/recommendlist', async (ctx) => {
    const { access_key, id, udid, uid } = ctx.query;
    let params = {
        id,
        access_key,
        udid,
        uid
    }

    try {
        let { retcode, data } = await API.videoRecommendListApi(params);
        if(retcode == 200) {
            ctx.body = {
                data,
                retcode
            }
        }
    } catch (error) {
        console.log(error)
        ctx.body = {
            data: [],
            retcode: -1
        }
    }
})

// 广告接口
router.get('/h5ad', async (ctx) => {
    const { access_key, id, udid, uid } = ctx.query;
    // console.log('广告接口===> ：\n', ctx.query);
    let params = {
        vid: id,
        access_key,
        udid,
        uid
    }

    try {
        let result = await API.openH5AdApi(params);
        let { retcode } = result;
        if(retcode == 200) {
            ctx.body = {
                result,
                retcode
            }
        }
    } catch (error) {
        console.log(error)
        ctx.body = {
            result: {},
            retcode: -1
        }
    }
});



module.exports = router;