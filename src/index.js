/**
 * @author muwoo
 * Date: 2018/7/2
 */
import {Render} from './core/index'
import {constants, Canvas} from './core/utils'

let RenderCanvas = function () {}

RenderCanvas.install = function (Vue) {
  Vue.mixin({
    data () {
      return {
        options: {
          /**
           * canvas width
           */
          width: 0,
          /**
           * canvas height
           */
          height: 0
        },
        /**
         * mainCanvas in dom
         */
        renderInstance: null
      }
    },
    created() {
      if (this.$options.renderCanvas) {
        this.options = Object.assign({}, this.options, this.getOptions())
        constants.rate = this.options.remUnit ? window.innerWidth / (this.options.remUnit * 10) : 1
        this.renderInstance = new Canvas(this.options.width, this.options.height)
        this.$watch(this.updateCanvas, this.noop)
      }
    },
    mounted () {
      if (this.$options.renderCanvas) {
        document.querySelector(this.options.el || 'body').appendChild(this.renderInstance._canvas)
      }
    },
    methods: {
      updateCanvas() {
        /**
         * to record before re-render scrollTop
         * @type {number}
         */
        constants.scrollTop += constants.top
        /**
         * get render vnode
         */
        let vnode = this.$options.renderCanvas.call(this._renderProxy, this.$createElement)

        /**
         * get off screen render canvas
         * @type {Render}
         */
        let render = new Render(this.renderInstance, vnode, this.options.width, this.options.height)
        let offScreenCanvas = render.vnode2canvas()

        /**
         * render off screen canvas to mainCanvas
         */
        this.renderInstance.add(offScreenCanvas)
      },

      getOptions () {
        return (typeof this.$options.canvasOptions === 'function') ?
          this.$options.canvasOptions() :
          this.$options.canvasOptions || {}
      },

      noop() {
      }
    }
  })
}

window.RenderCanvas = RenderCanvas

export default RenderCanvas
