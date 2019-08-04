const state = () => ({
  list: []
})

const mutations = {
  setList(state, val) {
    state.list = val;
  }
}

const actions = {
  setList: ({ commit }, list) => {
    commit('setList', list);
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
