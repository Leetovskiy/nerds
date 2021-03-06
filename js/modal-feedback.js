let modalFeedback = document.querySelector('.modal-feedback')
let openButton = document.querySelector('.write-us-btn')
let closeButton = modalFeedback.querySelector('.modal-close')
let submitButton = modalFeedback.querySelector('.button[type="submit"]')
let requiredItems = Array.prototype.slice.call(modalFeedback.querySelectorAll('*[required]'), 0);


/* Появление и закрытие окна по кнопкам */
openButton.addEventListener('click', function() {
  modalFeedback.classList.add('modal-show')

  // Фокус в поле формы
  for (let i=0, len=requiredItems.length; i<len; i++) {
    if (!requiredItems[i].value) {
      requiredItems[i].focus()
      break
    }
}
})

closeButton.addEventListener('click', function() {

  modalFeedback.classList.remove('modal-shake', 'modal-show')
})


/* Закрытие окна на ESC */
window.addEventListener('keydown', function( evt ) {
  if (evt.keyCode == 27 && modalFeedback.classList.contains('modal-show')) {
    evt.preventDefault()

    modalFeedback.classList.remove('modal-shake', 'modal-show')
  }
})


submitButton.addEventListener('click', function( evt ) {
  /* Потряхивание окна, если требуемые поля не заполнены */
  requiredItems.forEach(function(entry) {
    if (!entry.value) {
      modalFeedback.classList.remove('modal-shake')
      modalFeedback.offsetWidth = modalFeedback.offsetWidth
      modalFeedback.classList.add('modal-shake')
    }
  });
})