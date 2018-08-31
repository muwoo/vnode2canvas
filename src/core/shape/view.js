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
    renderAdapter.renderView(this, ctx, scrollTop)
    this.render = true
  }
}
