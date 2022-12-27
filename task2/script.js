
const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль!');
});

const al = document.querySelector('#alert');

al.addEventListener('click', () => {
    alert('Служит для появления вот этого окна!');
});

const pr = document.querySelector('#prompt');

pr.addEventListener('click', () => {
    prompt('Служит для ввода информации в консоль!');
});