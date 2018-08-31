/**
 * @author muwoo
 * Date: 2018/7/12
 */
import {Super} from './super'
import {constants} from '../utils'
import renderAdapter from '../renderAdapter'

export class Text extends Super {
  constructor(drawStyle, text) {
    super(drawStyle)
    this.text = text
    this.fontSize = parseInt((this.drawStyle['font-size'] || this.drawStyle['fontSize'] || 12) * constants.rate)
    this.height = this.fontSize
    this.textBaseline = 'top'
    this.font = `${this.fontSize}px ${constants.DEFAULT_FONT_FAMILY}`
    this.textAlign = this.drawStyle.textAlign || 'left'
  }

  draw(ctx, scrollTop) {
    if (this.isVisible(scrollTop)) {
      return
    }
    renderAdapter.renderText(this, ctx, scrollTop)
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
        if (ctx.measureText(filterText + '...').width / constants.rate >= this.drawStyle.width) {
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
