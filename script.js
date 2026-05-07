const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

checkBtn.addEventListener('click', () => {
    const text = textInput.value;

    if(text === '') {
        alert('Please input a value');
        return;
    }
    
    // regex
    const regex = text.toLowerCase().replace(/[^a-z0-9]/gi, "");

    const reversedText = regex.split('').reverse().join('');

    // check if the regex is the same as the reversed text
    if(regex === reversedText) {
        resultDiv.textContent = `${text} is a palindrome.`;
    } else {
        resultDiv.textContent = `${text} is not a palindrome.`;
    }

    textInput.value = '';
});