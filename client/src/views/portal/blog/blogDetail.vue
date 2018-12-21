<template>
  <section class="container-bg">
      <div class="container">
        <div class="blog-detail">
          <p>{{ blogTitle }}</p>
          <p>蛐蛐 于 <span>{{ publishDate | parseTime }}</span> 发布 </p>
          <div v-html="blogContent">
            随着近年来互联网发展，尤其是在各种云服务如雨后春笋般的冒尖之后，数据安全、个人隐私被人们愈发重视起来。大家已经习惯了将照片、视频等文件上传到类似iCloud，OneDrive等云同步空间中，因此，我们无法保证这些服务提供商一定能遵守行规来保护你的个人数据安全，前几年出现的百度云盘文件内容篡改就已经说明了这些潜在问题。那么，既然无法得到他人保证，至少我们可以保证自己不受此类风险困扰。作为一个IT，自然会对这些因素更加敏感，就稍微开始了解文件的加密。
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return{
      blogTitle: '',
      publishDate: '',
      blogContent: ''
    }
  },
  created() {
    axios.get('/api/article' , { params: this.$route.params }).then(res => {
      this.blogTitle = res.data.title
      this.publishDate = res.data.date
      this.blogContent = res.data.content
    })
  }
}
</script>


<style lang="scss" scoped>
section{
  background: url('../../../image/second-bg.png') no-repeat;
  background-size: cover;
  .container{
    padding-bottom: 30px;
  }
  .blog-detail{
    background: #fff;
    padding: 40px;
    color: #818181;
    min-height: 70vh;
    p{
      text-align: center;
      margin: 15px 0;
      &:first-child{
        font-size: 22px;
        color: #000;
      }
      &:nth-child(2){
        font-size: 14px;
        border-bottom: 1px solid #000;
        padding-bottom: 20px;
      }
    }
    div{
      line-height: 24px;
      padding: 10px 20px 20px 20px;
      font-size: 15px;
      color: rgba(19, 18, 18, 0.8);
    }
  }
}
</style>
