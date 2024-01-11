const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', updateGreeting);


function updateGreeting() {

    const enteredName = nameInput.value.trim();

    if (enteredName === '') {
      nameOutput.textContent = 'Anonymous';
    } else {
      nameOutput.textContent = enteredName;
    }
  }