const emojiDetails = [
    {
        description: 'Smiling face with sunglasses',
        emoji: '😎',
    },
    {description: 'Thumbs up', emoji: '👍',},
    {description: 'Crying face', emoji:'😭',},
    {description: 'Party popper', emoji:'🎉',},
    {description: 'Heart', emoji: '🩶',},
    {description: 'Lips', emoji: '👄',},
];

let currentEmojiIndex = 0;
let score = 0;
let seconds = 30;
let timer;


const guessInput = document.getElementById('guess-input');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const timerElement= document.getElementById('timer');


function displayEmoji(){
    const descriptionElement = document.getElementById('description');
    descriptionElement.textContent = emojiDetails[currentEmojiIndex].emoji;
    timerElement.textContent=`Time: ${seconds}s`;
}

function checkGuess(){
    const guess= guessInput.value.trim().toLowerCase();
    const correctEmoji = emojiDetails[currentEmojiIndex].description.trim().toLocaleLowerCase();

    if(guess === correctEmoji){
        resultElement.textContent ='Correct!';
        score++;
    }
    else{
        resultElement.textContent = 'Wrong!'
    }

    scoreElement.textContent = `Score: ${score}`;
    guessInput.value = '';
    guessInput.focus();
    nextEmoji();
}

function nextEmoji(){
    currentEmojiIndex++;
    setTimeout(()=>{
        resultElement.textContent='';
    },1000);

    if(currentEmojiIndex === emojiDetails.length){
        currentEmojiIndex=0;
    }
    displayEmoji();
}


document.getElementById('guess-input').addEventListener('keydown',(e)=>{
    if(e.key ==='Enter'){
        checkGuess();
    }
});

document.addEventListener('DOMContentLoaded',()=>{
    displayEmoji();
    startTimer();
})


function startTimer(){
    timer = setInterval(()=>{
        seconds--;
        timerElement.textContent=`Time: ${seconds}s`;

        if(seconds<=0){
            endGame();
        }
    },1000);
}

function endGame(){
    clearInterval(timer);
    guessInput.disabled = true;
    timerElement.textContent='';

}
