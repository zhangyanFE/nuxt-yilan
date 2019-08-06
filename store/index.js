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
        let { retcode, bitrates } = await API.playVideoApi(params);


        // 推荐接口
        let { retcode: retcode2, data } = await API.videoRecommendListApi(params);


        // 广告接口
        let result = await API.openH5AdApi(params);
        let { retcode: retcode3 } = result;

        if(retcode == 200 || retcode2 == 200 || retcode3 == 200) {
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
