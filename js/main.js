const d = document
const $msgBox = d.getElementById('msgBox'),
      $msgTxt = d.getElementById('msgTxt'),
      $form = d.getElementById('form'),
      $inputBox = d.getElementById('inputBox'),
      $outputBox = d.getElementById('outputBox'),
      $inputTxt = d.getElementById('inputTxt'),
      $outputTxt = d.getElementById('outputTxt'),
      $pasteBtn = d.getElementById('pasteBtn'),
      $copyBtn = d.getElementById('copyBtn'),
      $encryptBtn = d.getElementById('encryptBtn'),
      $decryptBtn = d.getElementById('decryptBtn'),
      $resetBtn = d.getElementById('resetBtn')


function showBox(box) {
  box.classList.replace('none', 'block')
}
function hideBox(box) {
  box.classList.replace('block', 'none')
}
function message(msg, time) {
  showBox($msgBox)
  $msgTxt.textContent = msg
  setTimeout(() => {
    hideBox($msgBox)
  }, time);
}
function emptyField() {
  message('Ingrese texto ✏️', 1200)
  $inputTxt.focus()
  $inputTxt.value = ''
}
function changeToResult() {
  hideBox($inputBox)
  showBox($outputBox)
  $outputTxt.select()
}
function changeToCopy() {
  hideBox($outputBox)
  showBox($inputBox)
  $inputTxt.value = ''
  $inputTxt.focus()
  $pasteBtn.classList.replace('hidden', 'visible')
}

function checkKey(e) {
  e.preventDefault()
  if (e.data !== null) {
    let lastKey = e.data.slice(-1).toLowerCase()
    const pattern = /[a-z\s\r\n]/g
    if (!pattern.test(lastKey)) {
      message('❌ Dato incorrecto', 1200)
      $inputTxt.value = $inputTxt.value.replace(lastKey, '')
    }
  }
}


function reset(e) {
  e.preventDefault()
  $form.reset()
  hideBox($outputBox)
  showBox($inputBox)
  $inputTxt.focus()
}
function encrypt(e) {
  e.preventDefault()
  const data = $inputTxt.value.trim().toLowerCase()
  const dictionary = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat'
  }
  const pattern = /[aeiou]/g
  if (data !== '') {
    const result = data.replace(pattern, (match) => dictionary[match])
    $outputTxt.value = result
    changeToResult()
  } else {
    emptyField()
  }
}
function decrypt(e) {
  e.preventDefault()
  const data = $inputTxt.value.trim().toLowerCase()
  const dictionary = {
    ai: 'a',
    enter: 'e',
    imes: 'i',
    ober: 'o',
    ufat: 'u'
  }
  const pattern = /(ai)|(enter)|(imes)|(ober)|(ufat)/gm
  if (data !== '') {
    const result = data.replace(pattern, (match) => dictionary[match])
    $outputTxt.value = result
    changeToResult()
  } else {
    emptyField()
  }
}


function toFireFox() {
  const ua = navigator.userAgent
  if (ua.match(/Firefox/i)) {
    $pasteBtn.classList.replace('visible', 'hidden')
    setTimeout(() => {
      message('Presione [CTRL][V]', 1300)
    }, 2000);
  }
}
let saveToClip
function copy(e) {
  e.preventDefault()
  if (navigator.clipboard) {
    navigator.clipboard.writeText($outputTxt.value)
    .then (() => {
      console.log('Copia exitosa 👍')
      toFireFox()
    })
    .catch ((err) => console.error('No se copió 😔 ', err))
  } else if (!navigator.clipboard) {
    $outputTxt.select()
    let saveData = document.execCommand('copy')
    if (saveData) {
      saveToClip = window.getSelection().toString()
    }
  }
  changeToCopy()
  message('Copia exitosa 😉', 1000)
}
function paste(e) {
  e.preventDefault()
  if(!navigator.clipboard) {
    $inputTxt.value += saveToClip
    $inputTxt.focus()
    $inputTxt.select()
  } else {
    navigator.clipboard.readText()
    .then ((clipData) => {
      $inputTxt.value += clipData
      $inputTxt.focus()
    })
    .catch ((err) => console.error('No se pudo pegar 😔 ', err))
  }
  message('Bien 😉', 1000)
}

$inputTxt.addEventListener('input', checkKey)
$resetBtn.addEventListener('click', reset)
$encryptBtn.addEventListener('click', encrypt)
$decryptBtn.addEventListener('click', decrypt)
$copyBtn.addEventListener('click', copy)
$pasteBtn.addEventListener('click', paste)