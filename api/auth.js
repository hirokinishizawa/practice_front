export default {
  login(app, data) {
    return app.$axios.$post('/api/login', data)
  },
  refresh(app) {
    return app.$axios.$post('/api/refresh')
  },
  register(app, data) {
    return app.$axios.$post('/api/register', data)
  }
}
