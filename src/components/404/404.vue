<template>
  <div style="background:#f0f2f5;">
      <div class="page_fail">
        <div class="img_fail">
          <img src="./404.png" width="600"  alt="">
        </div>
        <div class="text_fail">
          <div class="text_fail__oops">OOPS!</div>
          <div class="text_fail__headline">{{ message }}</div>
          <div class="text_fail__info">请检查您输入的网址是否正确，请点击以下按钮返回主页或者发送错误报告</div>
          <a href="/" class="text_fail__return-home">返回首页</a>
        </div>
      </div>
  </div>
</template>

<script>
 export default {
   computed: {
     message() {
       return '这个页面你不能进......'
     }
   }
 }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .page_fail
    position relative
    width 1200px
    margin 0px auto 60px
    padding 0px 100px
    overflow hidden
    .img_fail
      position relative
      float left
      width: 600px;
      padding: 150px 0;
      overflow: hidden;
    .text_fail
      padding: 150px 0;
      .text_fail__oops
        font-size: 32px;
        font-weight: bold;
        line-height: 40px;
        color: #1482f0;
        margin-bottom: 20px;
      .text_fail__headline
        font-size: 20px;
        line-height: 24px;
        color: #1482f0;
        margin-bottom: 10px;
      .text_fail__info
        font-size: 13px;
        line-height: 21px;
        color: grey;
        margin-bottom: 30px;
      .text_fail__return-home
        display: block;
        float: left;
        width: 110px;
        height: 36px;
        background: #1482f0;
        border-radius: 100px;
        text-align: center;
        color: #ffffff;
        font-size: 14px;
        line-height: 36px;
        cursor: pointer;
</style>
