<template>
  <div>
    <left-nav></left-nav>
    <section class="container-bg">
      <div class="container">
        <div class="about-me">
          <p>关于我</p>
          <div>
            <p class="title">个人简介</p>
            <div>
              非著名码农兼大忽悠，爱运动，喜欢养花。在这里，我会分享我在工作和生活中的感想，欢迎大家随时和我交流。
            </div>
            <p class="title">工作经历</p>
            <div>
              2014/07 - 2018/12  Web开发
            </div>
            <p class="title">个人技能</p>
            <div>
              <ul>
                <li>精通DIV+CSS页面布局，重构,掌握JavaScript，熟悉w3c标准，了解HTML语义化有一定的了解</li>
                <li>熟练运用浏览器兼容技术，熟练进行前端性能优化设计</li>
                <li>熟练掌握HTML5技术开发，熟悉响应式布局和弹性盒布局，百分比自适应布局，熟练掌握CSS3动画技术，且能熟练应用Animate.css动画库</li>
                <li>精通DIV+CSS页面布局，重构,掌握JavaScript，熟悉w3c标准，了解HTML语义化有一定的了解</li>
                <li>熟练运用浏览器兼容技术，熟练进行前端性能优化设计</li>
                <li>熟练掌握HTML5技术开发，熟悉响应式布局和弹性盒布局，百分比自适应布局，熟练掌握CSS3动画技术，且能熟练应用Animate.css动画库</li>
                <li>精通DIV+CSS页面布局，重构,掌握JavaScript，熟悉w3c标准，了解HTML语义化有一定的了解</li>
                <li>熟练运用浏览器兼容技术，熟练进行前端性能优化设计</li>
                <li>熟练掌握HTML5技术开发，熟悉响应式布局和弹性盒布局，百分比自适应布局，熟练掌握CSS3动画技术，且能熟练应用Animate.css动画库</li>
              </ul>
            </div>
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
  background: url('../../image/third-bg.png') no-repeat;
  background-size: cover;
  .about-me{
    background: #fff;
    padding: 40px;
    color: #818181;
    min-height: 70vh;
  }
}
</style>