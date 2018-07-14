/**
 * @author muwoo
 * Date: 2018/7/12
 */
import {Super} from './super'

export class Img extends Super {
  constructor(ctx, drawStyle) {
    super(drawStyle)
    this.ctx = ctx
    this.render = false
    this.img = null
  }

  draw(src) {
    let top = 0
    if (typeof src === 'object') {
      top = src.top;
      this.ctx.drawImage(
        this.img,
        this.startX,
        this.startY - top,
        this.width,
        this.height
      )
    } else {
      this.img = new Image()
      this.img.onload = () => {
        this.ctx.drawImage(
          this.img,
          this.startX,
          this.startY - top,
          this.width,
          this.height
        )
        this.render = true
      }
      this.img.src = src
    }
  }
}
