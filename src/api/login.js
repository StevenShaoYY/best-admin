/**
 * Created by shaojunyan on 2017-7-26.
 */
import fetch from 'common/js/fetch';

export function login(email, password) {
  return fetch({
    url: 'api/login',
    method: 'post',
    data: {
      email,
      password
    }
  });
}
export function getInfo(token) {
  return fetch({
    url: 'api/user/info',
    method: 'get',
    params: { token }
  });
}
