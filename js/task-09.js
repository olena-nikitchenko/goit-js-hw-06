function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector('body');
const span = body.querySelector('.color');
const btnChangeColor = body.querySelector('.change-color');
const onBtnChangeColor = () => {
    const bgColor = getRandomHexColor();
    body.style.backgroundColor = bgColor;
    span.textContent = bgColor;
};

btnChangeColor.addEventListener('click', onBtnChangeColor);
