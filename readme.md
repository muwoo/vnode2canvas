# vnode2canvas

Rendering virtual DOM into canvas based on Vue plugin

# example

example url: [demo](https://muwoo.github.io/vnode2canvas/)

### 1. render scroll list

A rolling list based on scroller to support lazy list loading.

![qq20180716-181201-hd](https://user-images.githubusercontent.com/21073039/42753528-d80f8d62-8923-11e8-8a36-2a3bef66c910.gif)

##### useage:
```js
new Vue({
  el: '#app',
  data: {
    dataJSON: [
      // ...
    ]
  },
  methods: {
    getStyle (type, i) {
      return {
        img: {
          left: 10,
          top: 10 + 110 * i,
          width: 100,
          height: 100,
          fill: '#000'
        },
        title: {
          left: 120,
          top: 10 + 110 * i,
          fill: '#000',
          fontSize: 18,
          width: 150,
          ellipse: true
        },
        desc: {
          left: 120,
          top: 50 + 110 * i,
          fill: '#999'
        },
        date: {
          left: 120,
          top: 80 + 110 * i,
          fill: '#999'
        }
      }[type]
    }
  },
  canvasOptions () {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  },
  renderCanvas(h) {
    return h('scrollView', {
      style: {
        scrollHeight: this.dataJSON.length * 110,
        width: window.innerWidth,
        height: window.innerHeight
      }
    }, this.dataJSON.map((item, i) => {
      return h('view',
        [
        h('image', {
          props: {
            src: item.img
          },
          style: this.getStyle('img', i)
        }),
        h('text', {
          style: this.getStyle('title', i),
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
})

```

### 2. events

Support the following events:
1. `click`
2. `mouseup`
3. `mousedown`
4. to be continue...


