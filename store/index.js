import Vue from 'vue'
import Vuex from 'vuex'
import play from './modules/play'
import API from '~/server/interface/utils/api'
import Url from '~/plugins/url'
import {
  getUdid,
  getUid,
  getUrl
} from '~/plugins/util'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    play
  },
  actions: {
    async nuxtServerInit({
      commit
    }, {
      req,
      app
    }) {
      getUrl(req.url);
      const search = new Url(req.url);
      const accessKey = search.get('access_key');
      const videoId = search.get('id');
      let params = {
        id: videoId || 'W1M21GlZdydJ',
        access_key: accessKey || 'yluyh22n5kdq',
        udid: getUdid(),
        uid: getUid(),
      }

      try {
        // 播放接口
        const {
          status,
          data: {
            bitrates
          }
        } = await app.$axios.get('/play/video', {
          params
        })

        // 推荐接口
        const {
          status: status2,
          data: {
            data
          }
        } = await app.$axios.get('/play/recommendlist', {
          params
        })

        // 广告接口
        const {
          status: status3,
          data: {
            result
          }
        } = await app.$axios.get('/play/h5ad', {
          params
        })

        if (status == 200 || status2 == 200 || status3 == 200) {
          commit('play/setList', bitrates);
          commit('play/setRecommendList', data);
          commit('play/setAdInfo', result);
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
})

export default store
