<template>
  <div class="container">
    <div class="login">
      <div class="welcome">欢迎登录</div>
      <el-form :model="loginForm" ref="loginForm" :rules="formRules">
        <el-form-item prop="name">
          <el-input placeholder="账户" v-model="loginForm.name" maxlength="10"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input placeholder="密码" type="password" v-model="loginForm.password" maxlength="10"></el-input>
        </el-form-item>
      </el-form>
      <el-button @click="submitLogin('loginForm')">登录</el-button>
      <router-link to="/index/home"><el-button>返回</el-button></router-link> 
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      loginForm: {  
        name: '',
        password: ''
      },
      formRules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    ...mapMutations(['SET_USERS']),
    submitLogin(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          axios.post('/api/login', this.loginForm).then(res => {
            this.SET_USERS(res.data)
            this.$router.push({ name: 'allArticles' })
          }).catch(err => {
            console.log(err)
          })
        }
      })
    }
  }
}
</script>


<style lang="scss" scoped>
div.container{
  background: url('../../image/hero-img9.jpg') no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  div.login{
    background: #eee;
    width: 550px;
    box-sizing: border-box;
    padding: 50px 80px;
    text-align: center;
    border-radius: 5px;
    div.welcome{
      text-align: center;
      margin-bottom: 40px;
      color: #000;
      font-size: 22px;
    }
    .el-button{
      margin-top: 25px;
      color: #444;
      background: #fff;
      font-size: 16px;
      border: 1px solid #fff;
      border-radius: 20px;
      padding: 10px 35px;
      margin-right: 20px;
      transition: all 0.4s ease-in-out;
      &:hover{
        background: rgb(188, 194, 211);
        color: #fff;
      }
    }
  }
}
</style>
