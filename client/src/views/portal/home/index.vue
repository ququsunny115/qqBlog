<template>
  <section class="container-bg">
      <div class="container">
        <div>
          <el-carousel height="550px">
            <el-carousel-item>
              <img src="../../../image/bg-02.jpg" alt="" height="550px" width="100%">
            </el-carousel-item>
            <el-carousel-item>
              <img src="../../../image/bg-01.jpg" alt="" height="550px" width="100%">
            </el-carousel-item>
            <el-carousel-item>
              <img src="../../../image/bg-05.jpg" alt="" height="550px" width="100%">
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="recent">最近更新</div>
        <el-row :gutter="20">
          <el-col :span="8" v-for="item in articleList" :key="item._id">
            <a>
              <img :src="'http://192.168.2.145:3000/'+item.pic" alt="">
            </a>
            <div class="title">
              <header><a href="">{{ item.title }}</a></header>
              <span>{{ item.date }}</span>
            </div>
            <div v-html="item.content"></div>
          </el-col>
          <!-- <el-col :span="8">
            <a>
              <img src="../../../image/home2.jpg" alt="">
            </a>
            <div class="title">
              <header><a href="">这是一个博客</a></header>
              <span>2018-10-10 10:10:10</span>
            </div>
            <p>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</p>
          </el-col>
          <el-col :span="8">
            <a>
              <img src="../../../image/home3.jpg" alt="">
            </a>
            <div class="title">
              <header><a href="">这是一个博客</a></header>
              <span>2018-10-10 10:10:10</span>
            </div>
            <p>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</p>
          </el-col> -->
        </el-row>
      </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      articlesQuery: {
        start: 0,
        length: 3
      },
      articleList: []
    }
  },
  created() {
    axios.get('/api/article/page', { params: this.articlesQuery }).then(res => {
        this.articleList = res.data.list
      })
  }
}
</script>


<style lang="scss" scoped>
$fontColor:rgb(230, 220, 220);
section{
  background: url('../../../image/first-bg.png') no-repeat;
  background-size: cover;
  .recent{
    font-family: mensch;
    color: $fontColor;
    text-shadow: 0px 2px 0 rgba(0, 0, 0, 0.3);
    text-align: center;
    margin: 40px auto;
    padding-bottom: 20px;
    border-bottom: 1px solid $fontColor;
    font-size: 20px;
  }
  .el-col{
    text-align: center;
    color: $fontColor;
    font-size: 16px;
    img{
      border: solid 2px #d1cfcf;
      width: 352px;
      height: 271px;
    }
    .title{
      overflow: hidden;
      header{
        margin: 10px auto;
        a{
          color: $fontColor;
          &:hover{
            color: #fff;
          }
        }
      }
      span{
        float: right;
        font-size: 12px;
        margin-right: 6px;
      }
    }
    div:last-child{
      text-align: left;
      font-size: 13px;
      margin-top: 5px;
      overflow: hidden;
    }
  }
}
</style>
