<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  .hello
    height calc(100vh - 80px)
    width 100%
    background-color #fff
    text-align center
    position relative
    h1
      color #222
      font-size 30px;
      position: absolute
      top calc(50% - 100px)
      left calc(50% - 120px)
</style>
