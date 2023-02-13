const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const outputValue = document.querySelector('#value');
let counterValue = 0;
const onIncrementBtnClick = () => {
    counterValue += 1;
    outputValue.textContent = counterValue;
};
const onDecrementBtnClick = () => {
    counterValue -= 1;
    outputValue.textContent = counterValue;
};
incrementBtn.addEventListener('click', onIncrementBtnClick);
decrementBtn.addEventListener('click', onDecrementBtnClick);
