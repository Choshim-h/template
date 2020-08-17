<template>
<el-container>
  <el-aside width="200px">
      <my-head />
  </el-aside>
  <el-main>Main</el-main>
</el-container>
  
</template>

<script>
import myHead from '@/components/headerBar'

export default {
    components: {
        myHead
    }
};
</script>

