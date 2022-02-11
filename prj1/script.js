import { createButton, createTimer, createAnimation } from './functions.js'

const speed = 0.05

let content = document.querySelector('.content')
let content1 = document.getElementById('content1')
let content2 = document.getElementById('content2')
let myBtns = [
  { id: 1, className: 'btn', text: 'Button', callback: btn1Clicked },
  { id: 2, className: 'btn', text: 'Button', callback: btn2Clicked },
  { id: 3, className: 'btn', text: 'Button', callback: btn3Clicked },
  { id: 4, className: 'btn', text: 'Button', callback: btn4Clicked },
  { id: 5, className: 'btn', text: 'Button', callback: btn5Clicked },
]

let buttons = []
let timer1 = createTimer(btn1Clicked)
let anim1 = createAnimation(processButtons)

function processButtons(delta) {
  if (!buttons) return
  buttons.forEach((btn) => {
    btn.x += speed * delta
    btn.y += speed * delta
    btn.btn.style.left = btn.x + 'px'
    btn.btn.style.top = btn.y + 'px'
    console.log('btn is', btn.btn.style.left, delta)
  })
}

function btn1Clicked() {
  let btn = createButton('clicked')
  btn.classList.add('btn2')
  buttons.push({ x: 0, y: 0, btn: btn })
  content2.appendChild(btn)
  console.log('test1')
}

function btn2Clicked() {
  timer1.start()
  console.log('test2')
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

myBtns.forEach((btn) => {
  let b = createButton(`${btn.text} ${btn.id}`)
  b.addEventListener('click', btn.callback)
  content1.appendChild(b)
})
