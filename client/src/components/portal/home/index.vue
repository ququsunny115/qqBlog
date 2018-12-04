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
          <el-col :span="8">
            <a>
              <img src="../../../image/home1.jpg" alt="">
            </a>
            <div class="title">
              <header><a href="">这是一个博客</a></header>
              <span>2018-10-10 10:10:10</span>
            </div>
            <p>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</p>
          </el-col>
          <el-col :span="8">
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
          </el-col>
        </el-row>
      </div>
    </section>
</template>

<script>
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
    p{
      text-align: left;
      font-size: 13px;
      margin-top: 5px;
    }
  }
}
</style>
