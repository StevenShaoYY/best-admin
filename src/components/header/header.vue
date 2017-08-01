<template>
  <div>
    <div class="title">
      <h1>my-admin后台管理系统</h1>
    </div>
    <bread-crumb class="bread-crumb"></bread-crumb>
    <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
        <img class="user-avatar" :src="pic">
        <i class="el-icon-caret-bottom"></i>
      </div>
      <el-dropdown-menu class="user-dropdown" slot="dropdown">
        <router-link class='inlineBlock' to="/">
          <el-dropdown-item>
            返回首页
          </el-dropdown-item>
        </router-link>
        <el-dropdown-item divided><span @click="logout" style="display:block;color:#7e8c8d">退出登录</span></el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script type="text/ecmascript-6">
  import BreadCrumb from 'base/breadcrumb/breadcrumb'
  import { mapGetters, mapActions } from 'vuex'
//  import pic from 'common/image/default.png'
  export default{
    computed: {
      pic() {
        return require('common/image/' + this.avatar + '.png')
      },
      ...mapGetters([
        'avatar'
      ])
    },
    methods: {
      logout() {
        this.LogOut().then(() => {
          location.reload();
        })
      },
      ...mapActions([
        'LogOut'
      ])
    },
    components: {
      BreadCrumb
    }

  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .title
    color #ccc
    h1
      font-size 20px
      line-height 50px
      padding-left 30px
  .bread-crumb
    padding-left 40px
    margin-top -10px
  .avatar-container
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 55px;
    top 2px
    .avatar-wrapper
      cursor: pointer;
      margin-top: 5px;
      position: relative;
      .user-avatar
        width: 40px;
        height: 40px;
        border-radius: 10px;
      .el-icon-caret-bottom
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;

</style>
