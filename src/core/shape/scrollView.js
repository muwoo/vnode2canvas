import {Super} from "./super"
import {Scroller} from "scroller"
import {canvasItemPool} from '../utils/cachePool'
import {constants} from '../utils'

/**
 * @author muwoo
 * Date: 2018/7/13
 */
export class ScrollView  extends Super  {
  constructor (drawStyle) {
    super(drawStyle)
    this.render = false
    this.scroller = null
    this.mainInstance = null
  }

  draw (mainRender) {
    this.mainInstance = mainRender
    this.createScroller()
    this.updateScrollingDimensions()
    this.render = true
    this.removeListener()
    this.bindListener()
  }

  reRender (top) {
    requestAnimationFrame(() => {
      this.mainInstance.clearCanvas()
      for (let cacheItem of canvasItemPool) {
        cacheItem.draw(this.mainInstance._ctx, top, this.height, this)
      }
      this.mainInstance.renderInstance.add(this.mainInstance._canvas)
    })
  }

  bindListener () {
    window.addEventListener('touchstart', this.handleTouchStart.bind(this))
    window.addEventListener('touchmove', this.handleTouchMove.bind(this))
    window.addEventListener('touchend', this.handleTouchEnd.bind(this))
  }

  removeListener () {
    window.removeEventListener('touchstart', this.handleTouchStart)
    window.removeEventListener('touchmove', this.handleTouchMove)
    window.removeEventListener('touchend', this.handleTouchEnd)
  }

  handleTouchStart (e) {
    if (this.scroller) {
      this.scroller.doTouchStart(e.touches, e.timeStamp);
    }
  }

  handleTouchMove (e) {
    if (this.scroller) {
      e.preventDefault();
      this.scroller.doTouchMove(e.touches, e.timeStamp, e.scale);
    }
  }

  handleTouchEnd (e) {
    if (this.scroller) {
      this.scroller.doTouchEnd(e.timeStamp);
    }
  }

  createScroller () {
    let options = {
      scrollingX: false,
      scrollingY: true
    };
    this.scroller = new Scroller(this.handleScroll.bind(this), options);
  }

  handleScroll (left, top) {
    constants.top = constants.scrollTop + top
    this.reRender(top)
  }

  updateScrollingDimensions () {
    this.scroller.setDimensions(this.width, this.height, this.width, this.drawStyle.scrollHeight)
    this.scroller.scrollTo(0, constants.scrollTop)
  }
}