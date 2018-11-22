<template>
  <div>
    <left-nav></left-nav>
    <section class="container-bg">
      <div class="container">
        <div class="contact-me">
          <div>Contact Me</div>
          <div>
            <el-form label-width="80px">
              <el-form-item label="邮件主题">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="邮箱">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="内容">
                <el-input type="textarea"></el-input>
              </el-form-item>
            </el-form>
            <el-button>确认</el-button>
          </div>
        </div>
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
  background: url('../../image/fourth-bg.png') no-repeat;
  background-size: cover;
  .contact-me{
    background: #fff;
    padding: 40px;
    color: #818181;
    min-height: 70vh;
  }
}
</style>