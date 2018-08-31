/**
 * @author muwoo
 * Date: 2018/7/31
 */
import vnode2canvas from '../../src/index'
import Vue from 'vue'

Vue.use(vnode2canvas)

let app = new Vue({
  canvasOptions: {
    width: 200,
    height: 400
  },
  renderCanvas(h) {
    return h('view', 'test')
  }
}).$mount()

describe('test init mixins', () => {
  it('get instance', () => {
    let instance = app.getRenderInstance()
    expect([instance.width, instance.height]).toEqual([200, 400])
    expect(instance._canvas).not.toBeNull()
    expect(instance._ctx).not.toBeNull()
  })
  it('get render instance', () => {
    let render = app.getRender()
    expect(render).not.toBeNull()
  })
})
