<template>
  <div>
    <canvas @click="bindClick" canvas-id="canvas" :style="{width: width + 'px', height: height+'px'}"></canvas>
  </div>
</template>

<script>

export default {
  data () {
    return {
      msg:'hello world',
      width: 200,
      height: 100,
      dataJSON: [
        {
          title: '标题这是一个标题呢？还是什么',
          desc: '描述',
          img: 'https://pic.u51.com/sfs-gateway/api/v1/download/5f7dac8228354008ae6f69f67c1c0fa410d6'
        },
        {
          title: '标题',
          desc: '描述',
          img: 'https://pic.u51.com/sfs-gateway/api/v1/download/5f7dac8228354008ae6f69f67c1c0fa410d6'
        },
        {
          title: '标题这是一个标题呢？还是什么',
          desc: '描述',
          img: 'https://pic.u51.com/sfs-gateway/api/v1/download/5f7dac8228354008ae6f69f67c1c0fa410d6'
        },
        {
          title: '标题',
          desc: '描述',
          img: 'https://pic.u51.com/sfs-gateway/api/v1/download/5f7dac8228354008ae6f69f67c1c0fa410d6'
        }
      ]
    }
  },
  methods: {
    bindClick (e) {
      this.getRender().event.eventHandler(e)
    },
    getStyle (type, i) {
      return {
        img: {
          left: 10,
          top: 10 + 110 * i,
          width: 100,
          height: 100,
          fill: '#000',
          fontSize: 18
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
  canvasOptions: {
    canvasId: 'canvas'
  },
  renderCanvas (h) {
    return h('view', this.dataJSON.map((item, i) => {
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
  },
  mounted () {
    wx.getSystemInfo({
      success: (res) => {
        this.width = res.windowWidth
        this.height = res.windowHeight
      }
    })
  }
}
</script>

<style>
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}
</style>
