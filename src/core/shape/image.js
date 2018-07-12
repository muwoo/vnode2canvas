/**
 * @author muwoo
 * Date: 2018/7/12
 */
import {Super} from './super'

export class Img extends Super {
  constructor(ctx, drawStyle, rate) {
    super(drawStyle, rate)
    this.ctx = ctx
    this.render = false
  }

  draw(src) {
    let img = new Image()
    img.onload = () => {
      this.ctx.drawImage(
        img,
        this.startX,
        this.startY,
        this.width,
        this.height
      )
      this.render = true
    }
    img.src = src
  }
}
