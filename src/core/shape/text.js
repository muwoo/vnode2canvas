/**
 * @author muwoo
 * Date: 2018/7/12
 */
import {Super} from './super'

export class Text extends Super {
  constructor(ctx, drawStyle) {
    super(drawStyle)
    this.ctx = ctx
    this.render = false
  }

  draw(text) {
    this.ctx.textBaseline = 'top'
    let font = this.drawStyle['font-size'] || 12
    this.ctx.font = `${font}px Helvetica Neue,Helvetica,Arial,PingFangSC-Regular,Microsoft YaHei,SimSun,sans-serif`;
    let distText = this.filterText(text)
    this.ctx.fillText(
      distText,
      this.startX,
      this.startY
    )
    this.render = true
    this.width = this.ctx.measureText(distText).width
    this.height = font
  }
  filterText (text) {
    if (this.drawStyle.ellipse && this.drawStyle.width) {
      let filterText = ''
      for (let char of text.split('')) {
        if (this.ctx.measureText(filterText + '...').width >= this.drawStyle.width) {
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
