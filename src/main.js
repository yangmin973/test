import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})


// import axios from "axios"
// Vue.use(axios)
// //1、全局配置：可以配置baseURL, headers.post,timeout等...
// // （1）baseURL也就是在之后的每一个axios中的url前面拼接上baseURL，其他的可以在官方文档中进行查询
// axios.defaults.baseURL = "http://152.136.185.210:7878"
// axios.defaults.timeout = 5000
//
//
// //注意：axios(config)会默认为promise类型（在它里面
// //会自动进行resolve（data），所以在axios（）的后面可以直接使用then），如下：
// axios({
//   url:"http://123.207.32.32:8000/home/multidata",
//   method:"get"//默认为get，也可以设置为post
// }).then(res => {
//   console.log(res);
// })
// axios({
//   //url为：http://123.207.32.32:8000/home/data?type=pop&page=3
//   url:"http://123.207.32.32:8000/home/data",
//   //可以将问号后面带的参数加在url后面
//   params:{
//     type:"pop",
//     page:3
//   },
//   method:"get"//默认为get，也可以设置为post
// }).then(res => {
//   console.log(res);
// })
// console.log("并发处理-----------")
// //使用axios的all方法来判断两个axios请求是否成功，成功的话则跳转执行then方法
// axios.all([
//   axios({
//     url:"/api/m5/recommend"
//   }),
//   axios({
//     url:"/api/m5/home/data",
//     params:{
//       type:"pop",
//       page:1
//     }
//   })
// ]).then(res => {
//   console.log(res[0]);
//   console.log(res[1]);
// })
// console.log("并发处理（并且使用spread方法对结果数组进行拆分）-----------")
// axios.all([
//   axios({
//     url:"http://152.136.185.210:7878/api/m5/recommend"
//   }),
//   axios({
//     url:"http://152.136.185.210:7878/api/m5/home/data",
//     params:{
//       type:"pop",
//       page:1
//     }
//   })
// ]).then(axios.spread((res1, res2) => {
//   console.log(res1);
//   console.log(res2);
// }))
