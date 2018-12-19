<template>
  <div class="publish-content">
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
                      :on-success="uploadSuccess">
            <i class="el-icon-plus"></i>
        </el-upload>
        </div>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="handleSubmit">提交</el-button>
  </div>
</template>

<script>
// import axios from '../../axios'
import axios from 'axios'
import tinymce from '@/components/Tinymce'
window.tinymce.baseURL = '/static/tinymce' //需要调用tinymce的组件中得加入这，不然会报错
//this.$refs.richText.setContent//getContent 两个方法 获取与设置
export default {
  components: { tinymce },
  data() {
    return {
      content: '',
      articleForm: {
        title: '',
        content: '',
        pic: ''
      },
      headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
    }
  },
  methods: {
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
    set() {
      this.$refs.richText.setContent('设置内容')
    },
    get() {
      console.log(this.$refs.richText.getContent())
    },
    uploadSuccess(res) {
      this.articleForm.pic = res
    },
    handleSubmit() {
      axios.post('/api/publish/article', this.articleForm).then(res => {
        console.log(res)
        if (res.status === 200){
          this.$router.push({ name: 'allArticles' })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.publish-content{
  width: 70%;
  margin-left: 10%;
}
.el-upload{
  width: 100px !important;
  height: 100px !important;
  line-height: 100px !important;
}
.el-button{
  width: 100px;
  background: #3e4e62;
  border: none;
}
</style>
