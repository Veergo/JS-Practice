let b = document.querySelector('button');
let a = document.querySelector('input');
let c = document.querySelector('#duplicateField');
a.oninput = function() {
c.textContent = a.value;
};
b.onclick = function() {
console.log(a.value);
a.value = '';
c.textContent = '';
};