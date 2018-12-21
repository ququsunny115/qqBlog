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
      <el-table-column align="center" label="时间" prop="date">
        <template slot-scope="scope">
          <span>{{ scope.row.date | parseTime }}</span>
        </template>
      </el-table-column>
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
    <!-- 编辑  -->
    <el-dialog :visible.sync="blogVisible" title="编辑博客">
      <div style="padding: 0 30px 20px">
        <el-form :model="articleForm">
          <el-form-item label="标题" prop="title">
            <el-input v-model="articleForm.title"></el-input>
          </el-form-item>
          <el-form-item label="内容" prop="content">
            <div style="margin-top:40px">
              <tinymce ref="richText" v-model="articleForm.content" @on-upload-complete="onEditorUploadComplete"></tinymce>
            </div>
          </el-form-item>
          <el-form-item label="上传图片" prop="pic">
            <div style="margin-top:40px">
              <el-upload  list-type="picture-card"
                          name="file"
                          action="/api/uploadFile"
                          :headers="headers"
                          :limit="1"
                          :on-success="uploadSuccess"
                          :file-list="imgFile">
                <i class="el-icon-plus"></i>
            </el-upload>
            </div>
          </el-form-item>
        </el-form>
      </div>
      <div style="text-align:right">
        <el-button type="primary" @click="handleSubmit">提交</el-button>
        <el-button type="primary" plain @click="blogVisible = false">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'
import tinymce from '@/components/Tinymce'
window.tinymce.baseURL = '/static/tinymce'
export default {
  components: { tinymce },
  data() {
    return {
      blogVisible: false,
      articleForm: {
        title: '',
        content: '',
        pic: ''
      },
      blogId: '',
      imgFile: [],
      headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
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
      this.blogVisible = true
      axios.get('/api/article' , { params: { id: id } }).then(res => {
        this.articleForm = {
          title: res.data.title,
          content: res.data.content,
          pic: res.data.pic
        }
        this.$refs.richText.setContent(res.data.content)
        this.blogId = res.data._id
        this.imgFile = [{ uid: res.data.pic, url: 'http://192.168.2.145:3000/' + res.data.pic }]
      })
    },
    onEditorUploadComplete(res) {
      if (res.code == 0) {
        this.$message({
          type: 'success',
          message: '上传成功'
        })
      } else {
        this.$message({
          type: 'error',
          message: res.msg
        })
      }
    },
    uploadSuccess(res) {
      this.articleForm.pic = res
    },
    handleDel(id) {
      this.$confirm('确定删除该信息吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        axios.delete('/api/article/delete/' + id).then(res => {
          this.fetchData()
        })
      })
    },
    handleSubmit() {
      axios.put('/api/article/update/' + this.blogId, this.articleForm).then(res => {
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

