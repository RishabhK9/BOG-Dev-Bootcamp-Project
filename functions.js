const card = document.getElementById('card');

card.addEventListener('click', handleFlip);

function handleFlip(){
    card.classList.toggle('flipCard');
}
