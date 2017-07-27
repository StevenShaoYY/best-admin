/**
 * Created by shaojunyan on 2017-7-27.
 */
import * as types from '../mutation-types'
import { asyncRouterMap, constantRouterMap } from 'router/index'
import { deepClone } from 'common/js/utils'
function hasPermission(roles, route) {
  if (route.meta && route.meta.role) {
    return roles.some(role => route.meta.role.indexOf(role) >= 0)
  } else {
    return true
  }
}

function filterAsyncRouter(asyncRouterMap, roles) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermission(roles, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    [types.SET_ROUTERS](state, routers) {
      state.addRouters = deepClone(routers)
      state.routers = deepClone(constantRouterMap.concat(routers))
    }
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        const { roles } = data;
        const accessRouters = filterAsyncRouter(asyncRouterMap, roles);
        commit('SET_ROUTERS', accessRouters);
        resolve();
      })
    }
  },
  getters: {
    permission_routers: state => state.routers,
    addRouters: state => state.addRouters
  }
}
export default permission
