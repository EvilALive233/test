<!-- 1.8: watch 函数 - 基本使用 -->
<!-- 
  == 作用 ==
  侦听一个或多个数据的变化，数据变化时支线回调函数
  两个额外参数: 1.immediatr(立即执行) 2.deep(深度侦听)

  == 侦听多个数据 ==
  侦听多个响应式数据的变化，不管那个数据变化都需要执行回调

 -->

<template>
  <div>

    <button @click="setCount"> {{ count }} </button>
    <hr>

    <p><button @click="changeTwo"> {{ count2 + ' || ' +name }} </button></p>
    <p><button @click="changeCount2">修改count2: {{ count2 }} </button></p>
    <p><button @click="changeName">修改name: {{ name }} </button></p>
    



  </div>
</template>

<!-- ==== script ==== -->
<script setup>
// 导入函数
import { ref, watch } from 'vue';

// == 侦听单个数据 ==
const count = ref(0)

const setCount = ()=> {
  // 修改数据更新视图必须加上.value
  count.value++
  // console.log(count)
}
// watch侦听单个数据
// ref对象不用加.value
watch(count, (newValue,oldValue)=> {
  console.log(
    `count发生了变化
    新值为：${newValue}
    旧值为：${oldValue}`
  )
})

// == 侦听多个数据 ==
const count2 = ref(0)
const name = ref('cp')

// 侦听多个数据源
watch(
  [count2, name],
  ([newCount2,newName],[oldCount2,oldName]) => {
    console.log(
      `count2或name变化了`,
      [newCount2,newName],
      [oldCount2,oldName]
    )
  },{
    // 监听器创建时立即执行
    immediate:true
  }
)

const changeTwo = ()=> {
  count2.value++
  if( name.value == "cp" ) {
    name.value = "pc"
  }else{
    name.value = "cp"
  }
}
const changeCount2 = ()=> {
  count2.value++
}
const changeName = ()=> {  
  if( name.value == "cp" ) {
    name.value = "pc"
  }else{
    name.value = "cp"
  }
}

</script>


<!-- ==== style ==== -->
<style scoped lang="scss">
</style>
