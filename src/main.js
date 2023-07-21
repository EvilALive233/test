import './assets/main.css'

// new Vue() 创建一个应用实例对象
import { createApp } from 'vue'
import App from './App.vue'

// 1.以App作为常熟生成一个应用实例对象
// 2.挂载到id为app的节点
createApp(App).mount('#app')
