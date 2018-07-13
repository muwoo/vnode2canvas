import {Super} from "./super";
import {Scroller} from "scroller";

/**
 * @author muwoo
 * Date: 2018/7/13
 */
export class ScrollView  extends Super  {
  constructor (ctx, drawStyle, canvas, renderInstance) {
    super(drawStyle)
    this.ctx = ctx
    this.render = false
    this.canvas = canvas
    this.scroller = null
    this.scrollHeight = drawStyle.scrollHeight
    this.renderInstance = renderInstance
  }

  draw () {
    this.createScroller()
    this.updateScrollingDimensions()
    this.render = true
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
      this.scrollTop += top
      this.updateTop(top)
      this.renderInstance.clearCanvas()
      this.renderInstance.reRender()
    }
  }

  updateScrollingDimensions () {
    this.scroller.setDimensions(this.width, this.height, this.width, this.scrollHeight);
  }
}