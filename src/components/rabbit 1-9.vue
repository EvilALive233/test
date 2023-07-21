<!-- 1.9: watch 函数 - 深度侦听和精确侦听 -->
<!-- 
  == 总结 ==
  1.作为watch的第一个参数，ref对象不需要添加.value，watch会自动读取
  2.wtch既可以侦听单个参数也可以侦听多个参数
  3.watch默认为浅层侦听，在不开启deep时直接修改嵌套属性不能触发回调
  4.在不开启deep时，可以通过将第一参数写成函数的方式，进行精确侦听，返回侦听的具体属性

  
 -->

<template>
  <div>

    <p><button @click="setCount"> {{ state }} </button></p>
    <hr>

    <p>{{ info }}</p>
    <p><button @click="changeName">修改name</button></p>
    <p><button @click="changeAge">修改age</button></p>

  </div>
</template>

<!-- ==== script ==== -->
<script setup>
// 导入函数
import { ref, watch } from 'vue';

// == 深度侦听 ==
const state = ref({ count: 0 })

// ▼ 函数setCount修改state.value.count时，不触发对state的监听器
// watch( state, ()=> console.log('数据发送了变化'))
// ▼ 开启deep后，修改state.value.count时，会触发对state的监听器
//   deep存在性能损耗，尽量不开启deep
watch( state, ()=> console.log('数据发送了变化'),{ deep:true })


const setCount = ()=> {
  state.value.count++
}

// 精确侦听
const info = ref({
  name:'cp',
  age:18
})

watch(
  ()=> info.value.age,
  ()=> console.log('age发生了变化')
)

const changeName = ()=> {
  info.value.name === 'cp' ? info.value.name = 'pc' : info.value.name = 'cp'

}
const changeAge = ()=> {
  info.value.age++
}

</script>


<!-- ==== style ==== -->
<style scoped lang="scss">
</style>
