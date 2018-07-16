/**
 * @author muwoo
 * Date: 2018/7/12
 */
import {Super} from './super'
import {imgCachePool, constants} from '../utils'


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

  draw(ctx, scrollTop, heigth, mainView) {
    // check visible
    if (this.isVisible(scrollTop)) {
      return
    }

    // check cache
    if (this.render || (this.img = imgCachePool.get(this.src))) {
      return this.drawImg(ctx, scrollTop)
    }

    // load Img
    this.img = new Image()
    this.img.onload = () => {
      this.render = true
      this.drawImg(ctx, scrollTop)
      // img loaded need to re-render canvas
      !!imgCachePool.get(this.src) && mainView && mainView.reRender(constants.top)
      imgCachePool.add(this.src, this.img)
    }
    this.img.src = this.src
  }
}
