<!-- 1.13: 模板引用 -->
<!-- 
  == 总结 ==
  1.获取模板引用的时机，在组件挂载完毕之后
  2.defineExpose编译宏可以显式保暴露组件内部的属性和方法
  
 -->

<template>
  <div>
    <!-- 2.通过ref标识绑定ref对象 -->
    <h1 ref="h1Ref">我是dom标签h1</h1>

    <button  class="color" @click="setColor">设置颜色</button>


    <TestCom ref="comRef" />

 
  </div>
</template>

<!-- ==== script ==== -->
<script setup>
import TestCom from './rabbit 1-13 test-com.vue'

import { onMounted, ref } from 'vue';
// 1.调用ref函数得到ref对象
const h1Ref = ref(null)
const comRef = ref(null)

// 组件挂载完毕才能获取
onMounted( ()=> {
  console.log(h1Ref.value)
  console.log(comRef.value)
  
})

// == 尝试修改颜色 ==
const style = ref('dodgerblue')
const setColor = ()=> {
  style.value = 'pink'


}

</script>


<!-- ==== style ==== -->
<style scoped lang="scss">
.color{  
  background-color: dodgerblue;
  background-color: v-bind(style);
}
</style>
