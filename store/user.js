import api from '~/api/user'

export const state = {
  user: null
}

export const getters = {
  user(state) {
    return state.user
  }
}

export const actions = {
  async fetch({ commit }) {
    const user = await api.getMe(this)
    commit('set', user)
  }
}

export const mutations = {
  set(state, user) {
    state.user = user
  },
  remove(state) {
    state.user = null
  }
}
