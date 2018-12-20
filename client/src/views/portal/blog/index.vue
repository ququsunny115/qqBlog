<template>
  <section class="container-bg">
      <div class="container">
        <!-- <img src="../../image/hero-img9.jpg" alt=""> -->
        <el-row>
          <el-col :span="6" v-for="item in articleList" :key="item._id">
            <img :src="'http://192.168.2.145:3000/'+item.pic" alt="">
            <p><span>{{ item.date }}</span></p>
            <router-link to="/index/blogDetail"><h3>{{ item.title }}</h3></router-link>
            <div v-html="item.content"></div>
          </el-col>
          <!-- <el-col :span="6">
            <img src="../../../image/blog-2.jpg" alt="">
            <p><span>2015/09/01</span></p>
            <a href=""><h3>第一篇</h3></a>
            <p>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试...</p>
          </el-col> -->
        </el-row>
        <el-pagination  @size-change="handleSizeChange"
                      @current-change="handleCurrentChange"
                      :current-page="currentPage"
                      :page-sizes="[15, 30 , 50]"
                      :page-size="limit"
                      background
                      layout="total, prev, pager, next"
                      :total="total">
      </el-pagination>
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
        length: 15
      },
      articleList: [],
      total: null,
      currentPage: 1,
      limit: 15
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      axios.get('/api/article/page', { params: this.articlesQuery }).then(res => {
        this.articleList = res.data.list
        this.total = res.data.totalRows
        this.currentPage = res.data.currentPage
        this.limit = res.data.limit
      })
    },
    handleSizeChange(val) {
      this.limit = val
      this.articlesQuery.length = val
      this.fetchData()
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.articlesQuery.start = val - 1
      this.fetchData()
    }
  }
}
</script>


<style lang="scss" scoped>
section{
  background: url('../../../image/second-bg.png') no-repeat;
  background-size: cover;
  .el-col{
    background: #fff;
    color: #818181;
    padding: 30px 20px !important;
    text-align: center;
    border: 1px solid rgba(129, 129, 129, 0.1);
    margin: 10px;
    width: 23.24%;
    transition: all 0.6s;
    &:hover{
      box-shadow: 0 0 0 4px rgba(177, 170, 170, 0.7);
    }
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
      transition: all 0.6s;
      &:hover{
        transform: scale(1.1);
      }
    }
    a{
      color: #2f2f2f;
    }
    div:last-child{
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