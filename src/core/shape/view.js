/**
 * @author muwoo
 * Date: 2018/7/11
 */
import {Super} from './super'
import renderAdapter from '../renderAdapter'

export class View extends Super {
  constructor(drawStyle) {
    super(drawStyle)
    this.strokeStyle = this.drawStyle.borderColor || '#000'
    this.lineWidth = this.drawStyle.borderWidth || 1
  }

  draw(ctx, scrollTop) {
    if (this.isVisible(scrollTop)) {
      return
    }
    ctx.save()
    this.radius && this.arcByRadius(ctx, scrollTop)
    renderAdapter.renderView(this, ctx, scrollTop)
    this.drawStyle.fill ?
      ctx.fillRect(this.startX, this.startY - scrollTop, this.width, this.height) :
      ctx.strokeRect(this.startX, this.startY - scrollTop, this.width, this.height)
    ctx.restore()
    this.render = true
  }
}
