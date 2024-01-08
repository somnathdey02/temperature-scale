// script.js

function convertTemperature() {
    const degreeInput = document.getElementById('degreeInput');
    const unitSelect = document.getElementById('unitSelect');
    const result = document.getElementById('result');
    const emoji = document.getElementById('icon');
    
    const degree = parseFloat(degreeInput.value);
    const unit = unitSelect.value;

    let convertedValue;
    let message;
    let emojiClass;

    if (unit === 'Fahrenheit') {
        convertedValue = ((degree - 32) * 5) / 9;
        message = `${degree} Fahrenheit is equal to ${convertedValue.toFixed(2)} Celsius.`;
    } else {
        convertedValue = (degree * 9) / 5 + 32;
        message = `${degree} Celsius is equal to ${convertedValue.toFixed(2)} Fahrenheit.`;
    }

    if (convertedValue > 30) {
        emojiClass = 'fas fa-temperature-high'; // hot temperature
    } else if (convertedValue < 10) {
        emojiClass = 'fas fa-temperature-low'; // cold temperature
    } else {
        emojiClass = 'fas fa-temperature-avg'; // moderate temperature
    }

    emoji.className = emojiClass;
    result.textContent = message;
}
