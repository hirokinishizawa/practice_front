import { setAuthData, unsetAuthData, parseJWToken } from '~/utils/auth'
import api from '~/api/auth'

export const state = {
  accessToken: null
}

export const getters = {
  accessToken: state => {
    return state.accessToken
  },
  authorization: state => {
    return { Authorization: 'Bearer ' + state.accessToken }
  }
}

export const actions = {
  async fetchAccessToken({ commit }, form) {
    try {
      const authData = await api.login(this, form)
      commit('addToken', authData)
      setAuthData(authData)
    } catch (e) {
      throw new Error('Request failed.')
    }
  },
  async refreshAccessToken({ commit }) {
    try {
      const authData = await api.refresh(this)
      commit('addToken', authData)
      setAuthData(authData)
    } catch (e) {
      unsetAuthData()
      throw e
    }
  },
  async hasTokenExpired({ state }) {
    const { exp } = parseJWToken(state.accessToken)
    return exp <= Math.floor(Date.now() / 1000)
  }
}

export const mutations = {
  addToken(state, data) {
    state.accessToken = data.token
  },
  removeToken(state) {
    state.accessToken = null
  }
}
