const change = document.querySelector('a');
change.addEventListener('click', (eve)=>{
    eve.preventDefault();
    const changer = prompt('Измените текст ссылки');
    change.textContent = changer;
});



