import Vue from 'vue'
import App from './index'
import RenderCanvas from '../../../../../dev/main.js'

console.log(RenderCanvas)

Vue.use(RenderCanvas)

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: 'scroll view',
    disableScroll:true
  }
}
