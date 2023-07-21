
<template>
  <div>
    
    <button @click="addCount">{{ count }}</button>
  </div>
</template>

<!-- ==== script ==== -->
<script setup>

import { ref, onMounted } from 'vue'

const count = ref(0)

// 方法2
const addCount = () => count.value++

// 方法1
// function addCount() {
//   count.value++
// }

onMounted( ()=>{
  console.log(`count的初始数值是 ${count.value} .`)
})


</script>

<!-- ==== style ==== -->
<style scoped  lang="scss">

</style>
