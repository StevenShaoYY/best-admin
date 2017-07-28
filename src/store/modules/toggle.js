/**
 * Created by shaojunyan on 2017-7-28.
 */
import Cookies from 'js-cookie';
import * as types from '../mutation-types';

const toggle = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus')
    }
  },
  mutations: {
    [types.TOGGLE_SIDEBAR](state) {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1);
      } else {
        Cookies.set('sidebarStatus', 0);
      }
      state.sidebar.opened = !state.sidebar.opened;
    }
  },
  getters: {
    sidebar: state => state.sidebar
  }
};
export default toggle;
