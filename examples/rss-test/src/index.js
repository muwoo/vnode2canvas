/**
 * @author muwoo
 * Date: 2018/7/9
 */
/**
 * @author muwoo
 * Date: 2018/7/2
 */

import './index.css'
import Vue from 'vue/dist/vue.esm'
Vue.use(window.RenderCanvas)
new Vue({
  el: '#app',
  data: {
    msg: 'hello world',
    renderWidth: 'full',
    renderHeight: 'full',
    left: 120,
    dataJSON: [
      {
        title: '标题',
        desc: '描述',
        img: 'https://avatars3.githubusercontent.com/u/21073039?s=460&v=4'
      },
      {
        title: '标题',
        desc: '描述',
        img: 'https://avatars3.githubusercontent.com/u/21073039?s=460&v=4'
      }
    ]
  },
  mounted () {
    setTimeout(() => {
      this.left=220
    }, 1000)
  },
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
})
