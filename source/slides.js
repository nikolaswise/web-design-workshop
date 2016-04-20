(function () {
  var totalSlides = document.querySelectorAll('.slide').length

  if (!location.hash) {
    location.hash = '#1'
  }

  function getSlide () {
    return parseInt(location.hash.substring(1, location.hash.length))
  }

  function prev () {
    var prevSlide = getSlide() - 1
    if (prevSlide < 1) {
      prevSlide = 1
    }
    location.hash = '#' + prevSlide
  }

  function next () {
    var nextSlide = getSlide() + 1
    if (nextSlide > totalSlides) {
      nextSlide = 1
    }
    location.hash = '#' + nextSlide
  }

  window.addEventListener('keydown', function (e) {
    if (e.keyCode === 37) { prev() }
    if (e.keyCode === 39) { next() }
  })

  window.addEventListener('click', next)
})()