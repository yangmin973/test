import vue from "vue"
import axios from "axios"
vue.use(axios)
//可以导出多个axios实例（每一个axios实例的基础config设置为不同的）
export function instance1(config) {
  const instance = axios.create({
    baseURL:"http://152.136.185.210:7878/api/m5",
    timeout:5000
  })
  //重要：配置拦截器：
  //1、请求拦截器：(有两个参数，传入的都是函数)，第一个函数拿到的是对应的config，第二个函数对应的是
  //err（错误处理）
  instance.interceptors.request.use(config => {
    //1、可以对拦截到的请求参数进行一系列的处理
    //比如：1、在请求时，向客户端展示等待的旋转图
    //2、对客户发送的参数进行识别和判断（比如判断是否携带token，从而进行用户登录）
    console.log(config);
    //记得要返回拦截的参数，这样这个请求参数才会发往服务器
    return config
  },error => {
    console.log(err);
  })
  //2、响应拦截器：(有两个参数，传入的都是函数)，第一个函数拿到的是对应response数据，第二个函数对应的是
  //err（错误处理）
  instance.interceptors.response.use(response => {
    //1、可以对拦截到的响应参数进行一系列的处理
    //比如，改变响应数据的类型，再进行渲染
    console.log(response+"aaa");
    //记得要返回拦截的参数，这样这个请求参数才会发往服务器
    return response
  },error => {
    console.log(err);
  })
  //下面返回的是一个promise类型的实例，可以在调用处，使用then方法来接受请求的数据
  return instance1(config)
}
//第二个实例：它的timeout发生了改变
export function instance2(config) {
  const instance = axios.create({
    baseURL:"http://152.136.185.210:7878/api/m5",
    timeout:8000
  })
  //下面返回的是一个promise类型的实例，可以在调用处，使用then方法来接受请求的数据
  return instance(config)
}
