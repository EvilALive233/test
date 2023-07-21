<!-- 1.13: 模板引用 -->
<!-- 
  
 -->

<template>
  <div>
    
    <div>我是test组件</div>
    <button @click="setName">修改name</button>

 
  </div>
</template>

<!-- ==== script ==== -->
<script setup>

import { ref } from 'vue';

const name = ref('test name')
const setName = ()=> {
  name.value = 'test new name'
}

/**
 * 
  默认情况下，在<script setup>里，组件内部的属性与方法是不开放给父组件访问的
  使用 defineExpose编译宏 指定哪些属性和方法是允许访问的
 * 
*/ 
defineExpose({
  name,setName

})
</script>


<!-- ==== style ==== -->
<style scoped lang="scss">
</style>
