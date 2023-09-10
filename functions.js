// var cards = document.querySelectorAll('.card');

const card = document.getElementById('card');


function handleFlip(){
    card.classList.toggle('is-flipped');
}

card.addEventListener('click', handleFlip);

// [...cards].forEach((card)=>{
//   card.addEventListener( 'click', function() {
//     card.classList.toggle('is-flipped');
//   });
// });
