'use strict'
// let button = { id: 1, className: 'btn', txt: 'btn' }
let timer1 = createTimer(btn1Clicked)
let anim1 = createAnimation(testFunction)

function testFunction() {
  // animate

  document.getElementById('content1').appendChild(createButton('clicked'))
}

function btn1Clicked() {
  document.getElementById('content1').appendChild(createButton('clicked'))
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
  let interval = parseInt(document.getElementById('input1').value)
  if (interval > 0) anim1.setInterval(interval)

  if (anim1.isRunning) anim1.start()
}

function btnClick(id) {
  let btn = document.getElementById(id)
  console.log(btn)
  btn.textContent = id
}

//---------Reusable----Functions-------------------------------

// example: myDiv.appendChild(createButton('Button 1'))
function createButton(txt, cls = 'btn') {
  const btn = document.createElement('button')
  btn.id = Math.random() * 100
  btn.textContent = txt
  btn.classList.add(cls)
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

function createAnimation(func, interval = 33) {
  let running = false
  let animID = 0
  let int = interval
  function repeatAnimation() {
    func()
    setTimeout(requestAnimationFrame(repeatAnimation), int)
  }
  return {
    isRunning: function () {
      return running
    },
    setInterval: function (interval) {
      int = interval
      console.log('🚀 ~ file: script.js ~ line 96 ~ createAnimation ~ int', int)
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
