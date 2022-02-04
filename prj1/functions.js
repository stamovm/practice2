// example: myDiv.appendChild(createButton('Button 1'))
function createButton(txt, cls = 'btn') {
  const btn = document.createElement('button')
  btn.id = Math.random() * 100
  btn.textContent = txt
  btn.classList.add(cls)

  //   btn.addEventListener('click', () => btnClick(btn.id))
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
    if (delta > 20) delta = 16.6
    func(delta)
    oldTime = time
    if (running) requestAnimationFrame(repeatAnimation)
  }

  return {
    isRunning: function () {
      return running
    },
    start: function () {
      running = true
      animID = requestAnimationFrame(repeatAnimation)
    },
    stop: function () {
      running = false
      cancelAnimationFrame(animID)
      delta = 0
      oldTime = 0
    },
  }
}

export { createButton, createTimer, createAnimation }
