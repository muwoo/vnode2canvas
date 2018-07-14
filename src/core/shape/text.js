/**
 * @author muwoo
 * Date: 2018/7/12
 */
import {Super} from './super'

export class Text extends Super {
  constructor(drawStyle, text) {
    super(drawStyle)
    this.text = text
    this.font = this.drawStyle['font-size'] || 12
    this.height = this.font
    this.render = false
    this.font_family = 'Helvetica Neue,Helvetica,Arial,PingFangSC-Regular,Microsoft YaHei,SimSun,sans-serif'
  }

  draw(ctx, scrollTop, visibleHeight) {
    if (this.isVisible(scrollTop, visibleHeight)) {
      return
    }
    ctx.fillStyle = this.fillStyle
    ctx.textBaseline = 'top'
    ctx.font = `${this.font}px ${this.font_family}`;
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
