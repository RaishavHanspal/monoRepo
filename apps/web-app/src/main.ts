import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { sum } from "common"
createApp(App).mount('#app')
console.log("sum is: " + sum(1, 1));


