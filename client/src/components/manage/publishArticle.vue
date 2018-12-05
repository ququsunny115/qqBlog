<template>
  <div>
    <el-form>
      <el-form-item label="标题">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="上传图片">
        <el-upload list-type="picture-card">
          <i class="el-icon-plus"></i>
        </el-upload>
      </el-form-item>
    </el-form>
    <el-button type="primary">提交</el-button>
  </div>
</template>
