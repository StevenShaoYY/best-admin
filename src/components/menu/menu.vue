<template>
  <div>
    <div class="toggle">
      <hamburger :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
    </div>
    <!--<el-menu mode="vertical" class="el-menu-vertical-demo" :default-active="$route.path" :collapse="isCollapse">-->
      <!--<template v-for="item in permission_routers">-->
        <!--<router-link v-if="!item.hidden&&item.noDropdown&&item.children.length>0" :to="item.path+'/'+item.children[0].path">-->
          <!--<el-menu-item :index="item.path+'/'+item.children[0].path">-->
            <!--<i class="el-icon-menu"></i>{{item.children[0].name}}-->
          <!--</el-menu-item>-->
        <!--</router-link>-->
        <!--<el-submenu :index="item.name" v-if="!item.noDropdown&&!item.hidden">-->
          <!--<template slot="title">-->
            <!--<i class="el-icon-menu"></i> {{item.name}}-->
          <!--</template>-->
          <!--<template v-for="child in item.children" v-if='!child.hidden'>-->
            <!--<router-link :to="item.path+'/'+child.path">-->
              <!--<el-menu-item :index="item.path+'/'+child.path">-->
                <!--{{child.name}}-->
              <!--</el-menu-item>-->
            <!--</router-link>-->
          <!--</template>-->
        <!--</el-submenu>-->
      <!--</template>-->
    <!--</el-menu>-->
    <el-menu default-active="2" class="el-menu-vertical-demo" collapse="sidebar.opened">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-message"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script type="text/ecmascript-6">
  import { mapGetters, mapMutations } from 'vuex'
  import Hamburger from 'base/hamburger/hamburger'
  export default{
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      toggleSideBar() {
        this.toggle()
      },
      ...mapMutations({
        toggle: 'TOGGLE_SIDEBAR'
      })
    },
    computed: {
      ...mapGetters([
        'permission_routers',
        'sidebar'
      ])
    },
    components: {
      Hamburger
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
  span
    color #000
</style>
