<template>
  <div>
    <div>
      <i class="iconfont icon-home"></i>
    </div>
    <div>
      <el-row>
        <el-col :span="2" style="border:1px solid #ccc">
          <div>
            <router-link to="/manage/allArticles">全部文章</router-link>
          </div>
          <div>
            <router-link to="/manage/publish">发表文章</router-link>
          </div>
        </el-col>
        <el-col :span="22">
          <router-view></router-view>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
