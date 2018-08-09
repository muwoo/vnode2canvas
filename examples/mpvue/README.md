# 在 mpvue 中使用 `vnode2canvas`

<img width="400" src="https://user-images.githubusercontent.com/21073039/43886794-7b215e6c-9bef-11e8-890e-4c7fdc2f892c.png">

## 快速开始：

#### 安装
```shell
npm i vnode2canvas --save
```

#### usage

```js
import RenderCanvas from 'vnode2canvas'

Vue.use(RenderCanvas)
```

### example
```html
<template>
  <canvas canvas-id="canvas" :style="{width: width + 'px', height: height+'px'}"></canvas>
</template>

<script>

export default {
  data () {
    return {
      width: 0,
      height: 0
    }
  },
  canvasOptions: {
    canvasId: 'canvas'
  },
  renderCanvas (h) {
    let device = wx.getSystemInfoSync()
    this.width = device.windowWidth
    this.height = device.windowHeight
    return h('view', [
      h('image', {
        props: {
          src: 'https://pic.u51.com/sfs-gateway/api/v1/download/5f7dac8228354008ae6f69f67c1c0fa410d6'
        },
        style: {
          left: 10,
          top: 10,
          width: 100,
          height: 100,
          fill: '#000',
          fontSize: 18
        }
      }),
      h('text', {
        style: {
          left: 120,
          top: 10,
          fill: '#000',
          fontSize: 18,
          width: 150,
          ellipse: true
        }
      }, 'hello mpvue!')
    ])
  }
}
</script>
```

## 事件
区别于浏览器的事件绑定，我们在`mpvue`中需要手动进行事件监听，然后触发`canvas`渲染对象的实例方法：
```html
<canvas @click="bindClick" canvas-id="canvas"></canvas>

<script>
export default {
  methods: {
    bindClick (e) {
      this.getRender().event.eventHandler(e)
    }
  },
  canvasOptions: {
    canvasId: 'canvas'
  },
  renderCanvas (h) {
    return h('text', {
      style: {
        with: 100,
        height: 20
      },
      on: {
        tap: () => {
          console.log(1111)
        }
      }
    }, '点击这里试试~')
  }
}
</script>
```
目前只针对`mpvue`绑定了`tap`事件。

## scrollList
实现滚动列表，但是由于小程序的原生`canvas`性能限制，目前滚动列表的性能不是很好，后面可以多跟踪一下小程序`canvas`滚动性能的表现。
```html
<canvas @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend" canvas-id="canvas"></canvas>
```
```js
methods: {
  touchstart(e) {
    this.getRender().scrollContainer.startHandler(e)
  },
  touchmove(e) {
    this.getRender().scrollContainer.moveHandler(e)
  },
  touchend(e) {
    this.getRender().scrollContainer.endHandler(e)
  }
},
renderCanvas(h) {
  let device = wx.getSystemInfoSync()
  this.width = device.windowWidth
  this.height = device.windowHeight
  return h('scrollView', {
      style: {
        scrollHeight: this.dataJSON.length * 110,
        width: this.width,
        height: this.height
      }
    },
    this.dataJSON.map((item, i) => {
      return h('view', [
        h('image', {
          props: {
            src: item.img
          },
          style: this.getStyle('img', i)
        }),
        h('text', {
          style: this.getStyle('title', i),
          on: {
            tap: () => {
              console.log(1111)
            }
          }
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

## 导出图片
```js
wx.canvasToTempFilePath({
  x: 0,
  y: 0,
  width: this.width,
  height: this.height,
  canvasId: 'canvas',
  success: function(res) {
    wx.saveImageToPhotosAlbum({
      filePath: res.tempFilePath,
      success (res) {
        wx.showToast({
          title: '保存图片成功',
          icon: 'success',
          duration: 2000
        })
      }

    })
  }
})
```

