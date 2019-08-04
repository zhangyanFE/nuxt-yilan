import Vue from 'vue'
import Vuex from 'vuex'
import play from './modules/play'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    modules: {
        play
    },
    actions: {
      async nuxtServerInit({
        commit
      }, {req, app}) {
        let params = {
            id: 'r1yob6eOk5Lo',
            access_key: 'yluyh22n5kdq',
            udid: '41a0fa2489927292dd17aac2787ebd15',
            uid: '1',
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

          if(status === 200 || status2 === 200) {
            commit('play/setList', bitrates);
            commit('play/setRecommendList', data);
          }
        } catch (error) {
          console.log(error)
        }
      }
    }
  })
  
  export default store