var iso = new Isotope( '.galerijfotos', {
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});

var filtersElem = document.querySelector('.filter-button-group');
filtersElem.addEventListener( 'click', function( event ) {
  if ( !matchesSelector( event.target, 'button' ) ) {
    return;
  }
  var filterValue = event.target.getAttribute('data-filter');
  iso.arrange({ filter: filterValue });
});

var buttonGroups = document.querySelectorAll('.button-group');
for ( var i=0; i < buttonGroups.length; i++ ) {
  buttonGroups[i].addEventListener( 'click', onButtonGroupClick );
}

function onButtonGroupClick( event ) {
  if ( !matchesSelector( event.target, '.button' ) ) {
    return;
  }
  var button = event.target;
  button.parentNode.querySelector('.is-checked').classList.remove('is-checked');
  button.classList.add('is-checked');
}

let knop =  document.getElementsByClassName("toonMeer");

for (var j = 0; j < knop.length; j++) {

  knop[0].addEventListener("click", meerTonen);

  function meerTonen() {
    let vlak = document.getElementsByClassName("fotokader")[0].classList.toggle("open");
  }
  console.log(j);
}
