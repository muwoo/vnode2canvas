# vnode2canvas
<p align="center">
  <img src='https://img.shields.io/badge/npm-0.1.0-brightgreen.svg'>
  <img src='https://img.shields.io/badge/gzip-6.9KB-green.svg'>
  <img src='https://img.shields.io/badge/license-MIT-blue.svg'>
</p>

Rendering virtual DOM into canvas based on Vue plugin

`mpvue vnode2canvas` 使用文档请移步到这里[文档](https://github.com/muwoo/vnode2canvas/tree/master/examples/mpvue)

# example

example url: [demo](https://muwoo.github.io/vnode2canvas/)

![qq20180717-181303-hd](https://user-images.githubusercontent.com/21073039/42814168-f8b8c5e2-89f5-11e8-8d2a-26e60ce047ab.gif)

# usage

### install
```shell
npm i vnode2canvas --save
```

### use in Vue

First of all, you need to register `vnode2Canvas`

```js
import Vue from 'vue'
import vnode2Canvas from 'vnode2Canvas'

Vue.use(vnode2Canvas)
```
`vnode2Canvas` will render canvas by function `renderCanvas` option:
```js
export default {
  // define render options
  canvasOptions: {
    width: window.innerWidth, // canvas width
    height: window.innerHeight // canvas height
  },
  
  renderCanvas (createElement) {
    // ....
  }
}
```

after that `vnode2Canvas` will register a property named `renderInstance` on vue instance:
```js
renderInstance = {
  _ctx
  _canvas
  ...
}
```


### 1. render scroll list

A rolling list based on scroller to support lazy list loading.

##### usage:
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

##### usage
```
  // ...
  renderCanvas(h) {
    return h('view', {
        on: {
          click: (e, item) => {
            alert('click Text')
          }
        }
      },
      'click event'
    )
  }
  // ...
```

### 3. use css file for webpack loader
If you think write CSS in JS is not comfortable, you can also load your external CSS file through a webpack loader.

[canvas-style-loader](https://github.com/muwoo/vnode2canvas/blob/master/examples/rss-test/canvas-style-loader.js)

```js
// webpack
const canvasStyleLoader = require('canvas-style-loader')
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        // To avoid conflicts with CSS styles, you need to specify loading paths.
        include: [
          path.join(__dirname, './src')
        ],
        use: {loader: 'canvasStyleLoader'}
      }
    ]
  }
};

```

```css
// index.css
image {
  left: 10px;
  width: 100px;
  height: 100px;
}
.title {
  left: 120px;
  width: 100px;
  height: 100px;
  fill: "#000";
  font-size: 18px;
}
.desc {
  left: 120px;
  fill: '#999'
}
.date {
  left: 120px;
  fill: '#999'
}
```

```js
import './index.css'
// ...
renderCanvas(h) {
  return h('view', this.dataJSON.map((item, i) => {
    return h('view', [
      h('image', {
        props: {
          src: item.img
        },
        style: {
          top: 10 + 110 * i
        }
      }),
      h('text', {
        class: 'title',
        style: {
          top: 10 + 120 * i
        }
      }, item.title),
      h('text', {
        class: 'desc',
        style: {
          top: 50 + 120 * i
        }
      }, item.desc),
      h('text', {
        class: 'date',
        style: {
          top: 80 + 110 * i,
        }
      }, new Date().toLocaleDateString())
    ])
  }))
}
```










