/**
 * @author muwoo
 * Date: 2018/8/7
 */
import {constants, imgCachePool} from '../utils'

/**
 * adapter for browser of weixin Mini Program
 */
class RenderAdapter {
  constructor () {
    this.platform = constants.IN_BROWSER ? 'browser' : 'wx'
  }
  renderText (instance, ctx, scrollTop) {
    let renderFn = {
      browser () {
        ctx.fillStyle = instance.fillStyle
        ctx.textBaseline = instance.textBaseline
        ctx.font = instance.font
        ctx.textAlign = instance.textAlign
        let distText = instance.filterText(ctx, instance.text)
        instance.width = instance.width || ctx.measureText(distText).width
        let drawY = instance.startY - scrollTop
        let drawX = instance.startX
        if (instance.drawStyle.textAlign === 'right') {
          drawX += instance.width
        }
        if (instance.drawStyle.textAlign === 'center') {
          drawX += instance.width / 2
        }
        ctx.fillText(
          distText,
          drawX,
          drawY
        )
      },
      wx () {
        ctx.setFillStyle(instance.fillStyle)
        ctx.setTextBaseline(instance.textBaseline)
        ctx.font = instance.font
        let distText = instance.filterText(ctx, instance.text)
        instance.width = instance.width || ctx.measureText(distText).width
        let drawY = instance.startY - scrollTop
        let drawX = instance.startX
        if (instance.drawStyle.textAlign === 'right') {
          drawX += instance.width
        }
        if (instance.drawStyle.textAlign === 'center') {
          drawX += instance.width / 2
        }
        ctx.fillText(
          distText,
          drawX,
          drawY
        )
      }
    }
    renderFn[this.platform]()
  }

  renderImage (instance, ctx, scrollTop, mainInstance) {
    let renderFn = {
      browser () {
        // check cache
        if (instance.render || (instance.img = imgCachePool.get(this.src))) {
          return instance.drawImg(ctx, scrollTop)
        }

        // load Img
        instance.img = new Image()
        instance.img.onload = () => {
          if (instance.isVisible(constants.scrollerTop)) {
            return
          }
          instance.render = true
          /**
           * checkout img if has be loaded
           */
          if (!!imgCachePool.get(instance.src)) {
            return mainInstance.rePaint(constants.scrollerTop)
          }
          instance.drawImg(ctx, scrollTop)
        }
        instance.img.crossOrigin = true
        instance.img.src = instance.src
        imgCachePool.add(instance.src, instance.img)
      },
      wx () {
        wx.getImageInfo({
          src: instance.src,
          success: function (res) {
            ctx.drawImage(
              res.path,
              instance.startX,
              instance.startY - scrollTop,
              instance.width,
              instance.height)
            ctx.draw(true)
          }
        })
      }
    }
    renderFn[this.platform]()
  }

  renderView (instance, ctx, scrollTop) {
    let renderFn = {
      browser () {
        ctx.fillStyle = instance.fillStyle
        ctx.strokeStyle = instance.strokeStyle
        ctx.lineWidth = instance.lineWidth
      },
      wx () {
        ctx.setFillStyle(instance.fillStyle)
        ctx.setStrokeStyle(instance.strokeStyle)
        ctx.setLineWidth(instance.lineWidth)
      }
    }
    renderFn[this.platform]()
  }
}

export default new RenderAdapter()
