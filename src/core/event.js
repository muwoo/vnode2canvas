/**
 * @author muwoo
 * Date: 2018/7/11
 */
let eventHandler = null

export class Event {
  constructor (ctx) {
    this.ctx = ctx || null
    this.stack = []
    eventHandler = eventHandler || this.emit.bind(this)
  }
  init (canvas) {
    canvas.removeEventListener('click', eventHandler)
    canvas.removeEventListener('mousedown', eventHandler)
    canvas.removeEventListener('mouseup', eventHandler)
    canvas.addEventListener('click', eventHandler)
    canvas.addEventListener('mousedown', eventHandler)
    canvas.addEventListener('mouseup', eventHandler)
  }

  addEvent (shape, fns) {
    this.stack.push({
      shape: shape,
      handler: fns
    })
  }

  emit (point) {
    this.stack.forEach((item) => {
      if (item.handler[point.type] && item.shape.isInPath(point)) {
        item.handler[point.type](point, item)
      }
    })
  }
}
