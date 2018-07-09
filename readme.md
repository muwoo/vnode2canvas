# vnode2canvas

Vue based on virtual dom to render canvas

# example
```css
/* index.css */
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

new Vue({
  data: {
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
  }

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
}
```

![image](https://user-images.githubusercontent.com/21073039/42374783-ddd944d4-814b-11e8-896d-d453321ebf5e.png)


