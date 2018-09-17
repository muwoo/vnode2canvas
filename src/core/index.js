/**
 * @author muwoo
 * Date: 2018/7/2
 */
import {Event} from './event'
import {Img, View, ScrollItem, ScrollView, Text} from './shape'
import {Canvas, canvasItemPool, constants} from './utils'

export class Render extends Canvas {
  /**
   * constructor
   * @param renderInstance: mainCanvas instance
   * @param vnode: virtual dom
   * @param width: render width
   * @param height: render height
   */
  constructor(renderInstance, vnode, width, height) {
    super(width, height)
    /**
     * render canvas container
     * @type {null}
     */
    this.renderInstance = renderInstance
    this.stack = [vnode]
    this.event = new Event(this._ctx)
    this.event.init(renderInstance._canvas)
    this.scrollContainer = null
    this.isRendering = false
    canvasItemPool.clear()
    this.id = 0

    /**
     * in weixin
     * Instead of using off-screen canvas, draw directly on canvas context
     *
     */
    !constants.IN_BROWSER && (this._ctx = renderInstance._ctx)
    !constants.IN_BROWSER && this.clearCanvas()
  }

  clearCanvas() {
    this._ctx.clearRect(0, 0, this.width, this.height);
  }

  vnode2canvas() {
    this.traverse(this.stack)
    !constants.IN_BROWSER && this._ctx.draw(true)
    return this._canvas
  }

  rePaint(top) {
    if (this.isRendering) {
      return
    }
    this.isRendering = true
    // adapter Mini Program
    doAnimationFrame(() => {
      this.clearCanvas()
      for (let cacheItem of canvasItemPool) {
        cacheItem.draw(this._ctx, top, this)
      }
      constants.IN_BROWSER ? this.renderInstance.add(this._canvas) : this._ctx.draw()
      this.isRendering = false
    })
  }


  /**
   * if style import with css file
   * @param vnode
   * @returns {{}}
   */
  getImportStyle(vnode) {
    let style = {}
    let vStyle = window.vStyle || {}
    Object.keys(vStyle).forEach(key => {
      if (vnode.data && vnode.data.class) {
        if ('.' + vnode.data.class === key) {
          style = vStyle[key]
        }
      }
      if (vnode.tag) {
        if (vnode.tag === key) {
          style = vStyle[key]
        }
      }
    })
    return style
  }

  /**
   * Proxy
   * @param target: virtual dom
   * @param key: render type
   * @returns {*}
   */
  renderProxy(target, key) {
    target.data = target.data || {}
    let importStyle = constants.IN_BROWSER ? this.getImportStyle(target) : {}
    let drawStyle = {...importStyle, ...target.data.style} || {...importStyle}
    let canvasItem = null
    return {
      scrollView: () => {
        canvasItem = new ScrollView(drawStyle)
        canvasItem.draw(this)
        /**
         * export scrollInstance for setting touch event automatic
         */
        this.scrollContainer = canvasItem
        return canvasItem
      },
      scrollItem: (ctx) => {
        canvasItem = new ScrollItem(drawStyle, target, this)
        canvasItem.draw(ctx, 0)
        return canvasItem
      },
      view: (ctx) => {
        canvasItem = new View(drawStyle)
        canvasItem.draw(ctx, 0)
        return canvasItem
      },
      text: (ctx) => {
        canvasItem = new Text(drawStyle, target.children[0].text)
        canvasItem.draw(ctx, 0)
        return canvasItem
      },
      image: (ctx) => {
        let src
        (src = target.data.props) && (src = src.src || '')
        canvasItem = new Img(drawStyle, src)
        canvasItem.draw(ctx, 0, this)
        return canvasItem
      }
    }[key]
  }

  /**
   * traverse dom by BFS
   * @param stack
   * @param ctx
   */
  traverse(stack, ctx) {
    while (stack.length) {
      let vnode = stack.shift()
      this.renderItem(vnode, ctx || this._ctx, !ctx)
      /**
       * check need traverse or not
       */
      if (!vnode.children || vnode.tag === 'text' || vnode.tag === 'scrollItem') {
        continue
      }

      vnode.children.forEach((node) => {
        stack.push(node)
      })
    }
  }

  /**
   * render canvas item
   * @param item: canvas item
   * @param ctx: canvas context
   * @param collect: need collect to canvasItemPool
   */
  renderItem(item, ctx, collect) {
    let canvasItem = new ProxyPolyfill(item, {get: this.renderProxy.bind(this)})[item.tag](ctx)
    this.event.addEvent(canvasItem, item.data.on || {})
    if (item.tag !== 'scrollView' && collect) {
      this.id++
      canvasItemPool.add(this.id, canvasItem)
    }
  }
}

let ProxyPolyfill = (target, handler) => {
  let proxy = {}
  Object.defineProperty(proxy, target.tag, {
    get: () => {
      return handler.get(target, target.tag)
    }
  })
  return proxy
}


let lastFrameTime = 0
let doAnimationFrame = function (callback) {
  if (constants.IN_BROWSER) {
    return requestAnimationFrame(callback)
  }
  let currTime = new Date().getTime()
  let timeToCall = Math.max(0, 16 - (currTime - lastFrameTime))
  let id = setTimeout(function () {
    callback(currTime + timeToCall)
  }, timeToCall)
  lastFrameTime = currTime + timeToCall
  return id
}



