<template>
  <div>
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
    <div style="text-align:right;margin-top: 20px">
      <el-pagination  @size-change="handleSizeChange"
                      @current-change="handleCurrentChange"
                      :current-page="currentPage"
                      :page-sizes="[15, 30 , 50]"
                      :page-size="limit"
                      background
                      layout="total, sizes, prev, pager, next, jumper"
                      :total="total">
      </el-pagination>
    </div>
  </div>
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
    handleEdit(id) {
      axios.put('/api/article/update/' + id).then(res => {
        this.fetchData()
      })
    },
    handleDel(id) {
      axios.delete('/api/article/delete/' + id).then(res => {
        this.fetchData()
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

