<template>
  <div>
    <p>
      <router-link to="home">Welcome to my blog</router-link>
    </p>
  </div>
</template>

<style lang="scss">
div{
  background: url('../../image/header_bg.jpg') no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  p{
    color: #fff;
    font-size: 50px;
  }
}
</style>

