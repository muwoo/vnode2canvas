/**
 * @author muwoo
 * Date: 2018/7/2
 */
import {Event} from './event'
import {View} from './shape/view'
import {Img} from './shape/image'
import {Text} from './shape/text'

class Canvas {
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
    let font = 12 * this.rate
    this._ctx.fillStyle = drawStyle.fill || '#fff'
    this._ctx.font = `${font}px Helvetica Neue,Helvetica,Arial,PingFangSC-Regular,Microsoft YaHei,SimSun,sans-serif`;
    return {
      view: () => {
        let view = new View(this._ctx, drawStyle)
        view.draw()
        this.event.addEvent(view, clickEvent)
      },
      text: () => {
        let text = new Text(this._ctx, drawStyle)
        text.draw(target.children[0].text)
        this.event.addEvent(text, clickEvent)
      },
      image: () => {
        let src
        (src = target.data.props) && (src = src.src || '')
        let image = new Img(this._ctx, drawStyle)
        image.draw(src)
        this.event.addEvent(image, clickEvent)
      }
    }[key]
  }

  traverse(stack) {
    while (stack.length) {
      let vnode = stack.shift()
      new Proxy(vnode, {get: this.renderProxy.bind(this)})[vnode.tag]()
      if (!vnode.children || vnode.tag === 'text') {
        continue
      }

      vnode.children.forEach((node) => {
        stack.push(node)
      })
    }
  }
}



