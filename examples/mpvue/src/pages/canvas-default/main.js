import Vue from 'vue'
import App from './index'
import RenderCanvas from 'vnode2canvas'

console.log(RenderCanvas)

Vue.use(RenderCanvas)

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: 'canvas 测试'
  }
}
