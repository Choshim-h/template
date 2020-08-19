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
          active-text-color="#409EFF"
          :collapse="isCollapse"
        >
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title"><router-link to="/Dashboard">Dashboard</router-link></span>
          </el-menu-item>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>Example</span>
            </template>
            <el-menu-item index="2-1" background-color="#1f2d3d" active-text-color="#001528"><router-link to="/Table">Table</router-link></el-menu-item>
            <router-link to="/Example/Tree"><el-menu-item index="2-2" background-color="#1f2d3d" active-text-color="#001528">Tree</el-menu-item></router-link>
          </el-submenu>

          <el-menu-item index="3">
            <i class="el-icon-menu"></i>
            <span slot="title"><router-link to="/Form">Form</router-link></span>
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
              <el-menu-item index="4-1-1"><router-link to="/Menu1-1">Menu1-1</router-link></el-menu-item>
              <el-submenu index="4-1-2">
                <template slot="title">
                  <span>Nenu1-2</span>
                </template>
                <el-menu-item index="4-1-2-1"><router-link to="/Menu1-2-1">Menu1-2-1</router-link></el-menu-item>
                <el-menu-item index="4-1-2-2"><router-link to="/Menu1-2-2">Menu1-2-2</router-link></el-menu-item>
              </el-submenu>
              <el-menu-item index="4-1-3"><router-link to="/Menu1-3">Menu1-3</router-link></el-menu-item>
            </el-submenu>
            <el-menu-item index="4-2"><router-link to="/Nenu2">Nenu2</router-link></el-menu-item>
          </el-submenu>

          <el-menu-item index="5">
            <i class="el-icon-menu"></i>
            <span slot="title"><router-link to="/External Link">External Link</router-link></span>
          </el-menu-item>

          <el-menu-item index="6">
            <i class="el-icon-menu"></i>
            <span slot="title"><router-link to="/Donate">Donate</router-link></span>
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

