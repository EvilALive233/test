<!-- 1.6：reactive 和 ref 函数 -->
<template>
  <div>
    <button @click="setCount"> {{ state.count }} </button>
    <hr>
    <button @click="setCount2"> {{ count2 }} </button>

    
  </div>
</template>

<!-- ==== script ==== -->
<script setup>
// 1.导入函数
import { reactive, ref } from 'vue';
// == reactive ==
// 2.执行函数 传入一个对象类型的参数 变量接收
const state = reactive({
  count: 0
})

const setCount = ()=> {
  state.count++
}

// == ref ==
// 2.执行函数 传入阐述[简单类型+ 对象类型] 变量接收
const count2 = ref(0)
console.log(count2)

const setCount2 = ()=> {
  // 修改数据更新视图必须加上.value
  count2.value++
  console.log(count2)
}



</script>

<!-- ==== style ==== -->
<style scoped lang="scss">

</style>
