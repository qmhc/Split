import Split from './core/split'

const app = document.querySelector('#app')
app.style.height = '100%'

window.split = new Split(['.left', '.right'], {
  container: '#app'
})
