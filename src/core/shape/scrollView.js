import {Super} from "./super";
import {Scroller} from "scroller";
import {Canvas} from '../index'

/**
 * @author muwoo
 * Date: 2018/7/13
 */
export class ScrollView  extends Super  {
  constructor (ctx, drawStyle, canvas, instance) {
    super(drawStyle)
    this.ctx = ctx
    this.render = false
    this.canvas = canvas
    this.scroller = null
    this.scrollHeight = drawStyle.scrollHeight
    this.items = null
    this.instance = instance
  }

  draw ({stack}) {
    this.items = stack
    this.createScroller()
    this.updateScrollingDimensions()
    this.render = true
    this.removeListener()
    this.bindListener()
  }

  reRender (top) {
    this.instance.clearCanvas()
    let offCanvas = new Canvas(this.canvas.width, this.canvas.height)
    this.items.forEach((item) => {
      item.shape.draw({top, ctx: offCanvas._ctx, stack: this.items})
    })

    this.ctx.drawImage(offCanvas._canvas, 0, 0)
  }

  bindListener () {
    window.addEventListener('touchstart', this.handleTouchStart.bind(this))
    window.addEventListener('touchmove', this.handleTouchMove.bind(this))
    window.addEventListener('touchend', this.handleTouchEnd.bind(this))
    window.addEventListener("touchcancel", this.handleTouchEnd.bind(this))
  }

  removeListener () {
    window.removeEventListener('touchstart', this.handleTouchStart)
    window.removeEventListener('touchmove', this.handleTouchMove)
    window.removeEventListener('touchend', this.handleTouchEnd)
    window.removeEventListener("touchcancel", this.handleTouchEnd)
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
    if (this.render) {
      this.reRender(Math.floor(top))
    }
  }

  updateScrollingDimensions () {
    this.scroller.setDimensions(this.width, this.height, this.width, this.scrollHeight);
    console.log(this.width, this.height, this.width, this.scrollHeight)
  }
}