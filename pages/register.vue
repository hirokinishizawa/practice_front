<template>
  <div class="register">
    <el-card class="box-card">
      <el-form
        ref="form"
        :model="formData"
        label-width="120px">
        <el-form-item label="お名前:">
          <el-input v-model="formData.name"/>
        </el-form-item>
        <el-form-item label="メールアドレス:">
          <el-input v-model="formData.email"/>
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
            :disabled="isBusy">登録する</el-button>
        </div>
      </el-form>
      <div class="already">
        すでにアカウントをお持ちの方は
        <nuxt-link :to="{name: 'login'}">こちら</nuxt-link>
      </div>
    </el-card>
  </div>
</template>

<script>
import authApi from '@/api/auth'

export default {
  layout: 'default',
  middleware: ['anonymous'],

  data() {
    return {
      formData: {
        name: '',
        email: '',
        password: ''
      },
      isBusy: false
    }
  },
  methods: {
    async onSubmit() {
      this.isBusy = true
      try {
        await authApi.register(this, this.formData)
        this.$router.push({ name: 'login' })
      } catch(err) {
          this.isBusy = false
          console.error(err)
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.register {
  width: 100%;
}

.box-card {
  width: 480px;
  margin: 0 auto;
}

 .submit {
  text-align: center;
  margin-bottom: 16px;
}

.register {
  text-align: center;
}

</style>
