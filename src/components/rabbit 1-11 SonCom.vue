<!-- 1.11: 组合式API下的父子通信 -->

<!-- ==== script ==== -->
<script setup>
// 2.接收数据 使用defineProps“编译器宏函数”接收子组件传递的数据

// /** 2 - 方法1: 可在模板语法中使用接收的数据 */
// defineProps ({
//   message: String
// })
// /** 该方式接收的数据无法在脚本中使用接收的数据 */
// console.log(message)

/** 2 - 方法2: 可在脚本中与模板语法中使用接收的数据  */
const props = defineProps({
  message: String,
  toCount: Number
})
console.log(props)
// console.log(props.message)

</script>


<template>
  <div class="son">
    <h3>子组件Son - 父传子</h3>
    <p>父组件传入的数据 message - {{ message }}</p>
    <p>父组件传入的数据 toCount - {{ toCount }}</p>
 
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
