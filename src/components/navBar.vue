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
          <router-link to="/Dashboard">
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">Dashboard</span>
            </el-menu-item>
          </router-link>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>Example</span>
            </template>
            <router-link to="/Example/Table">
              <el-menu-item index="2-1">Table</el-menu-item>
            </router-link>
            <router-link to="/Example/Tree">
              <el-menu-item index="2-2">Tree</el-menu-item>
            </router-link>
          </el-submenu>
          <router-link to="/Form">
            <el-menu-item index="3">
              <i class="el-icon-menu"></i>
              <span slot="title">Form</span>
            </el-menu-item>
          </router-link>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>Nested</span>
            </template>
            <el-submenu index="4-1">
              <template slot="title">
                <span>Nenu1</span>
              </template>
              <router-link to="/Nested/Nenu1/Menu11">
                <el-menu-item index="4-1-1">Menu1-1</el-menu-item>
              </router-link>
              <el-submenu index="4-1-2">
                <template slot="title">
                  <span>Nenu1-2</span>
                </template>
                <router-link to="/Nested/Nenu1/Menu12/Menu121">
                  <el-menu-item index="4-1-2-1">Menu1-2-1</el-menu-item>
                </router-link>
                <router-link to="/Nested/Nenu1/Menu12/Menu122">
                  <el-menu-item index="4-1-2-2">Menu1-2-2</el-menu-item>
                </router-link>
              </el-submenu>
              <router-link to="/Nested/Nenu1/Menu13">
                <el-menu-item index="4-1-3">Menu1-3</el-menu-item>
              </router-link>
            </el-submenu>
            <router-link to="/Nested/Nenu2">
              <el-menu-item index="4-2">Nenu2</el-menu-item>
            </router-link>
          </el-submenu>
          <router-link to="/Externallink">
            <el-menu-item index="5">
              <i class="el-icon-menu"></i>
              <span slot="title">External Link</span>
            </el-menu-item>
          </router-link>
          <router-link to="/Donate">
            <el-menu-item index="6">
              <i class="el-icon-menu"></i>
              <span slot="title">Donate</span>
            </el-menu-item>
          </router-link>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
body {
  margin: 0px;
}
body,
html,
.h-100,
.el-menu {
  height: 100%;
}
.el-menu {
  border-radius: 0px !important;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: auto;
  min-height: 100%;
}
</style>

