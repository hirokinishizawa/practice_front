export default {
    getMe(app) {
      return app.$axios.$get('/api/me')
    },
  }
