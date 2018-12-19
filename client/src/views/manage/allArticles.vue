<template>
  <el-table border :data="articleList">
    <el-table-column align="center" type="index" label="序号" width="50"></el-table-column>
    <el-table-column align="center" label="名称" prop="title"></el-table-column>
    <el-table-column align="center" label="状态" prop="">
      <template slot-scope="scope">
        <span>{{ scope.row.isPublished ? '是' : '否' }}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="时间" prop="date"></el-table-column>
    <el-table-column align="center" label="操作">
      <template slot-scope="scope">
        <el-button type="primary" plain size="mini" @click="handleEdit(scope.row._id)">编辑</el-button>
        <el-button type="danger" plain size="mini" @click="handleDel(scope.row._id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      articleList: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      axios.get('/api/article/page').then(res => {
        this.articleList = res.data
      })
    },
    handleEdit(id) {
      axios.put('/api/article/update/' + id).then(res => {
        this.fetchData()
      })
    },
    handleDel(id) {
      axios.delete('/api/article/delete/' + id).then(res => {
        this.fetchData()
      })
    }
  }
}
</script>

