import {
  getAuthDataFromCookie,
  getAuthDataFromLocalStorage
} from '~/utils/auth'

export default function({ store, req }) {
  const isServer = process.server
  if (isServer && !req) return
  const authData = isServer
    ? getAuthDataFromCookie(req)
    : getAuthDataFromLocalStorage()
  if (authData) {
    store.commit('auth/addToken', {
      token: authData.accessToken
    })
  }
}
