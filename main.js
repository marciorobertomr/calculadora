import { calculate } from "./calculate.js";
import { changeTheme } from "./changeTheme.js";
import copy from "./copy.js";

const main = document.querySelector("main");
const root = document.querySelector(":root");
const input = document.getElementById("input");
const resultInput = document.getElementById("result")
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "];

input.addEventListener('keydown', (ev) => {
    ev.preventDefault();
    
    if (allowedKeys.includes(ev.key)) {
        input.value += ev.key;
        return;
    }
    
    if (ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1);
        return;
    }

    if (ev.key === 'Enter') {
        calculate(resultInput, input);
    }
})

document.querySelectorAll('.charKey').forEach((charKeyBtn) => {
    charKeyBtn.addEventListener('click', () => {
        const value = charKeyBtn.dataset.value;
        input.value += value;
    })
})

document.getElementById('clear').addEventListener('click', () => {
    input.value = '';
    input.focus();
    resultInput.value = '';
    resultInput.classList.remove('error');
})

document.getElementById('equal').addEventListener('click', () => {
    calculate(resultInput, input)
});

document.getElementById('themeSwitcher').addEventListener('click', () => {
    changeTheme(main, root);
})

document.getElementById('copyToClipboard').addEventListener('click', (ev) => {
    copy(ev, resultInput);
})