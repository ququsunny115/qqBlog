<template>
  <div>
    <el-form>
      <el-form-item label="标题">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <tinymce ref="richText" v-model="content" @on-upload-complete="onEditorUploadComplete"></tinymce>
      </el-form-item>
      <el-form-item label="上传图片">
        <el-upload list-type="picture-card"
                   action="">
          <i class="el-icon-plus"></i>
        </el-upload>
      </el-form-item>
    </el-form>
    <el-button type="primary">提交</el-button>
  </div>
</template>

<script>
import tinymce from '@/components/Tinymce'
window.tinymce.baseURL = '/static/tinymce' //需要调用tinymce的组件中得加入这，不然会报错
//this.$refs.richText.setContent//getContent 两个方法 获取与设置
export default {
  components: { tinymce },
  data() {
    return {
      content: ''
    }
  },
  watch: {

  },
  computed: {
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
  },
  created() {

  },
  mounted() {

  }
}
</script>
