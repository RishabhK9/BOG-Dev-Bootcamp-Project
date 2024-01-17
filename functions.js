const card = document.getElementById('card');
const noButton = document.getElementById('no-button');
const yesButton = document.getElementById('yes-button');

card.addEventListener('click', handleFlip);

function handleFlip(){
    card.classList.toggle('flipCard');
}

yesButton.addEventListener('click', () => {
    alert('Appreciate it! I look forward to working with you!')
})

noButton.addEventListener('click', () => {
    alert('Well why\'d you do that?!?!')
})

noButton.addEventListener('mousemove', () => {
    console.log("Hovered " + noButton.style.left)
    if (noButton.style.left == 65 + '%') {
        console.log("activated " + noButton.style.left);
        noButton.style.left =  35 + '%';
        yesButton.style.left = 65 + '%';
    } else {
        console.log("deactivated " + noButton.style.left);
        noButton.style.left = 65 + '%';
        yesButton.style.left = 35 + '%';
    }
})