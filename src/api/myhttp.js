// 封装 axios
// 得到 store 对象
import store from '../store/index.js'
// 1.0 导入 axios
import axios from 'axios'
// 导入 json-bigint
import JSONBig from 'json-bigint'
// 导入操作 local 的方法
import { localSet } from './mylocal'

// 2.0 创建一个 axios 实例
const http = axios.create({
  // 设置一个基地址
  baseURL: 'http://ttapi.research.itcast.cn',
  // xsrfCookieName:  这是千万不要添加这个属性，否则会报跨域的错误（因为之前黑马面面中的服务器需要在请求中携带 cookie，但是黑马头条不需要）
  // 允许我们在处理返回数据之前，操作返回的数据
  transformResponse: [function (data) {
    try {
      // data：从服务器返回回来的 json 格式的字符串
      return JSONBig.parse(data)
    } catch (err) {
      return JSON.parse(data)
    }
  }]
})
// 创建一个新的 http
const http1 = axios.create({
  // 设置一个基地址
  baseURL: 'http://ttapi.research.itcast.cn'
})

// 3.0 给 axios 添加拦截器
// 请求拦截器(当请求发送之前执行:可以在请求拦截器中添加token)
http.interceptors.request.use(function (config) {
  // 判断 store 中的 state 下的 userInfo 是否存在 token
  if (store.state.userInfo.token) {
    // 如果存在，将 token 添加到请求头中
    config.headers.Authorization = `Bearer ${store.state.userInfo.token}`
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

// 响应拦截器
http.interceptors.response.use(function (response) {
  return response
}, async function (error) {
  console.log('----------响应拦截器-------------')
  if (error.response.status === 401) {
    // 说明 token 已经过期了
    const refreshToken = store.state.userInfo.refresh_token // 得到 refresh_token
    console.log(refreshToken)
    // 将 refresh_token 提交到服务器，得到新的 token
    const tokenRes = await http1({
      url: '/app/v1_0/authorizations',
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${refreshToken}`
      }
    })
    const newToken = tokenRes.data.data.token // 得到新的 token
    // 得到新的 userinfo 对象
    const userInfo = {
      token: newToken,
      refresh_token: refreshToken
    }
    // 过期的 token 存在哪里：1.0  store  2.0 localStorage 中
    store.commit('setUserInfo', userInfo) // 覆盖掉 store 中的过期 token
    localSet('userInfo', userInfo) // 覆盖掉 本地的 token
    // 使用 新的 token 完成未完成的请求
    return http(error.config)
  }
  console.log('----------响应拦截器-------------')
  return Promise.reject(error)
})

// 4.0 将 http 暴露给外界 (默认导出)
export default http

// 说明：error 对象中关键的三个属性
// config： 本次发送请求的配置
//    baseURL
//    url
//    headers
//    .....
// request: 本次请求服务器的相关信息
// response: 本次请求服务器响应的信息
//    status: 401 响应的状态码
