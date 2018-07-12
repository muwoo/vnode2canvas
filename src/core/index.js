/**
 * @author muwoo
 * Date: 2018/7/2
 */
import {Event} from './event'
import {View} from './shape/view'
import {Img} from './shape/image'
import {Text} from './shape/text'

export function createCanvas(vm) {
  vm.$canvas = document.createElement('canvas')
  vm.$canvas.width = vm.renderWidth === 'full' ? window.innerWidth : vm.renderWidth
  vm.$canvas.height = vm.renderHeight === 'full' ? window.innerHeight : vm.renderHeight
  vm.$ctx = vm.$canvas.getContext('2d')
}

export class Render {
  constructor(vm, vnode) {
    this.vm = vm
    this.statck = [vnode]
    this.rate = vm.$canvas.width / 375
    this.event = new Event(vm.$ctx)
    this.event.init(vm.$canvas)
  }

  clearCanvas() {
    this.vm.$ctx.clearRect(0, 0, this.vm.$canvas.width, this.vm.$canvas.height);
  }

  vnode2canvas() {
    this.traverse(this.statck)
    document.body.appendChild(this.vm.$canvas)
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
    this.vm.$ctx.fillStyle = drawStyle.fill || '#fff'
    this.vm.$ctx.font = `${font}px Helvetica Neue,Helvetica,Arial,PingFangSC-Regular,Microsoft YaHei,SimSun,sans-serif`;
    return {
      view: () => {
        let view = new View(this.vm.$ctx, drawStyle, this.rate)
        view.draw()
        this.event.addEvent(view, clickEvent)
      },
      text: () => {
        let text = new Text(this.vm.$ctx, drawStyle, this.rate)
        text.draw(target.children[0].text)
        this.event.addEvent(text, clickEvent)
      },
      image: () => {
        let src
        (src = target.data.props) && (src = src.src || '')
        let image = new Img(this.vm.$ctx, drawStyle, this.rate)
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



