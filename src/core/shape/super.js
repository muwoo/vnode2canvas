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
  constructor(drawStyle) {
    this.render = false
    this.drawStyle = Object.assign({}, defaultStyle, drawStyle)
    this.startX = this.drawStyle.left
    this.startY = this.drawStyle.top
    this.width = this.drawStyle.width
    this.height = this.drawStyle.height
    this.fillStyle = this.drawStyle.fill || '#fff'
  }
  isInPath (point) {
    if (
      this.render &&
      point.offsetX >= this.startX &&
      point.offsetX <= this.width + this.startX &&
      point.offsetY >= this.startY &&
      point.offsetY <= this.height + this.startY) {
      return true
    }
    return false
  }

  isVisible (scrollTop) {
    return this.startY - scrollTop + this.height <= 0 || this.startY - scrollTop > window.innerHeight
  }
}
