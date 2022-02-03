import { createButton, createTimer, createAnimation } from './functions.js'
let myBtns = { id: 1, className: 'btn', txt: 'btn', callback: func }

let buttons = []
let timer1 = createTimer(btn1Clicked)
let anim1 = createAnimation(processButtons)

function processButtons(delta) {
  if (!buttons) return
  buttons.forEach((btn) => {
    btn.x += 0.05 * delta
    btn.y += 0.05 * delta
    btn.btn.style.left = btn.x + 'px'
    btn.btn.style.top = btn.y + 'px'
    // console.log('btn is', btn.btn.style.left, btn.x)
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
