<template>
   <section class="container-bg">
      <div class="container">
        <div class="contact-me">
          <div>
            <el-row>
              <el-col :span="12">
                <div>
                  <img src="../../../image/fullscreen08.jpg" alt="" width="530" height="300">
                </div>
                <div>
                  <img src="../../../image/fullscreen09.jpg" alt="" width="530" height="300">
                </div>
              </el-col>
              <el-col :span="12" style="text-align:center">
                <div class="title">Contact Me</div>
                <el-form label-width="80px">
                  <el-form-item>
                    <el-input placeholder="邮件主题"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-input placeholder="邮箱"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-input type="textarea" placeholder="内容" rows="10"></el-input>
                  </el-form-item>
                </el-form>
                <el-button>确认</el-button>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
</script>

<style lang="scss" scoped>
section{
  background: url('../../../image/fourth-bg.png') no-repeat;
  background-size: cover;
  .contact-me{
    background: #fff;
    padding: 40px;
    color: #818181;
    min-height: 50vh;
    text-align: center;
  }
  .el-col div:last-child{
    margin-top: 20px;
  }
  .el-row .el-col:last-child{
    padding: 60px 10px;
    div.title{
      font-size: 22px;
      margin-bottom: 20px;
    }
    .el-form-item{
      margin-left: -40px;
    }
    .el-button{
      border-radius: 15px;
      width: 100px;
      &:hover{
        background: #eee;
        color: #000;
        border: 1px solid #dcdfe6;
      }
    }
  }
}
</style>