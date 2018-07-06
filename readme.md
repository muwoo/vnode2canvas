# vnode2canvas

Vue based on virtual dom to render canvas

# example
```js
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
}
```

![image](https://user-images.githubusercontent.com/21073039/42373790-8f47f174-8148-11e8-90b3-89eb56a97bad.png)

