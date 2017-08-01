<template>
  <el-breadcrumb class="app-levelbar" separator="/">
    <el-breadcrumb-item v-for="(item,index)  in levelList" :key="item.name">
      <router-link v-if='item.redirect==="noredirect"||index==levelList.length-1' to="" class="no-redirect">{{item.name}}</router-link>
      <router-link v-else :to="item.path">{{item.name}}</router-link>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script type="text/ecmascript-6">
  export default{
    data() {
      return {
        levelList: null
      }
    },
    created() {
      this.getBreadcrumb()
    },
    methods: {
      getBreadcrumb() {
        let matched = this.$route.matched.filter(item => item.name);
        const first = matched[0];
        if (first && (first.name !== '首页' || first.path !== '')) {
          matched = [{ name: '首页', path: '/' }].concat(matched)
        }
        this.levelList = matched
      }
    },
    watch: {
      $route() {
        this.getBreadcrumb();
      }
    }

  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .app-levelbar.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 30px;
    border-bottom 1px solid #ccc
    margin-left 10px
    width 20%
    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }
</style>
