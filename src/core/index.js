/**
 * @author muwoo
 * Date: 2018/7/2
 */
import {Event} from './event'
import {View} from './shape/view'
import {Img} from './shape/image'
import {Text} from './shape/text'
import {ScrollView} from "./shape/scrollView";
import {ScrollItem} from './shape/scrollItem'

export class Canvas {
  constructor (width, height, scale) {
    if (!this._canvas) {
      this._canvas = document.createElement('canvas')
    }

    this.width = width
    this.height = height
    this.scale = scale || window.devicePixelRatio

    this._canvas.width = this.width * this.scale
    this._canvas.height = this.height * this.scale
    this._canvas.style.width = this.width + 'px'
    this._canvas.style.height = this.height + 'px'
    this._canvas.getContext('2d').scale(this.scale, this.scale)
    this._ctx = this._canvas.getContext('2d')
  }
}

export class Render extends Canvas{
  constructor(width, height, vnode) {
    super(width, height)
    this.statck = [vnode]
    this.event = new Event(this._ctx)
    this.event.init(this._canvas)
  }

  clearCanvas() {
    this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
  }

  vnode2canvas() {
    this.traverse(this.statck)
    document.body.appendChild(this._canvas)
  }

  getImportStyle(vnode) {
    let style = {}
    let vStyle = vStyle || {}
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

  renderProxy(target, key) {
    target.data = target.data || {}
    let clickEvent
    (clickEvent = target.data.on) && (clickEvent = clickEvent.click)
    let importStyle = this.getImportStyle(target)
    let drawStyle = {...importStyle, ...target.data.style} || {...importStyle}
    let canvasItem = null
    return {
      scrollView: () => {
        canvasItem = new ScrollView(drawStyle)
        canvasItem.draw(this)
        return canvasItem
      },
      scrollItem: (ctx) => {
        canvasItem = new ScrollItem(drawStyle, target)
        canvasItem.createCacheCanvas(this)
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
        canvasItem.draw(ctx, 0)
        return canvasItem
      }
    }[key]
  }

  traverse(stack, ctx) {
    while (stack.length) {
      let vnode = stack.shift()
      this.renderItem(vnode, ctx || this._ctx, !ctx)
      if (!vnode.children || vnode.tag === 'text' || vnode.tag === 'scrollItem') {
        continue
      }

      vnode.children.forEach((node) => {
        stack.push(node)
      })
    }
  }

  renderItem (item, ctx, collect) {
    let canvasItem = new Proxy(item, {get: this.renderProxy.bind(this)})[item.tag](ctx)
    if (item.tag !== 'scrollView' && collect) {
      this.event.addEvent(canvasItem)
    }
  }

}



