import { adjustItemOrder } from "./priority";
import { itemList } from "./items";

const addEditButton = (textDiv, theIndex) => {

    const editButton = document.createElement('button');
    editButton.classList.add('edit-button');
    
    editButton.addEventListener('click', () => {

       editText(textDiv, theIndex);

    });

    
    
    return editButton;

};


const editText = (textDiv, theIndex) => {

    const editForm = document.createElement('form');
    const editDiv = document.createElement('div');
    const editInput = document.createElement('input');
    editInput.setAttribute('id', 'edit-input');

    if(textDiv.className === 'due-itemcard'){

        editInput.setAttribute('type', 'date');

    }


    else if(textDiv.className === 'order-itemcard'){

        editInput.setAttribute('type', 'number');

    }

    else{

        editInput.setAttribute('type', 'text');

    }

   
    editDiv.appendChild(editInput);
    editForm.appendChild(editDiv);

    const editSubmit = document.createElement('input');
    editSubmit.setAttribute('type', 'submit');
    editSubmit.setAttribute('value', 'Edit');
    editForm.appendChild(editSubmit);

    editForm.addEventListener('submit', (event) => {

        event.preventDefault();
        textDiv.removeChild(editForm);
        textDiv.textContent = editInput.value;
        editItemList(textDiv, theIndex, editInput.value);
        textDiv.appendChild(addEditButton(textDiv, theIndex));
        
    });
    

    textDiv.appendChild(editForm);

};

const editItemList = (textDiv, theIndex, property) =>{

    if(textDiv.className === 'title-itemcard'){

        itemList[theIndex].title.value = property;

    }

    else if(textDiv.className === 'desc-itemcard'){

        itemList[theIndex].description.value = property;

    }

    else if(textDiv.className === 'due-itemcard'){

        itemList[theIndex].dueDate.value = property;

    }

    else if(textDiv.className === 'order-itemcard'){

        itemList[theIndex].priority.value = property;

    }

};


export {addEditButton, editText};