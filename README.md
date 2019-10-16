# Split

## 安装 (Install)
```bash
npm i @qmhc/split --save
```

## 使用 (Use)
html

```html
<div id="#app">
  <div class="split-pane left-pane"></div>
  <div class="split-pane right-pane"></div>
</div>
```

js

```js
// contaniner 对应的 Element 内至少要存在两个 <div class="split-pane"></div>
// 左侧面板添加类名 left-pane 右边面板添加类名 right-pane

import Split from '@qmhc/split'

import '@qmhc/split/dist/split.css'

let split = new Split({
	container: '#app', // Element 对象或其选择器
	min: 300, // 两个面板的最小宽度 默认 100
	value: 0.6, // 左侧面板和总宽度的初始比值 默认 0.5
 transition: true, // 启用过渡效果 默认 true
	timely: true // 在调整时实时刷新面板大小 默认 true
})

// 快速构件
let split = new Split('#app')

// 响应式属性
split.value = 0.65 // 一个 0 ~ 1 的小数
split.min = 250 // 一个正整数 其值应小于容器宽度的一半
split.transition = true // 设置开启过渡效果
split.timely = true // 设置开启实时刷新面板大小

const moveStartListener = () => console.log('Move start!')
const movingListener = () => console.log('Moving!')
const moveEndListener = () => console.log('Move end!')

// 添加事件监听
split.on('movestart', moveStartListener)
split.on('moving', movingListener)
split.on('moveend', moveEndListener)

// 移除事件监听
split.off('movestart', moveStartListener)
split.off('moving', movingListener)
split.off('moveend', moveEndListener)

// 清除事件
split.clear('movestart')
split.clear('moving')
split.clear('moveend')
```

## 授权 (License)

[MIT License](./LICENSE).
