function calculate(resultInput, input) {
    resultInput.value = 'ERROR';
    resultInput.classList.add('error');
    resultInput.value = eval(input.value);
    resultInput.classList.remove('error');
}


export { calculate };