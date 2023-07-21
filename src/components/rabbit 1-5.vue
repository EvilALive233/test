<!-- 1.5：糖衣语法 -->
<template>
  <div>
    {{ message }}
    <button @click="logMessage"> logMessage </button>
  </div>
</template>

<!-- ==== script ==== -->
<!-- <script >  // 原始写法
export default{
  setup(){
    console.log("setup")
    
    const message = "this is message"
    const logMessage = ()=>{
      console.log(message)

    }
    return{
      message,
      logMessage
    }
  },
  beforeCreate(){
    console.log("beforeCreate")

  }

}
</script> -->

<script setup> // 糖衣语法写法
// 数据
const message = "this is message"
// 函数
const logMessage = ()=>{
  console.log(message)
}
</script>

<!-- ==== style ==== -->
<style scoped lang="scss">

</style>
