import Split from './core/split'

const app = document.querySelector('#app')
app.style.height = '100%'

const sp1 = new Split(['#one', '#two'], {
  container: '#app',
  mode: 'vertical'
})

const sp2 = new Split([sp1, '#three'])

window.sp1 = sp1
window.sp2 = sp2
