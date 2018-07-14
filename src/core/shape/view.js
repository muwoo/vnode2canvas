/**
 * @author muwoo
 * Date: 2018/7/11
 */
import {Super} from './super'

export class View extends Super {
  constructor(ctx, drawStyle) {
    super(drawStyle)
    this.render = false
  }

  draw(ctx, scrollTop, visibleHeight) {
    if (this.isVisible(scrollTop)) {
      return
    }
    ctx.fillRect(this.startX, this.startY - scrollTop, this.width, this.height)
    this.render = true
  }
}
