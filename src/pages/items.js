import { placeItem } from "./inputForm";
import { addEditButton } from "./edit";

const itemList  = [];

const addItemButton = (project) => {

    const itemButton = document.createElement('button');
    itemButton.classList.add('add-item');
    itemButton.textContent = "+";
    itemButton.addEventListener("click", () => {

        placeItem(project);
     
    });

    return itemButton;

};

const createItemCard = (project) =>  {

    let lastIndex = itemList.length - 1;

    const itemCard = document.createElement('div');

    const itemDiv0 = document.createElement('div');
    const itemDiv1 = document.createElement('div');
    const itemDiv2 = document.createElement('div');
    const itemDiv3 = document.createElement('div');


    itemDiv0.textContent = itemList[lastIndex].title.value;
    itemDiv1.textContent = itemList[lastIndex].description.value;
    itemDiv2.textContent = itemList[lastIndex].dueDate.value;
    itemDiv3.textContent = itemList[lastIndex].priority.value;

    itemDiv0.appendChild(addEditButton(itemDiv0));
    itemDiv1.appendChild(addEditButton(itemDiv0));
    itemDiv2.appendChild(addEditButton(itemDiv0));
    itemDiv3.appendChild(addEditButton(itemDiv0));


    itemCard.appendChild(itemDiv0);
    itemCard.appendChild(itemDiv1);
    itemCard.appendChild(itemDiv2);
    itemCard.appendChild(itemDiv3);
    

    return itemCard;
    
};


export {addItemButton, itemList, createItemCard};
