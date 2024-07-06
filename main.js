const minRange = 1;
const maxRange = 100;
let hiddenNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;

document.getElementById('min-range').textContent = minRange;
document.getElementById('max-range').textContent = maxRange;

document.getElementById('guess-button').addEventListener('click', function() {
    const guess = Number(document.getElementById('guess-input').value);
    const feedback = document.getElementById('feedback');

    if (guess < minRange || guess > maxRange) {
        feedback.textContent = `Please enter a number between ${minRange} and ${maxRange}.`;
    } else if (guess < hiddenNumber) {
        feedback.textContent = 'Too low! Try again.';
    } else if (guess > hiddenNumber) {
        feedback.textContent = 'Too high! Try again.';
    } else {
        feedback.textContent = 'Congratulations! You guessed the correct number!';
    }
});

document.getElementById('reset-button').addEventListener('click', function() {
    hiddenNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
    document.getElementById('feedback').textContent = '';
    document.getElementById('guess-input').value = '';
});