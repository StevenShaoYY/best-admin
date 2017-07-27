/**
 * Created by shaojunyan on 2017-7-26.
 */
import Cookies from 'js-cookie';
import * as types from '../mutation-types';
import { login, getInfo } from '@/api/login';

const user = {
  state: {
    token: Cookies.get('Admin-Token'),
    name: '',
    avatar: '',
    roles: []
  },
  mutations: {
    [types.SET_TOKEN](state, token) {
      state.token = token
    },
    [types.SET_NAME](state, name) {
      state.name = name
    },
    [types.SET_AVATAR](state, avatar) {
      state.avatar = avatar
    },
    [types.SET_ROLES](state, roles) {
      state.roles = roles
    }
  },
  actions: {
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '');
        Cookies.remove('Admin-Token');
        resolve();
      });
    },
    Login({ commit }, userInfo) {
      const email = userInfo.email.trim();
      return new Promise((resolve, reject) => {
        login(email, userInfo.password).then(response => {
          const data = response.data
          Cookies.set('Admin-Token', data.token);
          commit('SET_TOKEN', data.token);
          resolve();
        }).catch(error => {
          reject(error);
        });
      });
    },
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token).then(response => {
          const data = response.data.data;
          commit('SET_ROLES', data.role);
          commit('SET_NAME', data.name);
          commit('SET_AVATAR', data.avatar);
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      });
    }
  },
  getters: {
    token: state => state.token,
    avatar: state => state.avatar,
    name: state => state.name,
    roles: state => state.roles
  }
}
export default user;
