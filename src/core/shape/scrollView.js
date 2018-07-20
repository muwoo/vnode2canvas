import {Super} from './super'
import {Scroller} from 'scroller'
import {constants, canvasItemPool} from '../utils'

let startHandler = null
let moveHandler = null
let endHandler = null
let timer = null

export class ScrollView  extends Super  {
  constructor (drawStyle) {
    super(drawStyle)
    this.scroller = null
    /**
     * Avoid duplication of creation using the same off screen canvas
     * @type {null}
     */
    this.mainInstance = null
    startHandler = startHandler || this.handleTouchStart.bind(this)
    moveHandler = moveHandler || this.handleTouchMove.bind(this)
    endHandler = endHandler || this.handleTouchEnd.bind(this)
  }

  draw (mainRender) {
    this.mainInstance = mainRender
    this.createScroller()
    this.updateScrollingDimensions()
    this.render = true
    this.removeListener()
    this.bindListener()
  }

  bindListener () {
    window.addEventListener('touchstart', startHandler)
    window.addEventListener('touchmove', moveHandler)
    window.addEventListener('touchend', endHandler)
  }

  removeListener () {
    window.removeEventListener('touchstart', startHandler)
    window.removeEventListener('touchmove', moveHandler)
    window.removeEventListener('touchend', endHandler)
  }

  handleTouchStart (e) {
    if (this.scroller) {
      this.scroller.doTouchStart(e.touches, e.timeStamp)
    }
  }

  handleTouchMove (e) {
    if (e.touches[0] && e.touches[0].target && e.touches[0].target.tagName.match(/input|textarea|select/i)) {
      return;
    }
    if (this.scroller) {
      e.preventDefault()
      this.scroller.doTouchMove(e.touches, e.timeStamp, e.scale)
    }
  }

  handleTouchEnd (e) {
    if (this.scroller) {
      this.scroller.doTouchEnd(e.timeStamp)
    }
  }

  createScroller () {
    let options = {
      scrollingX: this.drawStyle.scrollingX === undefined ? false :this.drawStyle.scrollingX,
      scrollingY: this.drawStyle.scrollingY === undefined ? true :this.drawStyle.scrollingY
    }
    this.scroller = new Scroller(this.handleScroll.bind(this), options)
  }

  handleScroll (left, top) {
    /**
     * When rendering, it needs to scroll to the previous position.
     */
    constants.top = constants.scrollTop + top
    constants.scrollerTop = top
    this.mainInstance.rePaint(top)
  }

  updateScrollingDimensions () {
    this.scroller.setDimensions(this.width, this.height, this.width, this.drawStyle.scrollHeight)
    this.scroller.scrollTo(0, constants.scrollTop)
  }
}