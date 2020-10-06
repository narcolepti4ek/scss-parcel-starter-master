const buttonList = document.querySelectorAll('.item_button');

buttonList.forEach(buttonRef => {
    buttonRef.addEventListener('click', toggleElement);
});

function toggleElement(event) {
    classList.toggle('item_button--minus') 
}