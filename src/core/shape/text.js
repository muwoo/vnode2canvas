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

  draw(ctx, scrollTop) {
    if (this.isVisible(scrollTop)) {
      return
    }
    ctx.fillStyle = this.fillStyle
    ctx.textBaseline = 'top'
    ctx.font = `${this.font}px ${constants.DEFAULT_FONT_FAMILY}`;
    ctx.textAlign = this.drawStyle.textAlign || 'left'
    let distText = this.filterText(ctx, this.text)
    this.width = this.width || ctx.measureText(distText).width
    let drawY = this.startY - scrollTop
    let drawX = this.startX
    if (ctx.textAlign === 'right') {
      drawX += this.width
    }
    if (ctx.textAlign === 'center') {
      drawX += this.width / 2
    }
    ctx.fillText(
      distText,
      drawX,
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
  filterText(ctx, text) {
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
