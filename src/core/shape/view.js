/**
 * @author muwoo
 * Date: 2018/7/11
 */
import {Super} from './super'

export class View extends Super {
  constructor(ctx, drawStyle, rate) {
    super(drawStyle, rate)
    this.ctx = ctx
    this.render = false
  }

  draw() {
    this.ctx.fillRect(this.startX, this.startY, this.width, this.height)
    this.render = true
  }
}
