/**
 * @author muwoo
 * Date: 2018/7/2
 */
Vue.use(window.RenderCanvas)

new Vue({
  el: '#app',
  data: {
    msg: 'hello',
    renderWidth: 'full',
    renderHeight: 'full'
  },
  mounted () {
    setTimeout(() => {
      this.msg = 'world'
    }, 1000)
  },
  renderCanvas(h) {
    return h('div', {
      "style": {
        padding: '50px',
        color: 'red'
      }
    }, [
      h('span', this.msg),
      h('p', [
        h('span', 'world')
      ])
    ])
  }
})
