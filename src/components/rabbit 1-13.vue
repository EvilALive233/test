<!-- 1.13: 模板引用 -->
<!-- 
  
 -->

<template>
  <div>
    <!-- 2.通过ref标识绑定ref对象 -->
    <h1 ref="h1Ref">我是dom标签h1</h1>

 
  </div>
</template>

<!-- ==== script ==== -->
<script setup>

import { ref } from 'vue';
// 1.调用ref函数得到ref对象
const h1Ref = ref(null)

</script>


<!-- ==== style ==== -->
<style scoped lang="scss">
</style>
