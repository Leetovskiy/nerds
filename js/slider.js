let sliderButtons = document.querySelectorAll('.slider-switch-btn')
let slides = document.querySelectorAll('.slide')

sliderButtons[0].addEventListener('click', function() {
  slides[1].classList.remove('slider-show')
  slides[2].classList.remove('slider-show')

  slides[0].classList.add('slider-show')
})

sliderButtons[1].addEventListener('click', function() {
  slides[0].classList.remove('slider-show')
  slides[2].classList.remove('slider-show')

  slides[1].classList.add('slider-show')
})

sliderButtons[2].addEventListener('click', function() {
  slides[0].classList.remove('slider-show')
  slides[1].classList.remove('slider-show')

  slides[2].classList.add('slider-show')
})