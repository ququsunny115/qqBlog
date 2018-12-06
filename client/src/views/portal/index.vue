<template>
  <div>
    <left-nav></left-nav>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import LeftNav from './public/leftNav'
export default {
  components: { LeftNav }
}
</script>
