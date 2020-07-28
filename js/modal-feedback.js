let modalFeedback = document.querySelector('.modal-feedback')
let openButton = document.querySelector('.write-us-btn')
let closeButton = modalFeedback.querySelector('.modal-close')


/* Появление и закрытие окна по кнопкам */
openButton.addEventListener('click', function() {
  modalFeedback.classList.add('modal-show')
})

closeButton.addEventListener('click', function() {
  modalFeedback.classList.remove('modal-show')
})


/* Закрытие окна на ESC */
window.addEventListener('keydown', function( evt ) {
  if (evt.keyCode == 27 && modalFeedback.classList.contains('modal-show')) {
    modalFeedback.classList.remove('modal-show')
  }
})