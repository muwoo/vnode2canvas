/**
 * @author muwoo
 * Date: 2018/7/2
 */
import computeLayout from 'css-layout'

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
  }

  clearCanvas() {
    this.vm.$ctx.clearRect(0, 0, this.vm.$canvas.width, this.vm.$canvas.height);
  }

  vnode2canvas() {
    this.traverse(this.statck)
    document.body.appendChild(this.vm.$canvas)
  }

  renderProxy(target, key) {
    target.data = target.data || {}
    let drawStyle = target.data.style || {}
    this.vm.$ctx.fillStyle = drawStyle.fill || '#fff'
    this.vm.$ctx.font='12px Helvetica Neue,Helvetica,Arial,PingFangSC-Regular,Microsoft YaHei,SimSun,sans-serif';
    return {
      view: () => {
        this.vm.$ctx.fillRect(
          drawStyle.left * this.rate,
          drawStyle.top * this.rate,
          drawStyle.width * this.rate,
          drawStyle.height * this.rate
        )
      },
      text: () => {
        this.vm.$ctx.textBaseline = 'top'
        let font = drawStyle.fontSize || 12
        this.vm.$ctx.font=`${font}px Helvetica Neue,Helvetica,Arial,PingFangSC-Regular,Microsoft YaHei,SimSun,sans-serif`;
        this.vm.$ctx.fillText(
          target.children[0].text,
          drawStyle.left * this.rate,
          drawStyle.top * this.rate
        )
      },
      image: () => {
        let props = target.data.props || {}
        let src = props.src || ''
        let image = new Image()
        image.onload = () => {
          this.vm.$ctx.drawImage(
            image,
            drawStyle.left * this.rate,
            drawStyle.top * this.rate,
            drawStyle.width * this.rate,
            drawStyle.height * this.rate
          )
        }
        image.src = src
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



