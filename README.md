# <span style='color: #fbd44c; font-weight: 700;'>Encriptador de Texto 🔒</span>

Este es un challenge del Programa ONE - Oracle Next Education y Alura Latam.

Alura nos da un figma como base para replicar el diseño de la página web; pero no deja claro que nosotros podemos modificar el diseño a nuestro criterio.

<br>

## <span style='color: #fbd44c; font-weight: 700;'>Challenge</span>
<br>

🎯 La página debe tener un campo para ingresar texto a encriptar o desencriptar.

🎯 El usuario puede escoger entre esas dos opciones.

🎯 Debe funcionar solo con letras minúsculas. No se permiten números ni caracteres especiales.

🎯 Debe devolver el texto en la versión encriptada y desencriptada.

🎯 El resultado debe ser mostrado en pantalla.

  Extra:

🎯 Botones de Copiar y/o Pegar que tengan esas mismas funciones.

<br>

## <span style='color: #fbd44c; font-weight: 700;'>Capturas de Pantalla</span>

📳 Móvil

![Mobile](./assets/img/mobile.webp)

📱Tablet

![Tablet](./assets/img/tablet.webp)

💻 Escritorio

![Desktop](./assets/img/desktop.webp)

<br>

## <span style='color: #fbd44c; font-weight: 700;'>Enlaces</span>

🔗 [Demo](https://irsmp.github.io/encryptor/)

<br>

## <span style='color: #fbd44c; font-weight: 700;'>Desarrollado con:</span>

📌 HTML semántico.

📌 JS básico

📌 CSS custom properties

📌 Grid CSS

📌 Flexbox

📌 Mobile first


<br>

## <span style='color: #fbd44c; font-weight: 700;'>¿Qué he aprendido?</span>

✅ Utilizar expresiones regulares: 

  `test` 👉 busca un **String** en la **regExp**. Devuelve un booleano.

  ```js
  const pattern = /[a-z\s\r\n]/g
      if (!pattern.test(lastKey)) {
        // code
      }
  ```

✅ **`replace`** 👉 método que devuelve un **String nuevo** con todas las coincidencias de un patrón sustituidas por un reemplazo. Concatenación de `replace`.

```js
$outputTxt.value = data.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat')
```

✅ Reemplazar clases de un elemento HTML a través de JS:

```js
$pasteBtn.classList.replace('hidden', 'visible')
```

✅ `setTimeout` 👉 establece un temporizador que ejecuta un código un vez que el temporizador expira.

```js
setTimeout(() => {
  $msgBox.classList.replace('block', 'none')
}, 1500)
```

✅ Comprobar si el navegador tiene soporte para **`navigator.clipboard`**

```js
if (!navigator.clipboard) {
  // code
}
// Devuelve True si no tiene soporte
```

✅ Copiar / Pegar al clipboard:

🔹 Para navegadores que aceptan **`navigator.clipboard`**

```js
// Copiar
navigator.clipboard.writeText($outputTxt.value)
.then (() => console.log('Copia exitosa 👍'))
.catch ((err) => console.error('No se copió 😔 ', err))
```

```js
// Pegar
navigator.clipboard.readText()
.then ((clipData) => $inputTxt.value += clipData)
.catch ((err) => console.error('No se pudo pegar 😔 ', err))
```

🔹 Para navegadores que **NO** aceptan **`navigator.clipboard`**

```js
// COPIAR
// ===================================
// Seleccionamos lo que vamos a copiar
$outputTxt.select()

// Ejecutamos execCommand. Devuelve True si se ejecuto satisfactoriamente. Almacenamos ese booleano en la variable **saveData**
let saveData = document.execCommand('copy')

// Comprobamos si efectivamente la variable es True
if (saveData) {

  // Recuperamos del portapapeles el texto previamente copiado por execCommand y lo almacenamos en una variable que utilizaremos más adelante en la función pegar.
  saveToClip = window.getSelection().toString()
}
```

```js
// PEGAR
// =================================
// Pasamos el contenido de la variable al textarea que muestra los resultados
$inputTxt.value += saveToClip
```

✅ `userAgent` 👉 muestra información sobre el dispositivo desde donde se invoca; dicha información puede ser del sistema operativo, el navegador utilizado, la versión, etc.

```js
const ua = navigator.userAgent
```

✅ FireFox no tiene soporte para **`navigator.clipboard.readText`**. En FireFox podemos copiar, pero no pegar a través de la API Clipboard. Entonces, ¿Cómo recuperar el valor copiado del clipboard? No encontre la forma así que utilice un truco 😜:

```js
const ua = navigator.userAgent

// Comprobamos si la página se esta visualizando desde le navegador FireFox
if (ua.match(/Firefox/i)) {

  // Le enviamos un mensaje al usuario para que utilice la combinación de teclas para pegar.
  setTimeout(() => {
    message('Presione [CTRL][V]', 1300)
  }, 2000);
}
```

<br>

## <span style='color: #fbd44c; font-weight: 700;'>Recursos útiles</span>

👉 [Alura Latam](https://www.aluracursos.com/)

👉 [Reemplazar varias letras](https://es.stackoverflow.com/questions/522831/funci%C3%B3n-replace-para-reemplazar-varias-letras)

👉 [Clipboard API](https://developer.mozilla.org/es/docs/Web/API/Clipboard_API)

<br>

## <span style='color: #fbd44c; font-weight: 700;'>Autora</span>

Vanessa Méndez