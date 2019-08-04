const Router = require('koa-router');
import API from './utils/api';

let router = new Router({prefix: '/play'});

router.get('/video', async (ctx) => {
    const { access_key, id, udid, uid } = ctx.query;
    try {
        let { status, data: { retcode, bitrates } } = await API.playVideoApi({
            access_key, id, udid, uid
        });
    
        if(status == 200) {
            ctx.body = {
                bitrates,
                retcode
            }
        }
    } catch (error) {
        ctx.body = {
            bitrates: [],
            retcode: -1
        }
    }
})



module.exports = router;