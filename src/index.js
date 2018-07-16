/**
 * @author muwoo
 * Date: 2018/7/2
 */
import {Render} from './core/index'
import {Canvas} from "./core/utils/createCanvas"
import {constants} from './core/utils/index'

let RenderCanvas = () => {}

RenderCanvas.install = function (Vue) {
  Vue.mixin({
    data () {
      return {
        options: {
          width: 0,
          height: 0
        },
        renderInstance: null
      }
    },
    created() {
      if (this.$options.renderCanvas) {
        this.options = Object.assign({}, this.options, this.$options.canvasOptions())
        this.renderInstance = new Canvas(this.options.width, this.options.height)
        this.$watch(this.updateCanvas, this.noop)
        document.body.appendChild(this.renderInstance._canvas)
      }
    },
    methods: {
      updateCanvas() {
        constants.scrollTop += constants.top
        let vnode = this.$options.renderCanvas.call(this._renderProxy, this.$createElement)
        let render = new Render(this.renderInstance, vnode, this.options.width, this.options.height)
        let offScreenCanvas = render.vnode2canvas()
        this.renderInstance.add(offScreenCanvas)
        return vnode
      },
      noop() {
      }
    }
  })
}

window.RenderCanvas = RenderCanvas

export default RenderCanvas
