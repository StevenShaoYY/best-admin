<template>
  <div>
    <div class="toggle"></div>
    <el-menu default-active="2" class="el-menu-vertical-demo">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
      <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
    </el-menu>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    methods: {
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .toggle
    height 60px
    width 200px
    background-color #EEF1F6
  .el-menu-vertical-demo{
    height 100vh
  }
</style>
