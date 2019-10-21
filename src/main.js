/* eslint-disable */

import Split from './core/split'

const app = document.querySelector('#app')
app.style.height = '100%'

const sp1 = new Split(['#one', '#two'], {
  container: '#app',
  mode: 'vertical'
})

const sp2 = new Split([sp1, '#three'], {
  value: 0.4
})

const sp3 = new Split(['#four', '#five'], {
  value: 0.6
})

const sp4 = new Split([sp2, sp3], {
  mode: 'vertical',
  value: 0.6
})

window.sp1 = sp1
window.sp2 = sp2
window.sp3 = sp3
window.sp4 = sp4
