import { createForm} from "./inputForm";
import { addEditButton } from "./edit";
import { adjustItemOrder } from "./priority";


/* createItemsDiv(itemList, project)

    Creates div container for item to be created and added to list of items.

*/
const createItemsDiv = (itemList, project) => {

    const itemsDiv = document.createElement('div');
    itemsDiv.classList.add('items-list');

    adjustItemOrder(itemList);

    for(let i = 0; i < itemList.length; i++){

        itemsDiv.appendChild(createItemCard(itemsDiv,itemList, i));

    }

    return itemsDiv;


};

/* createItemCard(itemsDiv, itemList, lastIndex) 

    Creates display for item and properties on list

*/


const createItemCard = (itemsDiv, itemList, lastIndex) =>  {

    const itemCard = document.createElement('div');
    itemCard.classList.add('item-card');

    const itemCheck = document.createElement('input');
    itemCheck.setAttribute('id', 'item-check');
    itemCheck.setAttribute('type', 'checkbox');
    
    const itemDiv0 = document.createElement('div');
    const itemDiv1 = document.createElement('div');
    const itemDiv2 = document.createElement('div');
    const itemDiv3 = document.createElement('div');

    itemDiv0.classList.add('title-itemcard');
    itemDiv1.classList.add('desc-itemcard');
    itemDiv2.classList.add('due-itemcard');
    itemDiv3.classList.add('order-itemcard');

    itemDiv0.textContent = itemList[lastIndex].title.value;
    itemDiv1.textContent = "Description: " + itemList[lastIndex].description.value;
    itemDiv2.textContent = "Due Date: " + itemList[lastIndex].dueDate.value;
    itemDiv3.textContent = itemList[lastIndex].priority.value;
    
    itemDiv0.appendChild(addEditButton(itemList, itemDiv0, lastIndex));
    itemDiv1.appendChild(addEditButton(itemList, itemDiv1, lastIndex));
    itemDiv2.appendChild(addEditButton(itemList, itemDiv2, lastIndex));
    itemDiv3.appendChild(addEditButton(itemList, itemDiv3, lastIndex));

    itemCard.appendChild(itemCheck);
    itemCard.appendChild(itemDiv0);
    itemCard.appendChild(itemDiv1);
    itemCard.appendChild(itemDiv2);
    itemCard.appendChild(itemDiv3);
    itemCard.appendChild(removeItemButton(itemsDiv, itemList, lastIndex));

    return itemCard;
    
};

/*

addItemButton(itemList, project)

Creates Add Item Button + Enables Function

*/

const addItemButton = (itemList, project) => {

    const addItem = document.createElement('button');
    addItem.classList.add('add-item');
    addItem.textContent = "+";
    addItem.addEventListener("click", () => {

        let formDiv = document.createElement('div');
        project.appendChild(createForm(itemList, project));
    
     
    });

    return addItem;

};

/*
   removeItemButton(itemsDiv, itemList, lastIndex)

   Allows removal of previously added item button.

*/

const removeItemButton = (itemsDiv, itemList, lastIndex) =>{

    const removeItem = document.createElement('button');
    removeItem.classList.add('remove-item');
    removeItem.textContent = "-";
    removeItem.addEventListener("click", () => {

        itemsDiv.removeChild(itemsDiv.children[lastIndex]);
     
    });

    return removeItem;


};

/* clearItems(project)

    Clears all added items in project.

*/


const clearItems = (project) => {

    if(project.querySelector('.items-list') != null){

        project.removeChild(project.querySelector('.items-list'));

    }
   
};


export {addItemButton, createItemsDiv, createItemCard, clearItems};
