import {Super} from "./super";
import {Scroller} from "scroller";
import {Canvas} from '../index'

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
    this.offCanvas = new Canvas(this.width, this.height)
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
      this.offCanvas._ctx.clearRect(0, 0, this.width, this.height)
      let stack = this.mainInstance.event.stack || []
      stack.forEach((item) => {
        // console.log(item)
        item.shape.draw(this.offCanvas._ctx, top, this.height)
      })
      this.mainInstance._ctx.drawImage(this.offCanvas._canvas, 0, 0, this.width, this.height)
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
    this.reRender(top)
  }

  updateScrollingDimensions () {
    this.scroller.setDimensions(this.width, this.height, this.width, this.drawStyle.scrollHeight)
  }
}