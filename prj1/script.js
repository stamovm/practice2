function btn1Clicked() {
  console.log('clicked')
  const output = document.getElementById('content1')
  output.appendChild(renderButton('clicked'))
}

function renderButton(txt, cls = 'btn') {
  const btn = document.createElement('button')
  btn.id = Math.random()
  btn.textContent = txt
  btn.classList.add(cls)
  btn.addEventListener('click', () => btnClick(btn.id))
  return btn
}

function btnClick(id) {
  console.log('clicked ', id)
  let btn = document.getElementById(id)
  console.log(btn)
  btn.innerHTML = id
}
