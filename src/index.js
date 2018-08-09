/**
 * @author muwoo
 * Date: 2018/7/2
 */
import {Render} from './core/index'
import {constants, Canvas} from './core/utils'
import renderAdapter from './core/renderAdapter'

let RenderCanvas = function () {
}

/**
 * mainCanvas in dom
 */
let renderInstance = null
let render = null
let a = 1

RenderCanvas.install = function (Vue) {
  Vue.mixin({
    data() {
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
        }
      }
    },
    /**
     * for weixin Mini Program
     */
    onLoad() {
      if (this.$options.renderCanvas) {
        let mobile = wx.getSystemInfoSync()
        constants.rate = mobile.windowWidth / 375
      }
    },
    mounted() {
      if (this.$options.renderCanvas) {
        a ++
        this.options = Object.assign({}, this.options, this.getOptions())
        constants.IN_BROWSER && (constants.rate = this.options.remUnit ? window.innerWidth / (this.options.remUnit * 10) : 1)
        renderInstance = new Canvas(this.options.width, this.options.height, this.options.canvasId)
        this.$watch(this.updateCanvas, this.noop)
        constants.IN_BROWSER && document.querySelector(this.options.el || 'body').appendChild(renderInstance._canvas)
      }
    },
    /**
     * for weixin Mini Program, teardown watchers
     */
    onUnload() {
      if (this._watcher) {
        this._watcher.teardown()
      }
      for (let i = this._watchers.length - 1; i >= 0; i--) {
        this._watchers[i].teardown()
      }
    },
    methods: {
      getRenderInstance() {
        return renderInstance
      },
      getRender() {
        return render
      },
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
        render = new Render(renderInstance, vnode, this.options.width, this.options.height)
        let offScreenCanvas = render.vnode2canvas()

        /**
         * render off screen canvas to mainCanvas
         */
        constants.IN_BROWSER && renderInstance.add(offScreenCanvas)
        return vnode
      },

      getOptions() {
        return (typeof this.$options.canvasOptions === 'function') ?
          this.$options.canvasOptions() :
          this.$options.canvasOptions || {}
      },

      noop() {
      }
    }
  })
}

constants.IN_BROWSER && (window.RenderCanvas = RenderCanvas)

export default RenderCanvas
