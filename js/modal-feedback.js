let modalFeedback = document.querySelector('.modal-feedback')
let openButton = document.querySelector('.write-us-btn')
let closeButton = modalFeedback.querySelector('.modal-close')
let submitButton = modalFeedback.querySelector('.button[type="submit"]')
let requiredItems = Array.prototype.slice.call(modalFeedback.querySelectorAll('*[required]'), 0);


/* Появление и закрытие окна по кнопкам */
openButton.addEventListener('click', function() {
  modalFeedback.classList.add('modal-show')
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

submitButton.addEventListener('click', function( evt) {
  requiredItems.forEach(function(entry) {
    if (!entry.value){
      modalFeedback.classList.remove('modal-shake')
      modalFeedback.offsetWidth = modalFeedback.offsetWidth
      modalFeedback.classList.add('modal-shake')
    }
  });
})