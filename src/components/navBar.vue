<template>
  <div class="h-100">
    <el-row class="tac h-100">
      <el-col :span="12" class="h-100">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#304156"
          text-color="#BFCBD9"
          active-text-color="#ffd04b"
          :collapse="isCollapse"
        >
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">Dashboard</span>
          </el-menu-item>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>Example</span>
            </template>
            <el-menu-item index="2-1">Tree</el-menu-item>
            <el-menu-item index="2-2">Tree</el-menu-item>
          </el-submenu>

          <el-menu-item index="3">
            <i class="el-icon-menu"></i>
            <span slot="title">Form</span>
          </el-menu-item>

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>Nested</span>
            </template>
            <el-submenu index="4-1">
              <template slot="title">
                <span>Nenu1</span>
              </template>
              <el-menu-item index="4-1-1">Menu1-1</el-menu-item>
              <el-submenu index="4-1-2">
                <template slot="title">
                  <span>Nenu1-2</span>
                </template>
                <el-menu-item index="4-1-2-1">Menu1-2-1</el-menu-item>
                <el-menu-item index="4-1-2-2">Menu1-2-2</el-menu-item>
              </el-submenu>
              <el-menu-item index="4-1-3">Menu1-3</el-menu-item>
            </el-submenu>
            <el-menu-item index="4-2">Nenu2</el-menu-item>
          </el-submenu>

          <el-menu-item index="5">
            <i class="el-icon-menu"></i>
            <span slot="title">External Link</span>
          </el-menu-item>

          <el-menu-item index="6">
            <i class="el-icon-menu"></i>
            <span slot="title">Donate</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
body{
  margin: 0px;
}
body,
html,
.h-100,
.el-menu {
  height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}
</style>

