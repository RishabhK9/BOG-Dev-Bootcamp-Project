// var cards = document.querySelectorAll('.card');

const card = document.getElementById('card');

card.addEventListener('click', handleFlip);

function handleFlip(){
    card.classList.toggle('flipCard');
}


// [...cards].forEach((card)=>{
//   card.addEventListener( 'click', function() {
//     card.classList.toggle('is-flipped');
//   });
// });
