/**
 * @author muwoo
 * Date: 2018/7/12
 */
import {Super} from './super'
import {imgCachePool} from '../utils/cachePool'
import {constants} from '../utils/index'


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

  draw(ctx, scrollTop, heigth, mainView) {
    if (this.isVisible(scrollTop)) {
      return
    }
    if (this.render || (this.img = imgCachePool.get(this.src))) {
      return this.drawImg(ctx, scrollTop)
    }
    this.img = new Image()
    this.img.onload = () => {
      this.render = true
      this.drawImg(ctx, scrollTop)
      !imgCachePool.get(this.src) && mainView.reRender(constants.top)
      imgCachePool.add(this.src, this.img)
    }
    this.img.src = this.src
  }
}
