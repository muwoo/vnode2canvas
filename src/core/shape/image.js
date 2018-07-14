/**
 * @author muwoo
 * Date: 2018/7/12
 */
import {Super} from './super'

export class Img extends Super {
  constructor(drawStyle, src) {
    super(drawStyle)
    this.render = false
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

  draw(ctx, scrollTop, visibleHeight) {
    if (this.isVisible(scrollTop, visibleHeight)) {
      return
    }
    if (this.render) {
      return this.drawImg(ctx, scrollTop)
    }
    this.img = new Image()
    this.img.onload = () => {
      this.render = true
      this.drawImg(ctx, scrollTop)
    }
    this.img.src = this.src
  }
}
