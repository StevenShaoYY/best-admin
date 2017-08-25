# best-admin
新开一个仓库，做一个后台管理的模板，基于vue+vuex+vue-router+element,主要解决权限管理，登入登出，以及一些基础组件封装

### 效果显示

![actor](https://github.com/StevenShaoYY/best-admin/blob/master/actor.gif)

### 权限管理的实现
1. 对axios进行封装，使请求都带上token去后台验证，对响应也进行拦截，根据状态码做出响应
2. 登录成功后，根据获取的token拉取用户权限
3. 给予vue-router动态生成菜单
4. 对路由进行拦截，依据权限放行

## 构建

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```