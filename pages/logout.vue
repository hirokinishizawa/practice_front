<template>
  <div/>
</template>

<script>
import { unsetAuthData } from '~/utils/auth'

export default {
  layout: 'default',
  head() {
    return {
      title: 'ログアウト'
    }
  },
  created() {
    unsetAuthData()
    this.$store.commit('auth/removeToken')
    this.$store.commit('user/remove')
    window.location.replace(this.$router.resolve({ name: 'login' }).href)
  }
}
</script>
