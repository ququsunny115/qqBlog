<template>
  <div class="nav">
    <ul>
      <li class="avatar">
        <div>
          <img src="../../../image/10.jpg" alt="">
          <p><span @click="login">蛐蛐blog</span></p>
        </div>
      </li>
      <li title="首页">
        <router-link to="/index/home"><img src="../../../image/home-icon.png" alt=""></router-link>
      </li>
      <li title="博客">
        <router-link to="/index/blog"><img src="../../../image/projects-icon.png" alt=""></router-link>
      </li>
      <li title="关于我">
        <router-link to="/index/aboutMe"><img src="../../../image/about-icon.png" alt=""></router-link>
      </li>
      <li title="联系我">
        <router-link to="/index/contactMe"><img src="../../../image/contact-icon.png" alt=""></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    login() {
      if (localStorage.getItem('token')) {
        this.$router.push({name: 'allArticles'})
      } else {
        this.$router.push({name: 'login'})
      }
    }
  }
}
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
  background: #3e4e62;
  width: 100px;
  height: 100vh;
  z-index: 2;
  .avatar{
    display: flex;
    justify-content: center;
    align-items: center;
    div{
      text-align: center;
      img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      p{
        color: rgb(230, 220, 220);
        margin-top: 10px;
        font-size: 13px;
        cursor: pointer;
      }
    }
  }
  li{
    flex: 1;
    a{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
    }
  }
}
}
</style>
