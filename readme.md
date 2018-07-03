# vnode2canvas

Vue based on virtual dom to render canvas

# example
```js
new Vue({
  el: '#app',
  data: {
    msg: 'hello world'
  },
  renderCanvas(h) {
    return h('div', {
      "style": {
        padding: '50px',
        color: 'red'
      }
    }, [
      h('span', this.msg)
    ])
  }
})
```