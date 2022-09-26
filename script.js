const choiceBox = document.getElementById('choice-box');
const selectorBox = document.getElementById('selector-box');

function initScript() {
    choiceBox.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            setTimeout(() => {
                e.target.value = '';
            }, 10);

            choiceBox.disabled = true;
            randomSelect();  
        } else {
            createOptions(e.target.value);
        } 
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

function randomSelect() {
    const repeatSelect = 30;

    const interval = setInterval(() => {
        const randomOption = pickRandomOption();
        
        if (randomOption === undefined) {
            choiceBox.disabled = false;
            clearTimeout(finalPick);
            clearInterval(interval);
        } else {
            highlightOption(randomOption);

            setTimeout(() => {
                unhighlightOption(randomOption);
            }, 100)
        };
    }, 100);

    const finalPick = setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomOption = pickRandomOption();
            
            highlightOption(randomOption);

            choiceBox.disabled = false;
            
        }, 100)
    }, repeatSelect * 100);
}

function pickRandomOption() {
    const options = document.querySelectorAll('.option');
    return options[Math.floor(Math.random() * options.length)];
}

function highlightOption(option) {
    option.classList.add('picked');
}

function unhighlightOption(option) {
    option.classList.remove('picked');
}

initScript();