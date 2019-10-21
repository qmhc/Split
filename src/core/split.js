import '../style/split.scss'

export default class Split {
  constructor ([left, right], option = {}) {
    if (typeof option === 'string') {
      option = { container: option }
    }

    if (left instanceof Split) {
      left = left.container
    } else {
      left = document.querySelector(left)
    }

    if (right instanceof Split) {
      right = right.container
    } else {
      right = document.querySelector(right)
    }

    let container

    if ('container' in option) {
      container = document.querySelector(option.container)
    } else {
      container = document.createElement('div')
      left.parentNode.insertBefore(container, left)
    }

    const {
      value = 0.5,
      min = 100,
      transition = true,
      timely = true,
      mode = 'horizontal'
    } = option

    this._value = value < 0 ? 0 : value > 1 ? 1 : (parseFloat(value) || 0.5)
    this._min = min || 100
    this._transition = transition
    this._timely = timely
    this._mode = mode === 'vertical' ? 'vertical' : 'horizontal'

    this._state = null
    this._full = ''
    this._offset = this._mode === 'vertical' ? 'offsetHeight' : 'offsetWidth'

    this._events = ['movestart', 'moving', 'moveend']
    this._listeners = {}

    this._container = container
    this._container.classList.add('split-wrapper')
    this._container.classList.add(this._mode)

    if (this._mode === 'horizontal') {
      this._left = document.createElement('div')
      this._left.className = 'split-pane left-pane'

      this._right = document.createElement('div')
      this._right.className = 'split-pane right-pane'

      this._container.appendChild(this._left)
      this._container.appendChild(this._right)

      this._left.appendChild(left)
      this._right.appendChild(right)
    } else {
      this._top = document.createElement('div')
      this._top.className = 'split-pane top-pane'

      this._bottom = document.createElement('div')
      this._bottom.className = 'split-pane bottom-pane'

      this._container.appendChild(this._top)
      this._container.appendChild(this._bottom)

      this._top.appendChild(left)
      this._bottom.appendChild(right)
    }

    this._initElement()

    this._setPanesPosition()

    // 需要手动绑定 this
    this._handleTriggerMove = this._handleTriggerMove.bind(this)
    this._handleTriggerUp = this._handleTriggerUp.bind(this)
    this._removeTransition = this._removeTransition.bind(this)

    // 开始调整版面大小
    this._trigger.addEventListener('mousedown', event => {
      event.preventDefault()
      event.stopPropagation()

      if (this._full) {
        return false
      }

      this._container.classList.add('split-moving')

      const outer = this._container[this._offset]
      const min = this._min / outer
      const dir = this._mode === 'vertical' ? 'pageY' : 'pageX'
      const style = this._mode === 'vertical' ? 'top' : 'left'

      this._state = {
        dir,
        outer,
        min,
        style,
        max: 1 - min,
        origin: event[dir],
        value: this._value,
        target: event[dir]
      }

      this.transition = false

      this._dispatchEvent('movestart')

      // 如果不手动绑定 this 此处方法调用后 this 为 document
      // 如果在这里才绑定 this 则 remove 时无法正确移除事件
      document.addEventListener('mousemove', this._handleTriggerMove)
      document.addEventListener('mouseup', this._handleTriggerUp)

      return false
    })

    if (this._mode === 'horizontal') {
      // 左侧内容全屏
      this._leftFull.addEventListener('click', () => {
        this._setTransition()

        if (this._full === 'right') {
          this._resetFullClass()

          return false
        }

        this._left.style.right = '0'
        this._right.style.left = '100%'
        this._trigger.style.left = '100%'
        this._container.classList.add('left-full')

        this._full = 'left'
      })

      // 右侧内容全屏
      this._rightFull.addEventListener('click', () => {
        this._setTransition()

        if (this._full === 'left') {
          this._resetFullClass()

          return false
        }

        this._left.style.right = '100%'
        this._right.style.left = '0'
        this._trigger.style.left = '0'
        this._container.classList.add('right-full')

        this._full = 'right'
      })
    } else {
      this._topFull.addEventListener('click', () => {
        this._setTransition()

        if (this._full === 'bottom') {
          this._resetFullClass()

          return false
        }

        this._top.style.bottom = '0'
        this._bottom.style.top = '100%'
        this._trigger.style.top = '100%'
        this._container.classList.add('top-full')

        this._full = 'top'
      })

      this._bottomFull.addEventListener('click', () => {
        this._setTransition()

        if (this._full === 'top') {
          this._resetFullClass()

          return false
        }

        this._top.style.bottom = '100%'
        this._bottom.style.top = '0'
        this._trigger.style.top = '0'
        this._container.classList.add('bottom-full')

        this._full = 'bottom'
      })
    }
  }

  _resetFullClass () {
    this._setPanesPosition()

    this._container.classList.remove('left-full')
    this._container.classList.remove('right-full')
    this._container.classList.remove('top-full')
    this._container.classList.remove('bottom-full')

    this._full = ''
  }

  _setTransition () {
    if (!this._transition) {
      return
    }

    this._container.classList.add('split-transition')
    this._container.addEventListener('transitionend', this._removeTransition)
  }

  _removeTransition () {
    this._container.classList.remove('split-transition')
    this._container.removeEventListener('transitionend', this._removeTransition)
  }

  // 初始化一些 html 元素
  _initElement () {
    this._trigger = this._container.querySelector('.split-trigger')

    if (!this._trigger || this._trigger.parentNode !== this._container) {
      this._trigger = document.createElement('div')
      this._trigger.className = 'split-trigger'
      this._container.appendChild(this._trigger)
    }

    this._handle = this._trigger.querySelector('.split-trigger-handler')

    if (!this._handle) {
      this._handle = document.createElement('div')
      this._handle.className = 'split-trigger-handler'

      this._trigger.appendChild(this._handle)
    }

    if (this._mode === 'horizontal') {
      this._leftFull = this._createButton('left')
      this._rightFull = this._createButton('right')
    } else {
      this._topFull = this._createButton('top')
      this._bottomFull = this._createButton('bottom')
    }
  }

  _createButton (type) {
    const className = `${type}-full`

    let button = this._handle.querySelector(`.split-trigger-button.${className}`)

    if (!button) {
      button = document.createElement('div')
      button.className = `split-trigger-button ${className}`

      const icon = document.createElement('div')
      icon.className = 'split-icon-wrapper'
      icon.style.width = '4px'
      icon.appendChild(this._createArrowIcon())

      button.appendChild(icon)
      this._handle.appendChild(button)
    }

    return button
  }

  _createArrowIcon (size = 18, color = 'white') {
    const wrapper = document.createElement('div')

    wrapper.className = 'split-icon icon-arrow'
    wrapper.style.width = `${size}px`
    wrapper.style.height = `${size}px`

    const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    arrow.setAttribute('viewBox', '0 0 125 125')

    const arrowTop = document.createElementNS('http://www.w3.org/2000/svg', 'polygon')

    arrowTop.setAttribute('fill-rule', 'evenodd')
    arrowTop.setAttribute('clip-rule', 'evenodd')
    arrowTop.setAttribute('fill', color)

    const arrowBottom = arrowTop.cloneNode()

    arrowTop.setAttribute('points', '72.2,58.2 51,79.2 55.9,84 77,63')
    arrowBottom.setAttribute('points', '51,46.8 55.9,42 77,63 72.2,67.8')

    arrow.appendChild(arrowTop)
    arrow.appendChild(arrowBottom)
    arrow.style.width = `${size}px`
    arrow.style.height = `${size}px`

    wrapper.appendChild(arrow)

    return wrapper
  }

  _setPanesPosition () {
    if (this._mode === 'horizontal') {
      this._left.style.right = `${(1 - this._value) * 100}%`
      this._trigger.style.left = `calc(${this._value * 100}% - 3px)`
      this._right.style.left = `${this._value * 100}%`
    } else {
      this._top.style.bottom = `${(1 - this._value) * 100}%`
      this._trigger.style.top = `calc(${this._value * 100}% - 3px)`
      this._bottom.style.top = `${this._value * 100}%`
    }
  }

  // 版面大小调整中
  _handleTriggerMove (event) {
    const offset = event[this._state.dir] - this._state.origin
    const outer = this._state.outer

    let value = (outer * this._state.value + offset) / outer

    if (value > this._state.max) {
      value = this._state.max
    }

    if (value < this._state.min) {
      value = this._state.min
    }

    if (this._timely) {
      this.value = value
    } else {
      this._trigger.style[this._state.style] = `${value * 100}%`
      this._state.target = value
    }

    this._dispatchEvent('moving')

    return false
  }

  // 版面大小调整结束
  _handleTriggerUp () {
    document.removeEventListener('mousemove', this._handleTriggerMove)
    document.removeEventListener('mouseup', this._handleTriggerUp)

    if (!this._timely) {
      this.value = this._state.target
    }

    this._state = null

    this._container.classList.remove('split-moving')

    this.transition = true

    this._dispatchEvent('moveend')

    return false
  }

  _dispatchEvent (event, params) {
    if (!this._events.includes(event)) {
      return
    }

    if (!this._listeners[event]) {
      return
    }

    const listeners = this._listeners[event]

    for (let i = 0, len = listeners.length; i < len; i++) {
      listeners[i](params)
    }
  }

  on (event, listener) {
    if (!this._events.includes(event)) {
      return
    }

    if (typeof listener !== 'function') {
      return
    }

    if (!this._listeners[event]) {
      this._listeners[event] = []
    }

    this._listeners[event].push(listener)
  }

  off (event, listener) {
    if (!this._events.includes(event)) {
      return
    }

    if (typeof listener !== 'function') {
      return
    }

    if (!this._listeners[event]) {
      return
    }

    const index = this._listeners[event].findIndex(item => item === listener)

    if (~index) {
      this._listeners[event].splice(index, 1)
    }
  }

  clear (event) {
    if (!this._events.includes(event)) {
      return
    }

    if (!this._listeners[event]) {
      return
    }

    this._listeners[event] = []
  }

  get container () {
    return this._container
  }

  set container (value) {
    console.warn('Split container is read only.')
  }

  get value () {
    return this._value
  }

  set value (value) {
    value = value < 0 ? 0 : value > 1 ? 1 : (parseFloat(value) || 0.5)

    if (value.toFixed(5) !== this._value.toFixed(5)) {
      this._value = value
      this._setTransition()
      this._setPanesPosition()
    }
  }

  get min () {
    return this._min
  }

  set min (value) {
    value = ~~value

    const outer = this._container.offsetWidth

    if (value >= outer / 2) {
      return
    }

    this._min = value

    const min = this._min / outer
    const max = 1 - min

    let current = this._value

    if (current < min) {
      current = min
    }

    if (current > max) {
      current = max
    }

    if (current !== this._value) {
      this.value = current
    }
  }

  get mode () {
    return this._mode
  }

  set mode (value) {
    console.warn('Split mode is read only.')
  }

  get transition () {
    return this._transition
  }

  set transition (value) {
    this._transition = !!value
  }

  get timely () {
    return this._timely
  }

  set timely (value) {
    this._timely = !!value
  }
}
