/**
 * @author muwoo
 * Date: 2018/7/11
 */
import {Super} from './super'

export class View extends Super {
  constructor(drawStyle) {
    super(drawStyle)
  }

  draw(ctx, scrollTop) {
    if (this.isVisible(scrollTop)) {
      return
    }
    ctx.fillStyle = this.fillStyle
    ctx.strokeStyle = this.drawStyle.borderColor || '#000';
    ctx.lineWidth = this.drawStyle.borderWidth || 1;

    this.drawStyle.fill ?
      ctx.fillRect(this.startX, this.startY - scrollTop, this.width, this.height) :
      ctx.strokeRect(this.startX, this.startY - scrollTop, this.width, this.height)

    this.render = true
  }
}
