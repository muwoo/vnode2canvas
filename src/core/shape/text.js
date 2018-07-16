/**
 * @author muwoo
 * Date: 2018/7/12
 */
import {Super} from './super'
import {constants} from '../utils'

export class Text extends Super {
  constructor(drawStyle, text) {
    super(drawStyle)
    this.text = text
    this.font = this.drawStyle['font-size'] || this.drawStyle['fontSize'] || 12
    this.height = this.font
  }

  draw(ctx, scrollTop, visibleHeight) {
    if (this.isVisible(scrollTop, visibleHeight)) {
      return
    }
    ctx.fillStyle = this.fillStyle
    ctx.textBaseline = 'top'
    ctx.font = `${this.font}px ${constants.DEFAULT_FONT_FAMILY}`;
    let distText = this.filterText(ctx, this.text)
    this.width = ctx.measureText(distText).width
    let drawY = this.startY - scrollTop
    ctx.fillText(
      distText,
      this.startX,
      drawY
    )
    this.render = true
  }

  /**
   * clip text
   * @param ctx
   * @param text
   * @returns {*}
   */
  filterText (ctx, text) {
    if (this.drawStyle.ellipse && this.drawStyle.width) {
      let filterText = ''
      for (let char of text.split('')) {
        if (ctx.measureText(filterText + '...').width >= this.drawStyle.width) {
          filterText += '...'
          break
        }
        filterText += char
      }
      return filterText
    }
    return text
  }
}
