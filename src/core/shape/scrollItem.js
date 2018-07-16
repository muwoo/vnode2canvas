/**
 * @author muwoo
 * Date: 2018/7/14
 * desc: cache canvas group, to improve performance
 * render one group replace render every item one by one
 * but use this have to create a canvas dom every time.
 * So it needs later optimization
 */
import {Super} from './super'
import {Canvas} from '../utils/createCanvas'

export class ScrollItem extends Super {
  constructor(drawStyle, vnode) {
    super(drawStyle)
    this.stack = vnode.children
    this.cacheCanvas = new Canvas(this.width, this.height)
  }

  createCacheCanvas (mainRender) {
    mainRender.traverse(this.stack, this.cacheCanvas._ctx)
  }

  draw(ctx, scrollTop) {
    if (this.isVisible(scrollTop)) {
      return
    }
    ctx.drawImage(this.cacheCanvas._canvas, this.startX, this.startY - scrollTop, this.width, this.height)
    this.render = true
  }
}
