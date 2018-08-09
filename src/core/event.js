/**
 * @author muwoo
 * Date: 2018/7/11
 */
import {constants} from './utils'

export class Event {
  constructor (ctx) {
    this.ctx = ctx || null
    this.stack = []
    this.eventHandler = this.eventHandler || this.emit.bind(this)
  }
  init (canvas) {
    if (constants.IN_BROWSER) {
      canvas.removeEventListener('click', this.eventHandler)
      canvas.removeEventListener('mousedown', this.eventHandler)
      canvas.removeEventListener('mouseup', this.eventHandler)
      canvas.addEventListener('click', this.eventHandler)
      canvas.addEventListener('mousedown', this.eventHandler)
      canvas.addEventListener('mouseup', this.eventHandler)
    }
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
