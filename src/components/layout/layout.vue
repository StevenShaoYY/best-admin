<template>
  <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
    <div class="header-wrapper">
      <header-bar></header-bar>
    </div>
    <menu-bar class="menu-container"></menu-bar>
    <div class="main">
      <transition name="fade" mode="out-in">
        <router-view :key="key"></router-view>
      </transition>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import HeaderBar from 'components/header/header'
  import MenuBar from 'components/menu/menu'
  import { mapGetters } from 'vuex'
  export default{
    props: {},
    data() {
      return {}
    },
    computed: {
      key() {
        return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date();
      },
      ...mapGetters([
        'sidebar'
      ])
    },
    methods: {},
    components: {
      HeaderBar,
      MenuBar
    }

  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .fade-enter-active,
  .fade-leave-active {
    transition: all .2s ease
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
  .app-wrapper
    position relative
    height 100%
    width 100%
    .header-wrapper
      margin-left 180px
      height 80px;
      transition: all .28s ease-out;
    .menu-container
      transition: width .28s ease-out;
      position fixed
      top: 0px
      bottom: 0
      left: 0
      width: 180px
      z-index: 1001
    .main
      transition: margin-left .28s ease-out;
      min-height calc(100% - 80px);
      margin-left 180px
  .hideSidebar
    .menu-container
      width 64px
    .main
      margin-left: 64px;
    .header-wrapper
      margin-left 64px
</style>
