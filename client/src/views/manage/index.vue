<template>
  <div>
    <div class="header">
      <span><i class="iconfont icon-home"></i><router-link to="/index/home">返回主页</router-link></span>
      <span>退出登录</span>
    </div>
    <div>
      <el-row>
        <el-col :span="2" class="side-nav">
          <div>
            <router-link to="/manage/allArticles">全部文章</router-link>
          </div>
          <div>
            <router-link to="/manage/publish">发表文章</router-link>
          </div>
        </el-col>
        <el-col :span="22" class="content-table">
          <router-view></router-view>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header{
  height: 5vh;
  line-height: 5vh;
  background: #3e4e62;
  padding: 0 20px;
  color: #fff;
  border-bottom: 2px solid #fff;
  i{
    margin-right: 10px;
  }
  span{
    cursor: pointer;
  }
  span:last-child{
    float: right;
  }
}
.side-nav{
  background: #3e4e62;
  min-height: 95vh;
  padding-top: 20px;
  border-right: 1px solid #ddd;
  text-align: center;
  line-height: 26px;
  font-size: 14px;
}
.content-table{
  padding: 30px;
}
</style>

