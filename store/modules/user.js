const namespaced = true

const state = {
  user: null
}

const getters = {
  user(state) {
    return state.user
  }
}

const actions = {
  async fetch({ commit }) {
    const user = await this.$axios.get('/api/me')
    commit('set', user)
  }
}

const mutations = {
  set(state, user) {
    state.user = user
  },
  remove(state) {
    state.user = null
  }
}

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
}
