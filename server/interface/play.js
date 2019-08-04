const Router = require('koa-router');
import API from './utils/api';

let router = new Router({prefix: '/play'});

router.get('/video', async (ctx) => {
    const { access_key, id, udid, uid } = ctx.query;
    console.log('===> 接口参数：\n', ctx.query);
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



module.exports = router;