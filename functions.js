const card = document.getElementById('card');
const noButton = document.getElementById('no-button');
const yesButton = document.getElementById('yes-button');

card.addEventListener('click', handleFlip);

function handleFlip(){
    card.classList.toggle('flipCard');
}

yesButton.addEventListener('click', () => {
    alert('I look forward to working with you!')
})

noButton.addEventListener('mouseover', () => {
    console.log("Hovered")
    if (noButton.style.left == 30 + '%') {
        console.log("activated" + noButton.style.left);
        noButton.style.left =  -2 + '%';
        yesButton.style.left = 30 + '%';
    } else {
        console.log("deactivated" + noButton.style.left);
        noButton.style.left = 30 + '%';
        yesButton.style.left = -2 + '%';
    }
})