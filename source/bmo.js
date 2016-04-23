var places = document.querySelectorAll('.js-bmo-hook');

for (var i = 0; i < places.length; i++) {
  var place = places[i];
  place.addEventListener('click', toggleImage);
}

function toggleImage (e) {
  var image = e.target;
  showPlaces();
  image.setAttribute('hidden', 'hidden')
}

function showPlaces () {
  for (var i = 0; i < places.length; i++) {
    var place = places[i];
    place.removeAttribute('hidden');
  }
}