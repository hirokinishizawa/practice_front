export default ({ store, redirect }) => {
  if (store.getters['auth/accessToken']) {
    return redirect('/')
  }
}
