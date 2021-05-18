<template>
  <div id="app">
    <img src="./assets/logo.png">
<!--    运行还是有错误（没改正）-->
    <h2>{{result}}</h2>
    <h2>{{result1}}</h2>
  </div>
</template>

<script>
import {instance1} from "./network/request";
import {instance2} from "./network/request"
export default {
  name: 'App',
  data(){
    return{
      result:"",
      result1:""
    }
  },
  components: {
  },
  created() {
    //使用导入的axios实例
    instance1({
      url:"/recommend"
    }).then(res => {
      console.log(res)
      this.result = res
    }),
    instance2({
        url:"/home/data",
        params:{
          type:"pop",
          page:3
        }
     }).then(res => {
        this.result1 = res
     })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
