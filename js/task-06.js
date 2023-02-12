const textInput = document.querySelector('#validation-input');
const onTextInput = event => {
    if (Number(textInput.dataset.length) !== event.currentTarget.value.length) {
        textInput.classList.add('invalid');
    } else {
        textInput.classList.add('valid');
    }
};
const onRemoveClassList = () => {
    textInput.classList.remove('valid');
    textInput.classList.remove('invalid');
};
textInput.addEventListener('blur', onTextInput);
textInput.addEventListener('focus', onRemoveClassList);
