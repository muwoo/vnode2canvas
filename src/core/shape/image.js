/**
 * @author muwoo
 * Date: 2018/7/12
 */
import {Super} from './super'
import renderAdapter from '../renderAdapter'


export class Img extends Super {
  constructor(drawStyle, src) {
    super(drawStyle)
    this.src = src
    this.img = null
  }

  drawImg (ctx, scrollTop) {
    ctx.drawImage(
      this.img,
      this.startX,
      this.startY - scrollTop,
      this.width,
      this.height
    )
  }

  draw(ctx, scrollTop, mainInstance) {
    // check visible
    if (this.isVisible(scrollTop)) {
      return
    }
    renderAdapter.renderImage(this, ctx, scrollTop, mainInstance)
  }
}
