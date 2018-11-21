<template>
  <div>
    <left-nav></left-nav>
    <section class="container-bg">
      <div class="container">
        <!-- <img src="../../image/hero-img9.jpg" alt=""> -->
        <el-row>
          <el-col :span="8">
            <img src="../../image/blog-1.png" alt="">
            <p><span>2015/09/01</span></p>
            <a href=""><h3>第一篇</h3></a>
            <p>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试...</p>
          </el-col>
          <el-col :span="8">
            <img src="../../image/blog-2.jpg" alt="">
            <p><span>2015/09/01</span></p>
            <a href=""><h3>第一篇</h3></a>
            <p>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试...</p>
          </el-col>
          <el-col :span="8">
            <img src="../../image/blog-3.jpg" alt="">
            <p><span>2015/09/01</span></p>
            <a href=""><h3>第一篇</h3></a>
            <p>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试...</p>
          </el-col>
          <el-col :span="8">
            <img src="../../image/blog-4.jpg" alt="">
            <p><span>2015/09/01</span></p>
            <a href=""><h3>第一篇</h3></a>
            <p>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试...</p>
          </el-col>
          <el-col :span="8">
            <img src="../../image/blog-5.jpg" alt="">
            <p><span>2015/09/01</span></p>
            <a href=""><h3>第一篇</h3></a>
            <p>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试...</p>
          </el-col>
          <el-col :span="8">
            <img src="../../image/blog-6.jpg" alt="">
            <p><span>2015/09/01</span></p>
            <a href=""><h3>第一篇</h3></a>
            <p>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试...</p>
          </el-col>
        </el-row>
        <el-pagination background layout="total, prev, pager, next" :total="100"></el-pagination>
      </div>
    </section>
  </div>
</template>

<script>
import LeftNav from '../public/leftNav'
export default {
  components: { LeftNav }
}
</script>

<style lang="scss" scoped>
section{
  background: url('../../image/second-bg.png') no-repeat;
  background-size: cover;
  .el-col{
    background: #fff;
    color: #818181;
    padding: 30px 20px !important;
    text-align: center;
    border: 1px solid rgba(129, 129, 129, 0.1);
    margin: 10px;
    width: 31.6%;
    p{
      margin: 15px auto;
      span{
        display: inline-block;
        position: relative;
        &:before,&:after{
          content: "";
          margin-top: 11px;
          position: absolute;
          height: 5px;
          border-top: 1px solid #dedede;
          top: 0;
          width: 60%;
        }
        &:before{
          right: 100%;
          margin-right: 5px;
        }
        &:after{
          left: 100%;
          margin-left: 5px;
        }
      }
    }
    img{
      width: 133px;
      height: 133px;
      border-radius: 50%;
    }
    a{
      color: #2f2f2f;
    }
    p:last-child{
      text-align: left;
      font-size: 13px;
      line-height: 24px;
      height: 92px;
      overflow: hidden;
    }
  }
  .el-pagination{
    float: right;
    margin-top: 20px;
  }
}
</style>