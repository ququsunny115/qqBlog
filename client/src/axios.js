import axios from 'axios'
import store from './store/index'
import router from './router'
import qs from 'qs'

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (localStorage.getItem('token')) {
      config.headers.Authorization = 'Bearer ' + localStorage.getItem('token')
    }
    if (config.method == 'post' || config.method == 'put') {
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
      config.transformRequest = [function(data, headers){
        return qs.stringify(data)
      }]
    }
    return config
  },err => {
    return Promise.reject(err)
  },
)

// http response 拦截器
axios.interceptors.response.use(response => {
  response.headers['content-type'] = 'application/json;charset=utf-8'
    return response
  },error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          store.commit('UNSET_USERS')
          router.replace({
            name: 'login',
            query: { redirect: router.currentRoute.path },
          })
            
      }
    }
    return Promise.reject(error.response.data)
  },
)

export default axios