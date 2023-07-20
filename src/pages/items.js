import { placeItem } from "./inputForm";

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

export {addItemButton, itemList};
