import { placeItem } from "./inputForm";
import { addEditButton } from "./edit";
import { adjustItemOrder } from "./priority";

const itemList = [];

const addItemButton = (project) => {

    const itemButton = document.createElement('button');
    itemButton.classList.add('add-item');
    itemButton.textContent = "+";
    itemButton.addEventListener("click", () => {

        placeItem(project);
     
    });

    return itemButton;

};

const clearItems = (project) => {

    if(project.querySelector('.items-list') != null){

        project.removeChild(project.querySelector('.items-list'));

    }
   
};

const createItemsDiv = () => {

    const itemsDiv = document.createElement('div');
    itemsDiv.classList.add('items-list');

    adjustItemOrder();

    for(let i = 0; i < itemList.length; i++){

        itemsDiv.appendChild(createItemCard(i));

    }

    return itemsDiv;


};

const createItemCard = (lastIndex) =>  {

    const itemCard = document.createElement('div');
    
    const itemDiv0 = document.createElement('div');
    const itemDiv1 = document.createElement('div');
    const itemDiv2 = document.createElement('div');
    const itemDiv3 = document.createElement('div');

    itemDiv0.classList.add('title-itemcard');
    itemDiv1.classList.add('desc-itemcard');
    itemDiv2.classList.add('due-itemcard');
    itemDiv3.classList.add('order-itemcard');


    itemDiv0.textContent = itemList[lastIndex].title.value;
    itemDiv1.textContent = itemList[lastIndex].description.value;
    itemDiv2.textContent = itemList[lastIndex].dueDate.value;
    itemDiv3.textContent = itemList[lastIndex].priority.value;

    itemDiv0.appendChild(addEditButton(itemDiv0, lastIndex));
    itemDiv1.appendChild(addEditButton(itemDiv1, lastIndex));
    itemDiv2.appendChild(addEditButton(itemDiv2, lastIndex));
    itemDiv3.appendChild(addEditButton(itemDiv3, lastIndex));


    itemCard.appendChild(itemDiv0);
    itemCard.appendChild(itemDiv1);
    itemCard.appendChild(itemDiv2);
    itemCard.appendChild(itemDiv3);
    

    return itemCard;
    
};


export {addItemButton, itemList, createItemsDiv, createItemCard, clearItems};
