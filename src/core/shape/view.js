/**
 * @author muwoo
 * Date: 2018/7/11
 */
import {Super} from './super'

export class View extends Super {
  constructor(drawStyle) {
    super(drawStyle)
  }

  draw(ctx, scrollTop, visibleHeight) {
    if (this.isVisible(scrollTop, visibleHeight)) {
      return
    }
    ctx.fillStyle = this.fillStyle
    ctx.fillRect(this.startX, this.startY - scrollTop, this.width, this.height)
    this.render = true
  }
}
