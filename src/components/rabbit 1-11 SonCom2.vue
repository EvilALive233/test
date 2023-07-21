<!-- 1.11: 组合式API下的父子通信 -->

<!-- ==== script ==== -->
<script setup>
// 2.通过 defineEmits编译器宏 生成 emit 方法
const emit = defineEmits(["get-getMessage"])

const sendMsg = ()=> {
  // 3.触发自定义事件，并传递参数
  emit('get-getMessage','this is son meg')
}



</script>


<template>
  <div class="son">
    <h3>子组件Son - 子传父</h3>
    <button @click="sendMsg">sendMsg</button>

 
  </div>
</template>


<!-- ==== style ==== -->
<style scoped lang="scss">
.son{
  margin: 4px;
  border: 4px solid yellow;
  padding: 8px;
}
</style>
