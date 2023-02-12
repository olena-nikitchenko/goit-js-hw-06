const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const Items = ingredients.map(ingredient => {
    const ItemRef = document.createElement('li');
    ItemRef.textContent = ingredient;
    ItemRef.classList.add('item');
    return ItemRef;
});
const UlWithId = document.querySelector('#ingredients');
UlWithId.append(...Items);
