<template>
  <div class="nav">
    <ul>
      <li><a href=""><img src="../../image/home-icon.png" alt="首页"></a></li>
      <li><a href=""><img src="../../image/projects-icon.png" alt="博客"></a></li>
      <li><a href=""><img src="../../image/about-icon.png" alt="关于我"></a></li>
      <li><a href=""><img src="../../image/contact-icon.png" alt="联系我"></a></li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.nav{
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  ul{
  display: flex;
  flex-flow: column;
  list-style: none;
  background: #3e4e62;
  width: 100px;
  height: 100vh;
  z-index: 2;
  li{
    // position: relative;
    flex: 1;
    a{
      display: flex;
      justify-content: center;
      align-items: center;
      // position: absolute;
      height: 100%;
      width: 100%;
      // top: 0;
      // left: 0
    }
  }
}
}
</style>
