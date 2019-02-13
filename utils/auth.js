export const setAuthData = authData => {
  if (process.server) return
  if (authData.token) {
    window.localStorage.setItem('accessToken', authData.token)
  } else {
    console.error('Failed to save token.')
  }
}

export const unsetAuthData = () => {
  if (process.server) return
  window.localStorage.removeItem('accessToken')
  window.localStorage.setItem('logout', Date.now())
}

export const getAuthDataFromLocalStorage = () => {
  if (process.server) return
  return {
    accessToken: window.localStorage.getItem('accessToken')
  }
}

export const getAuthDataFromCookie = req => {
  if (!req.headers.cookie) return
  let cookie = {}
  req.headers.cookie.split(';').forEach(c => {
    const splitted = c.trim().split('=')
    cookie[splitted[0]] = splitted[1]
  })
  const { accessToken } = cookie
  return { accessToken }
}

export const parseJWToken = token => {
  if (!token) return {}
  let claim = token.split('.')[1]
  claim = claim.replace('-', '+').replace('_', '/')
  return JSON.parse(window.atob(claim))
}
