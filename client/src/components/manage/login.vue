<template>
  <div class="container">
    <div class="login">
      <div class="welcome">欢迎登录</div>
      <el-form>
        <el-form-item>
          <el-input placeholder="账户"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="密码" type="password"></el-input>
        </el-form-item>
      </el-form>
      <el-button>登录</el-button>
      <router-link to="/index/home"><el-button>返回</el-button></router-link> 
    </div>
  </div>
</template>

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
