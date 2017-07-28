<template>
  <div class="app-wrapper" ><!--:class="{hideSidebar:!sidebar.opened}"-->
    <div class="header-wrapper">
      <header-bar></header-bar>
    </div>
    <div class="menu-wrapper">
      <menu-bar class="menu-container"></menu-bar>
    </div>
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
  .app-wrapper
    position relative
    height 100%
    width 100%
    .header-wrapper
      margin-left 180px
      height 80px;
    .menu-wrapper
      position fixed
      top: 0px
      bottom: 0
      left: 0
      width: 180px
      z-index: 1001;
      overflow: hidden;
      transition: all .28s ease-out;
    .main
      min-height calc(100% - 80px);
      margin-left 180px
  .hideSidebar
    .menu-wrapper
      transform: translate(-140px, 0);
      .menu-container
        transform: translate(132px, 0);
      &:hover
        transform: translate(0, 0);
        .menu-container
          transform: translate(0, 0);
    .main
      margin-left: 40px;
</style>
