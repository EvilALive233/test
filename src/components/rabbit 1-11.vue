<!-- 1.11: 组合式API下的父子通信 -->
<!-- 
  == 基本思想 - 父传子 ==
  1.父组件中给子组件绑定属性
  2.子组件内部通过props选项接收

  == 基本思想 - 子传父 ==
  1.父组件中给子组件标签通过 @绑定事件
  2.子组件内部通过 $emit 方法触发事件


  == 总结 ==
  ▼ 1 父传子
  1.父传子过程中通过 defineProps({ 属性名: 类型 }) 来接收 props
  2.setup糖衣语法中，通过 const props = defineProps({ 属性名: 类型 }) 来使用父组件传过来的数据
  
  ▼ 2 子传父
  1.子传父过程中 通过 defineEmits('事件名称') 来得到 emit 方法

 -->

<template>
  <div class="father">
    <h2>父组件App</h2>

    <!-- == 子组件 - 父传子 == -->
    <!-- 1.绑定属性 -->
    <SonCom message="father message" :toCount="count" />
    <hr>

    <!-- == 子组件 - 子传父 == -->
    <!-- 1.绑定自定义事件 -->
    <SonCom2 @get-getMessage="getMessage" />
    



  </div>
</template>

<!-- ==== script ==== -->
<script setup>

// setup糖衣语法下，局部组件无需注册直接可以使用
import SonCom from './rabbit 1-11 SonCom.vue'
import SonCom2 from './rabbit 1-11 SonCom2.vue'


import { ref } from 'vue';

// == 子组件 - 父传子 ==
const count = ref(100)

// 单次触发
setTimeout( ()=> {
  count.value  += 1000 
  
  // 清除循环计时器 timer
  clearInterval(timer)
  timer = null
},3000)

// 循环触发
let timer = setInterval( ()=> {
  count.value  += 100  
},1000)

// == 子组件 - 子传父 ==
const getMessage = ( msg )=> {
  console.log(msg)
}

</script>


<!-- ==== style ==== -->
<style scoped lang="scss" >
.father{
  border: 4px solid red;
  padding: 20px;

}
</style>
