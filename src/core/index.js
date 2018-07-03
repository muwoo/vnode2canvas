/**
 * @author muwoo
 * Date: 2018/7/2
 */
import computeLayout from 'css-layout'

export function createCanvas(vm) {
  vm.$canvas = document.createElement('canvas')
  vm.$canvas.width = vm.renderWidth === 'full' ? window.screen.width : vm.renderWidth
  vm.$canvas.height = vm.renderHeight === 'full' ? window.screen.height : vm.renderHeight
  vm.$ctx = vm.$canvas.getContext('2d')
}

export class Render {
  constructor(vm, vnode) {
    this.rootNode = vnode
    this.vm = vm
    this.nodeTree = {} // 存储css规则样式
    this.id = 1 // 定义css渲染id
    this.x = 0 // 位置x轴坐标
    this.y = 0 // 位置y轴坐标
    this.color = '#000' // 默认渲染颜色
    this.layout = {} // 当前元素的布局规则
    this.backgroundColor = '#fff' // 背景色
    this.parentFont = '' // 连字，统计渲染的字符长度
    this.preId = 0 // 渲染文本的id
    this.fontSize = 12
  }

  clearCanvas() {
    this.vm.$ctx.clearRect(0, 0, this.vm.$canvas.width, this.vm.$canvas.height);
  }

  vnode2canvas() {
    this.nodeTree = this.getStyleTree(this.rootNode)
    this.createReact(this.rootNode, this.nodeTree)
    this.mapvnode(this.rootNode, this.nodeTree)
    document.body.appendChild(this.vm.$canvas)
  }

  createReact(node) {
    let targetRule = JSON.parse(JSON.stringify(this.nodeTree))
    computeLayout(targetRule)

    /**
     * 获取当前渲染元素的转换样式规则
     * @param rules
     */
    let getRule = (rules) => {
      let parent = rules
      rules.children.forEach(rule => {
        if (rule.id === this.id) {
          this.layout = rule.layout
          this.backgroundColor = rule.style.background || rule.style.backgroundColor ||  this.backgroundColor
          this.color = rule.style.color || this.color
          this.x = parent.layout.left + rule.layout.left
          this.y = parent.layout.top + rule.layout.top
          this.fontSize = rule.style.fontSize || this.fontSize
        } else {
          rule.children && getRule(rule)
        }
      })
    }
    if (targetRule.id === this.id) {
      this.backgroundColor = targetRule.style.background || targetRule.style.backgroundColor || '#fff'
      this.layout = targetRule.layout
      this.x = targetRule.layout.left
      this.y = targetRule.layout.top
      this.color = targetRule.style.color || this.color
    } else {
      getRule(targetRule)
    }
    this.vm.$ctx.fillStyle = this.backgroundColor
    this.vm.$ctx.fillRect(this.x, this.y, this.layout.width, this.layout.height)
    this.id++
  }

  mapvnode(vnode, styleTree) {
    vnode.children.forEach((ch) => {
      if (ch.children) {
        let chStyleTree = this.getStyleTree(ch)
        styleTree.children.push(chStyleTree)
        this.createReact(ch, this.nodeTree)
        this.mapvnode(ch, chStyleTree)
      } else {
        this.createText(ch)
      }
    })
  }

  createText(node) {
    if (this.id - this.preId > 1 && this.preId) {
      this.parentFont = '';
    }
    this.vm.$ctx.textBaseline = 'hanging'
    this.vm.$ctx.fillStyle = this.color
    this.vm.$ctx.font=`${this.fontSize}px Georgia`;
    let textWidth = this.vm.$ctx.measureText(this.parentFont).width || 0
    this.vm.$ctx.fillText(node.text, this.x + textWidth, this.y)
    this.parentFont += node.text
    this.preId = this.id
  }

  getStyleTree(vnode) {
    let i
    if ((i = vnode.data) && (i = i.style)) {
      for (let key in i) {
        if (i.hasOwnProperty(key) && typeof i[key] === 'string' && i[key].indexOf('px') !== -1) {
          i[key] = parseInt(i[key])
        }
      }
      i.alignSelf = "stretch"
      i.marginTop = (['div', 'p'].indexOf(vnode.tag) !== -1) ? 20 : 0
    }
    return {
      id: this.id,
      style: vnode.data ? i : {alignSelf: "stretch"},
      children: []
    }
  }
}



