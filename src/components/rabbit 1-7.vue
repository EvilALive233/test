<!-- 1.7: computed 计算属性函数 -->
<!-- 
  注意：
  1.计算属性中不应该有“副作用”
    比如异步请求/修改dom
  2.避免直接修改计算属性的值
    计算属性应该是只读的
 -->
<template>
  <div>

    <button @click="setCount"> {{ count }} </button>
    <p>{{ countMultiply5 }}</p>
    <hr>
    <p>{{ list }}</p>
    <p>{{ filterList }}</p>



  </div>
</template>

<!-- ==== script ==== -->
<script setup>
// 导入函数
import {  ref, computed } from 'vue';
// == count ==
const count = ref(0)

const countMultiply5 = computed(()=> {
  return count.value * 5

})

const setCount = ()=> {
  // 修改数据更新视图必须加上.value
  count.value++
  // console.log(count)
}

// == list ==

const list = ref([1, 2, 3, 4, 5, 6, 7, 8])

const filterList = computed( ()=>{
  return list.value.filter( item =>  item > 2  )
})

setTimeout(()=> {
  list.value.push(9,10)
},3000)


</script>

<!-- ==== style ==== -->
<style scoped lang="scss">
</style>
