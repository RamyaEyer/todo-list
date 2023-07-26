const addEditButton = (itemList, textDiv, theIndex) => {

    const editButton = document.createElement('button');

    /*const editButton = new Image();
    editButton.src = editIcon;*/
    editButton.classList.add('edit-button');
    
    editButton.addEventListener('click', () => {

       editText(itemList, textDiv, theIndex);

    });

    
    
    return editButton;

};



const editTitleButton = (textDiv) => {

    const editButton = document.createElement('button');
    editButton.classList.add('edit-button');
    
    editButton.addEventListener('click', () => {

       editTitle(textDiv);

    });

    return editButton;

};

const editTitle = (textDiv) => {

    const editForm = document.createElement('form');
    const editDiv = document.createElement('div');
    const editInput = document.createElement('input');
    editInput.setAttribute('id', 'edit-input');
    editInput.setAttribute('type', 'text');

    editDiv.appendChild(editInput);
    editForm.appendChild(editDiv);

    const editSubmit = document.createElement('input');
    editSubmit.setAttribute('id', 'edit-submit');
    editSubmit.setAttribute('type', 'submit');
    editSubmit.setAttribute('value', 'Edit');
    editForm.appendChild(editSubmit);

    editForm.addEventListener('submit', (event) => {

        event.preventDefault();
        textDiv.removeChild(editForm);
        textDiv.textContent = editInput.value;
        textDiv.appendChild(editTitleButton(textDiv));
        
    });
    

    textDiv.appendChild(editForm);


};



const editText = (itemList, textDiv, theIndex) => {

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
        editItemList(itemList, textDiv, theIndex, editInput.value);
        textDiv.appendChild(addEditButton(itemList, textDiv, theIndex));
        
    });
    

    textDiv.appendChild(editForm);

};

const editItemList = (itemList, textDiv, theIndex, property) =>{

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


export {addEditButton, editText, editTitleButton, editTitle};