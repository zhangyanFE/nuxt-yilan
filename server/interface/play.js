/* eslint-disable no-console */
/* eslint-disable eqeqeq */
/* eslint-disable camelcase */
import API from './utils/api'
const Router = require('koa-router')

const router = new Router({ prefix: '/play' })

// 视频播放接口
router.get('/video', async (ctx) => {
  const { access_key, id, udid, uid } = ctx.query
  const params = {
    id,
    access_key,
    udid,
    uid
  }

  try {
    const { retcode, bitrates } = await API.playVideoApi(params)
    if (retcode == 200) {
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
  const { access_key, id, udid, uid } = ctx.query
  const params = {
    id,
    access_key,
    udid,
    uid
  }

  try {
    const { retcode, data } = await API.videoRecommendListApi(params)
    if (retcode == 200) {
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
  const { access_key, id, udid, uid } = ctx.query
  // console.log('广告接口===> ：\n', ctx.query);
  const params = {
    vid: id,
    access_key,
    udid,
    uid
  }

  try {
    const result = await API.openH5AdApi(params)
    const { retcode } = result
    if (retcode == 200) {
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
})

module.exports = router
