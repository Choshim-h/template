<template>
  <div class="menu122">
    <!-- <el-alert title="消息提示的文案" type="info" :closable="false" />
      <el-alert title="成功提示的文案" type="success" :closable="false" />
        <el-alert title="警告提示的文案" type="warning" :closable="false" />
        </el-alert>
      </el-alert>
    </el-alert> -->
    <el-alert title="menu 1" type="info" :closable="false" >
      <el-alert title="menu 1-2" type="success" :closable="false" class="mar_30">
        <el-alert title="menu 1-2-2" type="warning" :closable="false" class="mar_30">
        </el-alert>
      </el-alert>
    </el-alert>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.menu122{
    margin: 30px;
}

</style>