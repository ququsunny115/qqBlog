<template>
  <div>
    <left-nav></left-nav>
    <section class="container-bg">
      <div class="container">
        
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
}
</style>