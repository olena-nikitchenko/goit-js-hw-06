const ItemsWithId = document.querySelector('#categories');
const ItemsWitClass = ItemsWithId.querySelectorAll('.item');
console.log(`Number of categories: ${ItemsWitClass.length}`);
const Items = ItemsWitClass.forEach(element => {
    const SubTitleRef = element.firstElementChild.textContent;
    const NumberLiRef = element.lastElementChild.children.length;
    console.log(`Category: ${SubTitleRef}`);
    console.log(`Elements: ${NumberLiRef}`);
});
