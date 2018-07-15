/**
 * @author muwoo
 * Date: 2018/7/14
 */
import {Super} from './super'
import {Canvas} from '../index'

export class ScrollItem extends Super {
  constructor(drawStyle, vnode) {
    super(drawStyle)
    this.render = false
    this.stack = vnode.children
    this.cacheCanvas = new Canvas(this.width, this.height)
  }

  createCacheCanvas (mainRender) {
    mainRender.traverse(this.stack, this.cacheCanvas._ctx)
  }

  draw(ctx, scrollTop, visibleHeight) {
    if (this.isVisible(scrollTop, visibleHeight)) {
      return
    }
    ctx.drawImage(this.cacheCanvas._canvas, this.startX, this.startY - scrollTop, this.width, this.height)
    this.render = true
  }
}
