<!-- 1.10: 生命周期函数 -->
<!-- 

  执行多次: 生命周期函数可以执行多彩，多次执行时传入的回调会按顺序依次执行

  == 总结 ==
  1.组合式API下中生命周期函数的格式通常为 on+生命周期函数名字
  2.组合式API中没有 onCrdeated,直接写在 setup中即可
  3.组合式API中组件卸载完毕时执行的是 onUnmounted 函数


 -->

<template>
  <div>

 
  </div>
</template>

<!-- ==== script ==== -->
<script setup>

import { onMounted } from 'vue';

onMounted( ()=> {
  console.log('1-组件挂载完毕，onMounted执行')
})
onMounted( ()=> {
  console.log('2-组件挂载完毕，onMounted执行')
})

</script>


<!-- ==== style ==== -->
<style scoped lang="scss">
</style>
