<template>
  <div class="container">
    <div>
      <p>Welcome to my blog</p>
      <p><router-link to="/index/home">enter</router-link></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
div.container{
  background: url('../../../image/header_bg.jpg') no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  p{
    color: #fff;
    font-size: 62px;
    text-align: center;
    a{
      color: #444;
      background: #fff;
      font-size: 30px;
      border: 1px solid #fff;
      border-radius: 20px;
      padding: 5px 20px;
      transition: all 0.4s ease-in-out;
      &:hover{
        background: transparent;
        color: #fff;
      }
    }
  }
}
</style>

