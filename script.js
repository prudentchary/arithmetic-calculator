function appendToDisplay(value) {
    const display = document.getElementById('display');
    const answerBox = document.getElementById('answerBox');
    
    if (value === '=') {
        try {
            answerBox.textContent = eval(display.value); // Evaluate the expression and show the result in the h2 tag
        } catch {
            answerBox.textContent = 'Error'; // If evaluation fails, show 'Error'
        }
    } else if (value === 'del') {
        display.value = ''; // Clear the display
        answerBox.textContent = ''; // Clear the answer box
    } else {
        display.value += value; // Append the value to the current value in the display
    }
}