<template>
  <div class="login-container">
    <el-form autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left"
             label-width="0px"
             class="card-box login-form">
      <h3 class="title">系统登录</h3>
      <el-form-item prop="email">
        <el-input name="email" type="text" v-model="loginForm.email" autoComplete="on" placeholder="邮箱"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input name="password" type="password" @keyup.enter.native="handleLogin" v-model="loginForm.password"
                  autoComplete="on"
                  placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="handleLogin">
          登录
        </el-button>
      </el-form-item>
      <div class='tips'>admin账号为:635178917@qq.com 密码:12345</div>
      <!--<div class='tips'>editor账号:editor@wallstreetcn.com 密码随便填</div>-->
    </el-form>
  </div>
</template>
<script type="text/ecmascript-6">
  import { isEmail } from 'common/js/validate';
  import { mapActions } from 'vuex';
  export default{
    name: 'Login',
    props: {},
    data() {
      const validateEmail = (rule, value, callback) => {
        if (!isEmail(value)) {
          callback(new Error('请输入正确的合法邮箱'));
        } else {
          callback();
        }
      };
      const validatePass = (rule, value, callback) => {
        if (value.length < 5) {
          callback(new Error('密码不能小于5位'));
        } else {
          callback();
        }
      };
      return {
        loginForm: {
          email: 'admin@wallstreetcn.com',
          password: '111111'
        },
        loginRules: {
          email: [
            { required: true, trigger: 'blur', validator: validateEmail }
          ],
          password: [
            { required: true, trigger: 'blur', validator: validatePass }
          ]
        },
        loading: false
      }
    },
    methods: {
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.loading = true;
            this.Login(this.loginForm).then(() => {
              this.loading = false;
              this.$router.push({ path: '/' });
            }).catch(() => {
              this.loading = false;
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      ...mapActions([
        'Login'
      ])
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .login-container
    position relative
    width 100%
    height 100vh;
    background-color #2d3a4b
    input:-webkit-autofill
      -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;
      -webkit-text-fill-color: #fff !important;
    input
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: #eeeeee;
      height: 47px;
    .login-form
      position: absolute;
      left: 0;
      right: 0;
      width: 400px;
      padding: 35px 35px 15px 35px;
      margin: 120px auto;
      .title
        font-size: 26px;
        font-weight: 400;
        color: #eeeeee;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
      .el-form-item {
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        color: #454545;
      }
</style>
