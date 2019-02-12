export default {
    getMe(app) {
      return app.$axios.$post('/api/me')
    },
  }
