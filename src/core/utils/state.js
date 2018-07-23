/**
 * @author muwoo
 * Date: 2018/7/23
 */
class State {
  constructor () {
    this.fillStyle = ''
    this.textBaseline = ''
    this.font = ''
    this.textAlign = ''
    this.strokeStyle = ''
    this.lineWidth = ''
  }

  changeState (ctx, state) {
    if (state.fillStyle && state.fillStyle !== this.fillStyle) {
      ctx.fillStyle = state.fillStyle
      this.fillStyle = state.fillStyle
    }
    if (state.textBaseline && state.textBaseline !== this.textBaseline) {
      ctx.textBaseline = state.textBaseline
      this.textBaseline = state.textBaseline
    }
    if (state.font && state.font !== this.font) {
      ctx.font = state.font
      this.font = state.font
    }
    if (state.textAlign && state.textAlign !== this.textAlign) {
      ctx.textAlign = state.textAlign
      this.textAlign = state.textAlign
    }
    if (state.strokeStyle && state.strokeStyle !== this.strokeStyle) {
      ctx.strokeStyle = state.strokeStyle
      this.strokeStyle = state.strokeStyle
    }
    if (state.lineWidth && state.lineWidth !== this.lineWidth) {
      ctx.strokeStyle = state.lineWidth
      this.lineWidth = state.lineWidth
    }
  }

}


export default new State()
