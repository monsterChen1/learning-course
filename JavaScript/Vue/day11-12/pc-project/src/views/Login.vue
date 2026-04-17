<template>
  <div class="login-page">
    <el-card class="el-card">
      <template #header>面经运营后台</template>
      <el-form autocemplete="off" :model="form" :rules="rules" ref="loginForm">
        <el-form-item label="用户名: " prop="username">
          <el-input placeholder="请输入用户名" v-model="form.username" />
        </el-form-item>
        <el-form-item label="密码: " prop="password">
          <el-input type="password" placeholder="请输入密码" v-model="form.password" />
        </el-form-item>
        <el-form-item class="tc">
          <el-button type="primary" @click="handleLogin('loginForm')" :loading="loading">登录</el-button>
          <el-button @click="handleCancel('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { login } from '@/api/user'

export default {
  name: 'login-page',
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: ['blur', 'change'] },
          { min: 5, max: 11, message: '长度必须在 5 - 11', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: ['blur', 'change'] },
          { pattern: /^\w{5,11}$/, message: '长度必须在 6 - 16', trigger: ['blur', 'change'] }
        ]
      },
      loading: false
    }
  },
  methods: {
    handleCancel (formName) {
      this.$refs[formName].resetFields()
    },
    handleLogin (formName) {
      this.$refs[formName].validate(async valid => {
        if (!valid) return false

        this.loading = true
        try {
          const { data } = await login(this.form)
          this.$store.commit('user/setToken', `Bearer ${data.token}`)
          localStorage.setItem('admin-token', `Bearer ${data.token}`)
          this.$router.push('/')
        } finally {
          this.loading = false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .el-card {
    width: 420px;
    ::v-deep .el-card__header {
      height: 80px;
      background: rgba(114, 124, 245, 1);
      text-align: center;
      line-height: 40px;
      color: #fff;
      font-size: 18px;
    }
  }
  .el-form {
    padding: 0 20px;
  }
  .tc {
    text-align: center;
  }
}
</style>
