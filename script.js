let counter = 0;
const maxLimit = 150;
const minLimit = 0;
const history = [];
let historyIndex = -1;

const counterDisplay = document.getElementById('counter');
const progressBar = document.getElementById('progressBar');
const subtractBtn = document.getElementById('subtractBtn');
const addBtn = document.getElementById('addBtn');
const undoBtn = document.getElementById('undoBtn');
const redoBtn = document.getElementById('redoBtn');

function updateCounter(newCounter) {
    if (newCounter <= maxLimit && newCounter >= minLimit) {
        counter = newCounter;
        counterDisplay.textContent = counter;
        updateProgressBar();
        history.splice(historyIndex + 1);
        history.push(counter);
        historyIndex++;
    }
}

function updateProgressBar() {
    const percentage = (counter / maxLimit) * 100;
    progressBar.style.width = `${percentage}%`;
}

subtractBtn.addEventListener('click', () => {
    updateCounter(counter - 1);
});

addBtn.addEventListener('click', () => {
    updateCounter(counter + 1);
});

undoBtn.addEventListener('click', () => {
    if (historyIndex > 0) {
        historyIndex--;
        counter = history[historyIndex];
        counterDisplay.textContent = counter;
        updateProgressBar();
    }
});

redoBtn.addEventListener('click', () => {
    if (historyIndex < history.length - 1) {
        historyIndex++;
        counter = history[historyIndex];
        counterDisplay.textContent = counter;
        updateProgressBar();
    }
});
