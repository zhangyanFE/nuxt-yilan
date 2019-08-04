const state = () => ({
  list: [],
  recommendList: [],
  adInfo: {},
})

const mutations = {
  setList(state, val) {
    state.list = val;
  },
  setRecommendList(state, val) {
    state.recommendList = val;
  },
  setAdInfo(state, val) {
    state.adInfo = val;
  }
}

const actions = {
  setList: ({ commit }, list) => {
    commit('setList', list);
  },
  setRecommendList: ({ commit }, recommendList) => {
    commit('setRecommendList', recommendList);
  },
  setAdInfo: ({ commit }, adInfo) => {
    commit('setAdInfo', adInfo);
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
