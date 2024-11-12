// ESERCIZIO 1

const saveButton = document.getElementById('save-button')
const resetButton = document.getElementById('reset-button')
const nameInput = document.getElementById('name-input')

// chiave che mi salva nel localStorage
const key = 'es1-name'

const h2 = document.getElementById('saved-name')

saveButton.addEventListener('click', function () {
  // devo raccogliere il valore dell'input e lo salvo nel localstorage
  localStorage.setItem(key, nameInput.value)

  // inserisco il nome salvato nell'h2
  h2.innerText = nameInput.value
})

// all'avvio della pagina metto l'ultimo nome salvato nell'h2
if (localStorage.getItem(key)) {
  h2.innerText = localStorage.getItem(key)
}

resetButton.addEventListener('click', function () {
  // ripristina il valore di default dell'h2
  h2.innerText = 'Nessun nome salvato'
  //   elimino la key dal localStorage
  localStorage.removeItem(key)
})
