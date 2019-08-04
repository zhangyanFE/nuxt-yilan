const state = () => ({
  list: [],
  recommendList: [],
})

const mutations = {
  setList(state, val) {
    state.list = val;
  },
  setRecommendList(state, val) {
    state.recommendList = val;
  }
}

const actions = {
  setList: ({ commit }, list) => {
    commit('setList', list);
  },
  setRecommendList: ({ commit }, recommendList) => {
    commit('setRecommendList', recommendList);
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
