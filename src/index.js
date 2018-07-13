/**
 * @author muwoo
 * Date: 2018/7/2
 */
import {Render} from './core/index'
let RenderCanvas = () => {}

RenderCanvas.install = function (Vue) {
  Vue.mixin({
    created() {
      if (this.$options.renderCanvas) {
        this.$watch(this.updateCanvas, this.noop)
      }

    },
    methods: {
      updateCanvas() {
        let vnode = this.$options.renderCanvas.call(this._renderProxy, this.$createElement)
        let render = new Render(window.innerWidth, window.innerHeight, vnode)
        render.clearCanvas()
        render.vnode2canvas()
        return vnode
      },
      noop() {
      }
    }
  })
}

window.RenderCanvas = RenderCanvas

export default RenderCanvas
