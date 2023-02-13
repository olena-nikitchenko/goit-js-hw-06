const itemsWithId = document.querySelector('#categories');
const itemsWitClass = itemsWithId.querySelectorAll('.item');
console.log(`Number of categories: ${itemsWitClass.length}`);
const items = itemsWitClass.forEach(element => {
    const subTitleRef = element.firstElementChild.textContent;
    const numberLiRef = element.lastElementChild.children.length;
    console.log(`Category: ${subTitleRef}`);
    console.log(`Elements: ${numberLiRef}`);
});
