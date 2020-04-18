let zone1 = document.querySelectorAll('.zone1');
let zone2 = document.querySelectorAll('.zone2');

for (var i = 0; i < zone1.length; i++) {
  zone1[i].addEventListener( 'click', function() {
    console.log("Wasup!");
    this.style.display = "visible";
  })

}
