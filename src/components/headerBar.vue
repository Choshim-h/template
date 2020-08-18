<template>
  <div>
    <div class="row">
      <div class="w-80">
        <div class="grid-content bg-purple-light">
          <i class="el-icon-s-unfold"></i>
          <div class="unfold">
            <span>Dashboard</span>
          </div>
        </div>
      </div>
      <div class="w-20">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <img
              src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
              alt
              srcset
            >
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
            <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style>
.el-main{
  padding: 0px !important;
}
.row{
  padding: 5px 10px;
  height: 50px;
  overflow: hidden;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
}
.w-80 {
  width: 80%;
  float: left;
  line-height: 40px;
}
.w-20 {
  float: right;
}
.el-icon-s-unfold {
  font-size: 20px;
}
.unfold {
  display: inline-block;
  margin-left: 20px;
  font-size: 14px;
  color: #97a8be;
}
img {
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
}
</style>



