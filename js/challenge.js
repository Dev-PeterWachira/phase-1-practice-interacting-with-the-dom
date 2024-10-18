let counter = 0;
let timerId;

function startTimer() {
    timerId = setInterval(() => {
        counter++;
        document.getElementById('counter').innerText = counter; // Assuming there is an element with id 'counter'
    }, 1000);
}

window.onload = startTimer;

document.getElementById('plus').addEventListener('click', () => {
    counter++;
    document.getElementById('counter').innerText = counter;
});

document.getElementById('minus').addEventListener('click', () => {
    counter--;
    document.getElementById('counter').innerText = counter;
});

const likes = {};

document.getElementById('like').addEventListener('click', () => {
    if (!likes[counter]) {
        likes[counter] = 0;
    }
    likes[counter]++;
    document.getElementById('likes-display').innerText = `${counter} has ${likes[counter]} like(s)`;
});

let isPaused = false;

document.getElementById('pause').addEventListener('click', () => {
    if (!isPaused) {
        clearInterval(timerId);
        isPaused = true;
        document.getElementById('plus').disabled = true;
        document.getElementById('minus').disabled = true;
        document.getElementById('like').disabled = true;
        document.getElementById('pause').innerText = "Resume";
    } else {
        startTimer();
        isPaused = false;
        document.getElementById('plus').disabled = false;
        document.getElementById('minus').disabled = false;
        document.getElementById('like').disabled = false;
        document.getElementById('pause').innerText = "Pause";
    }
});

const comments = [];

document.getElementById('comment-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission
    const commentInput = document.getElementById('comment-input'); // Assuming there is an input with this id
    const comment = commentInput.value;
    comments.push(comment);
    document.getElementById('comments-display').innerText = comments.join('\n'); // Display all comments
    commentInput.value = ''; // Clear the input field
});

