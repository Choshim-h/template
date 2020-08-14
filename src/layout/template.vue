<template>
<el-container>
  <el-aside width="200px">
      <nav-bar />
  </el-aside>
  <el-main>Main</el-main>
</el-container>
  
</template>

<script>
import navBar from '@/components/navBar'

export default {
    components: {
        navBar
    }
};
</script>

