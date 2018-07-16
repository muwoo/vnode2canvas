/**
 * @author muwoo
 * Date: 2018/7/11
 */
export class Event {
  constructor (ctx) {
    this.ctx = ctx || null
    this.stack = []
  }
  init (canvas) {
    canvas.removeEventListener('click', this.dispatch)
    canvas.removeEventListener('mousedown', this.dispatch)
    canvas.removeEventListener('mouseup', this.dispatch)
    canvas.addEventListener('click', this.dispatch.bind(this))
    canvas.addEventListener('mousedown', this.dispatch.bind(this))
    canvas.addEventListener('mouseup', this.dispatch.bind(this))
  }

  addEvent (shape, fns) {
    this.stack.push({
      shape: shape,
      handler: fns
    })
  }

  dispatch (point) {
    this.stack.forEach((item) => {
      if (item.handler[point.type] && item.shape.isInPath(point)) {
        item.handler[point.type](point, item)
      }
    })
  }
}
