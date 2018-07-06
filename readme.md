# vnode2canvas

Vue based on virtual dom to render canvas

# example
```js
renderCanvas(h) {
  return h('view', this.dataJSON.map((item, i) => {
    return h('view', [
      h('image', {
        props: {
          src: item.img
        },
        style: this.getStyle('img', i)
      }),
      h('text', {
        style: this.getStyle('title', i)
      }, item.title),
      h('text', {
        style: this.getStyle('desc', i)
      }, item.desc),
      h('text', {
        style: this.getStyle('date', i)
      }, new Date().toLocaleDateString())
    ])

  }))
}
```

