/**
 * @author muwoo
 * Date: 2018/7/14
 * desc: cache canvas group, to improve performance
 * render one group replace render every item one by one
 * but use this have to create a canvas dom every time.
 * So it needs later optimization
 */
import {Super} from './super'
import {Canvas, scrollItemPool} from '../utils'

export class ScrollItem extends Super {
  constructor(drawStyle, vnode, mainRender) {
    super(drawStyle)
    this.stack = vnode.children
    this.cacheCanvas = new Canvas(this.width, this.height)
    this.mainRender = mainRender
    this.children = []
  }

  init () {
    if(this.children.length) {
      for (let child of this.children) {
        child.draw(this.cacheCanvas._ctx, 0)
      }
    } else {
      this.mainRender.traverse({
        stack: this.stack,
        ctx: this.cacheCanvas._ctx,
        scrollItem: this
      })
    }
  }

  draw(ctx, scrollTop) {
    if (this.isVisible(scrollTop)) {
      return
    }
    !this.render && this.init()
    ctx.drawImage(this.cacheCanvas._canvas, this.startX, this.startY - scrollTop, this.width, this.height)
    this.render = true
  }

  rePaint () {
    this.render = false;
    // this.cacheCanvas._ctx.clearRect(0, 0, this.width, this.height)
  }
}
