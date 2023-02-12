const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');
const onInputChangeSpan = event => {
    span.style.fontSize = `${event.currentTarget.value}px`;
};
input.addEventListener('input', onInputChangeSpan);
