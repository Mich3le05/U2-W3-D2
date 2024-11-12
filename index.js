// Funzione per mostrare il nome salvato, se presente
function displaySavedName() {
  const savedName = localStorage.getItem('name')
  const savedNameDiv = document.getElementById('savedName')
  if (savedName) {
    savedNameDiv.textContent = `Nome salvato: ${savedName}`
  } else {
    savedNameDiv.textContent = ''
  }
}

// Funzione per salvare il nome
function saveName() {
  const name = document.getElementById('nameInput').value
  if (name) {
    localStorage.setItem('name', name)
    displaySavedName()
    alert('Nome salvato con successo!')
  } else {
    alert('Inserisci un nome prima di salvare.')
  }
}

// Funzione per rimuovere il nome salvato
function removeName() {
  localStorage.removeItem('name')
  displaySavedName()
  alert('Nome rimosso con successo!')
}

displaySavedName()

// ESERCIZIO 2
// Recupera il tempo trascorso dalla sessione (o inizia da zero)
let secondsElapsed = sessionStorage.getItem('secondsElapsed')
  ? parseInt(sessionStorage.getItem('secondsElapsed'))
  : 0

// Funzione per aggiornare il contatore ogni secondo
function updateTimer() {
  secondsElapsed++
  document.getElementById('timer').textContent = secondsElapsed
  sessionStorage.setItem('secondsElapsed', secondsElapsed)
}

// Avvia il contatore
setInterval(updateTimer, 1000)

// Imposta il valore iniziale
document.getElementById('timer').textContent = secondsElapsed
