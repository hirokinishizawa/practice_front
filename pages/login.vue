<template>
  <div class="login">
    <el-card class="box-card">
      <el-form
        ref="form"
        :model="formData"
        label-width="120px">
        <el-form-item label="メールアドレス:">
          <el-input v-model="formData.email"/>
          <p
            v-if="hasError"
            class="error">アカウントまたはパスワードが間違っています。</p>
        </el-form-item>
        <el-form-item
          label="パスワード:" >
          <el-input
            v-model="formData.password"
            type="password"/>
        </el-form-item>
        <div class="submit">
          <el-button
            type="primary"
            @click="onSubmit"
            :disabled="isBusy">ログイン</el-button>
        </div>
      </el-form>
      <div class="register">
        アカウント登録される方は
        <nuxt-link :to="{name: 'register'}">こちら</nuxt-link>
      </div>
    </el-card>
  </div>
</template>

<script>
import authApi from '@/api/auth'

export default {
  layout: 'default',
  middleware: ['anonymous'],
  asyncData({ query }) {
    return {
      next: query.next ? decodeURIComponent(query.next) : null
    }
  },
  data() {
    return {
      formData: {
        email: '',
        password: ''
      },
      isBusy: false,
      hasError: false
    }
  },
  methods: {
    validatePath(path) {
      return /^\/.+$/.test(path)
    },
    async onSubmit() {
      if (this.isBusy) {
        return
      }
      this.hasError = false
      this.isBusy = true
      try {
        await this.$store.dispatch('auth/fetchAccessToken', this.formData)
        const to = this.validatePath(this.next) ? this.next : '/'
        this.$router.push(to)
      } catch (error) {
        console.error(error)
        this.hasError = true
      } finally {
        this.isBusy = false
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.login {
  width: 100%;
}

.box-card {
  width: 480px;
  margin: 0 auto;
}

.submit{
  text-align: center;
  margin-bottom: 16px;
}

.register {
  text-align: center;
}

.error {
  margin: 0.5rem 0 0;
  color: #dc3339;
  letter-spacing: 0;
  font-size: 12px;
  font-weight: normal;
  line-height: 1;
}
</style>
