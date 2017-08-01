<template>
  <div>
    <div class="toggle" :class="{hidetoggle:!sidebar.opened}">
      <hamburger :toggleClick="toggleSideBar" class="toggle-item" :isActive="sidebar.opened"></hamburger>
    </div>
    <el-menu mode="vertical" class="el-menu-vertical-demo" :default-active="$route.path" :collapse="!sidebar.opened">
      <div class="menu-wrapper">
        <template v-for="item in permission_routers">
          <router-link v-if="!item.hidden&&item.noDropdown&&item.children.length>0"
                       :to="item.path+'/'+item.children[0].path">
            <el-menu-item :index="item.path+'/'+item.children[0].path" class='submenu-title-noDropdown'>
              <i class="el-icon-menu"></i><span>{{item.children[0].name}}</span>
            </el-menu-item>
          </router-link>
          <el-submenu :index="item.name" v-if="!item.noDropdown&&!item.hidden">
            <template slot="title">
              <i class="el-icon-menu"></i> <span slot="title">{{item.name}}</span>
            </template>
            <template v-for="child in item.children" v-if='!child.hidden'>
              <router-link class="menu-indent" :to="item.path+'/'+child.path">
                <el-menu-item :index="item.path+'/'+child.path">
                  <span>{{child.name}}</span>
                </el-menu-item>
              </router-link>
            </template>
          </el-submenu>
        </template>
      </div>
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
    width 180px
    background-color #EEF1F6
    transition: width .28s ease-out;
    &.hidetoggle
      width 64px
    .toggle-item
      margin-left 20px
      padding-top 20px

  .el-menu-vertical-demo
    height 100vh
</style>
