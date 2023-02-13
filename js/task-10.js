function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const divBoxes = document.querySelector('#boxes');
console.log(divBoxes);
const createBoxes = () => {
    let amount = Number(input.value);
    const arrDivsCreate = [];
    for (let i = 0; i < amount; i += 1) {
        const divCreate = document.createElement('div');
        const growthSizeDiv = i * Number.parseInt('10px');
        arrDivsCreate.push(divCreate);
        let baseWidthDiv = Number.parseInt((arrDivsCreate[i].style.width = '30px'));
        let baseHeightDiv = Number.parseInt((arrDivsCreate[i].style.height = '30px'));
        arrDivsCreate[i].style.width = `${baseWidthDiv + growthSizeDiv}px`;
        arrDivsCreate[i].style.height = `${baseHeightDiv + growthSizeDiv}px`;
        arrDivsCreate[i].style.backgroundColor = getRandomHexColor();
    }
    divBoxes.append(...arrDivsCreate);
};

const destroyBoxes = () => {
    divBoxes.innerHTML = '';
    input.value = '';
};
btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);
