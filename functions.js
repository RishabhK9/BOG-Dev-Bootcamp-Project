function toggleBackgroundColor() {
    var card = document.getElementById('info-card');
    card.classList.toggle('baby-blue');
    card.classList.toggle('baby-pink');

    flip-card.classList.toggle('transform');

}

var cards = document.querySelectorAll('.card');
[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});
