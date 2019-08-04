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
        const {
          status,
          data: {
            
          }
        } = await app.$axios.get('/play/video', {
          age: '2000'
        })
        // commit('geo/setPosition',status===200?{city,province}:{city:'',province:''})
        // const {status:status2,data:{menu}}=await app.$axios.get('geo/menu')
        // commit('home/setMenu',status2===200?menu:[])
        // const {status:status3,data:{result}}=await app.$axios.get('/search/hotPlace',{
        //   params:{
        //     city:app.store.state.geo.position.city.replace('市','')
        //   }
        // })
        // commit('home/setHotPwlace',status3===200?result:[])
      }
    }
  })
  
  export default store