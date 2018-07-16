# vnode2canvas

Rendering virtual DOM into canvas based on Vue plugin

# example

example url: [demo](https://muwoo.github.io/vnode2canvas/)

![qq20180716-181201-hd](https://user-images.githubusercontent.com/21073039/42753528-d80f8d62-8923-11e8-8a36-2a3bef66c910.gif)

# usage

### install
```shell
npm i vnode2canvas
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

[canvas-style-loader]()

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










