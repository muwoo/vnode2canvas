/**
 * @author muwoo
 * Date: 2018/7/11
 */
const defaultStyle = {
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  width: 0,
  height: 0
}
export class Super {
  constructor(drawStyle, rate) {
    this.drawStyle = Object.assign({}, defaultStyle, drawStyle)
    this.rate = rate
    this.startX = this.drawStyle.left * this.rate
    this.startY = this.drawStyle.top * this.rate
    this.width = this.drawStyle.width * this.rate
    this.height = this.drawStyle.height * this.rate
  }

  isInPath(point) {
    if (
      this.render &&
      point.layerX >= this.startX &&
      point.layerX <= this.width + this.startX &&
      point.layerY >= this.startY &&
      point.layerY <= this.height + this.startY) {
      return true
    }
    return false
  }
}
