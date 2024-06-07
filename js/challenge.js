//when page loads, start timer

//start with a default

let counter = 0;
let likes = 0;
let interval;
let isPaused = false;


//find elementsbyId in index.html and assign them to a variable

const counterElement = document.getElementById('counter')
const likesElement = document.getElementsByClassName('likes') //class
const incrementButton = document.getElementById('plus');
const decrementButton = document.getElementById('minus');
const heartButton = document.getElementById('heart');
const pauseButton = document.getElementById('pause');
const commentInput = document.getElementById('comment-input');
const submitButton = document.getElementById('submit');
const commentList = document.getElementById('comment-form')


//counter event
function updateCounter() {
    counterElement.textContent = counter;
}

function startTimer() {
    interval = setInterval(() => {
        if (!isPaused) {
            counter++;
            updateCounter();
        }
    }, 1000);
}

//pause/resume functionality
function pauseResume() {
    isPaused = !isPaused;
    pauseButton.textContent = isPaused ? 'Resume' : 'Pause';
    incrementButton.disabled = isPaused;
    decrementButton.disabled = isPaused;
    likeButton.disabled = isPaused;
}

//eventlistener for - btn
decrementButton.addEventListener('click', () => {
    counter--;
    updateCounter();
})

//eventlistener for + btn
incrementButton.addEventListener('click', () => {
    counter++;
    updateCounter();
})

// eventListener for heart
heartButton.addEventListener('click', () => {
    likes++;
    likesElement.textContent = `Likes: ${likes}`;

})

//eventListener for pause/resume
pauseButton.addEventListener('click', pauseResume);




//leaving comment/submit btn
submitButton.addEventListener('click', () => {
    const commentText = commentInput.value.trim();
    if (commentText === '') {
        const commentItem = document.createElement('li');
        commentItem.textContent = commentText;
        commentList.appendChild(commentItem);
        commentInput.value = '';
    }
});

//starttimer is after everything has loaded
startTimer();