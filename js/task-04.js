const IncrementBtn = document.querySelector('button[data-action="increment"]');
const DecrementBtn = document.querySelector('button[data-action="decrement"]');
const OutputValue = document.querySelector('#value');
let counterValue = 0;
const onIncrementBtnClick = () => {
    counterValue += 1;
    OutputValue.textContent = counterValue;
};
const onDecrementBtnClick = () => {
    counterValue -= 1;
    OutputValue.textContent = counterValue;
};
IncrementBtn.addEventListener('click', onIncrementBtnClick);
DecrementBtn.addEventListener('click', onDecrementBtnClick);
