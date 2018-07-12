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
    canvas.addEventListener('click', (e) => {
      this.dispatch(e)
    })
  }
  addEvent (shape, fn) {
    this.stack.push({
      shape: shape,
      handler: fn
    })
  }
  dispatch (point) {
    this.stack.forEach((item) => {
      if (item.handler && item.shape.isInPath(point)) {
        item.handler(point, item)
      }
    })
  }
}
