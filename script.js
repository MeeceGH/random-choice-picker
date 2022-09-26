const choiceBox = document.getElementById('choice-box');
const selectorBox = document.getElementById('selector-box');

function initScript() {
    choiceBox.addEventListener('keyup', (e) => {
        createOptions(e.target.value);
    })
}

function createOptions(input) {
    const options = input.split(',').filter(option => option.trim() !== '').map(option => option.trim());
    selectorBox.innerHTML = '';

    options.forEach(option => {
        const newOption = document.createElement('span');
        newOption.classList.add('option');
        newOption.textContent = option;
        selectorBox.appendChild(newOption);
    })
}

initScript();