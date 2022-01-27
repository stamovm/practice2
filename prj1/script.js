function btn1Clicked() {
  console.log('clicked')
  const output = document.getElementById('content1')
  output.appendChild(createButton('clicked'))
  clearInterval(intervalID)
}

function btnClick(id) {
  console.log('clicked ', id)
  let btn = document.getElementById(id)
  console.log(btn)
  btn.textContent = id
}

let intervalID = setInterval(function () {
  btn1Clicked()
}, 1000)

//-----------------------------------------
function createButton(txt, cls = 'btn') {
  const btn = document.createElement('button')
  btn.id = Math.random() * 100
  btn.textContent = txt
  btn.classList.add(cls)
  btn.addEventListener('click', () => btnClick(btn.id))
  return btn
}
