'use strict'
let button = { id: 1, className: 'btn', txt: 'btn' }
let buttons = []
let timer1 = createTimer(btn1Clicked)
let anim1 = createAnimation(processButtons)

function processButtons(delta) {
  if (!buttons) return
  buttons.forEach((btn) => {
    btn.x += 0.01 * delta
    btn.btn.style.left = btn.x + 'px'
    console.log('btn is', btn.btn.style.left, btn.x)
  })
}

function btn1Clicked() {
  let btn = createButton('clicked')

  buttons.push({ x: 0, y: 0, btn: btn })

  document.getElementById('content1').appendChild(btn)
}

function btn2Clicked() {
  timer1.start()
}

function btn3Clicked() {
  timer1.stop()
}

function btn4Clicked() {
  let interval = parseInt(document.getElementById('input1').value)
  if (interval > 0) timer1.setInterval(interval)
}

function btn5Clicked() {
  if (!anim1.isRunning()) anim1.start()
  else anim1.stop()
}

function btnClick(id) {
  // let btn = document.getElementById(id)
  // btn.style.left = 100 + 'px'
  // console.log(btn.style.left)
}

//---------Reusable----Functions-------------------------------

// example: myDiv.appendChild(createButton('Button 1'))
function createButton(txt, cls = 'btn') {
  const btn = document.createElement('button')
  btn.id = Math.random() * 100
  btn.textContent = txt
  btn.classList.add(cls)
  btn.classList.add('btn2')
  btn.addEventListener('click', () => btnClick(btn.id))
  return btn
}

// execute a function in a time interval
// example: let timer1 = createTimer(myFunction, 33)
// timer1.start()
function createTimer(func, interval = 1000) {
  let running = false
  let timerID = 0
  let int = interval
  return {
    isRunning: function () {
      return running
    },
    getInterval: function () {
      return int
    },
    setInterval: function (interval) {
      int = interval
    },
    start: function () {
      running = true
      timerID = setInterval(func, int)
    },
    stop: function () {
      clearInterval(timerID)
      running = false
    },
  }
}

function createAnimation(func) {
  let running = false
  let animID = 0
  let delta = 0
  let oldTime = 0

  function repeatAnimation(time) {
    if (oldTime) delta = time - oldTime
    func(delta)
    oldTime = time
    if (running) requestAnimationFrame(repeatAnimation)
  }

  return {
    isRunning: function () {
      return running
    },
    start: function () {
      animID = requestAnimationFrame(repeatAnimation)
      running = true
    },
    stop: function () {
      cancelAnimationFrame(animID)
      running = false
    },
  }
}
