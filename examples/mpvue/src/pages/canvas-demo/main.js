import Vue from 'vue'
import App from './index'
import RenderCanvas from 'vnode2canvas'

Vue.use(RenderCanvas)

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: 'mpvue canvas'
  }
}
