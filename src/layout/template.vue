<template>
  <!-- 左右结构 -->
  <el-container>
    <!-- 左侧导航栏区域 -->
    <el-aside width="200px">
      <left-bar/>
    </el-aside>
    <!-- end -->
    <!-- 主要内容区域 -->
    <el-main>
      <my-head/>
      <router-view />
    </el-main>
    <!-- end -->
  </el-container>
</template>

<script>
import leftBar from "@/components/navBar.vue";
import myHead from "@/components/headerBar.vue";

export default {
  components: {
    leftBar,
    myHead
  }
};
</script>

<style lang="scss">
#app,
.el-container,
.el-aside {
  height: 100%;
}
.el-aside {
  overflow-x: hidden !important;
}
a{
  color: #BFCBD9;
  text-decoration: none;
}
</style>

