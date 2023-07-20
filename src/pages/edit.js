const addEditButton = (textDiv) => {

    const editButton = document.createElement('button');
    editButton.classList.add('edit-button');
    
    editButton.addEventListener('click', () => {

       editText(textDiv);

    });
    
    return editButton;

};


const editText = (textDiv) => {

    const editForm = document.createElement('form');
    const editDiv = document.createElement('div');
    const editInput = document.createElement('input');
    editInput.setAttribute('type', 'text');
    editInput.setAttribute('id', 'edit-input');
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
        textDiv.appendChild(addEditButton(textDiv));
        
    });
    

    textDiv.appendChild(editForm);

};


export {addEditButton, editText};