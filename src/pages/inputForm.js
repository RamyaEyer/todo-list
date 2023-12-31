import { createItemCard, createItemsDiv, clearItems} from "./items"; 

const itemFactory = (title, description, dueDate, priority) => {

    return {title, description, dueDate, priority};

};

/*
  createForm(itemList, project)

    Creates input form for items to be added to project and adds to item list.

*/

const createForm = (itemList, project) => {

    let inputForm = document.createElement('form');
    inputForm.setAttribute('id','item-entry');

    let titleDiv = document.createElement('div');
    titleDiv.classList.add('section-div');
    let labelTitle = document.createElement('label');
    let titleInput = document.createElement('input');
    titleInput.setAttribute('id', 'title');
    titleInput.setAttribute('type', 'text');
    titleInput.required = true;
    
    labelTitle.setAttribute('for', 'title');
    labelTitle.textContent = "Title: ";
    titleDiv.appendChild(labelTitle);
    titleDiv.appendChild(titleInput);
    inputForm.appendChild(titleDiv);


    let descDiv = document.createElement('div');
    descDiv.classList.add('section-div');
    let labelDesc = document.createElement('label');
    let descInput = document.createElement('input');
    descInput.setAttribute('id', 'desc');
    descInput.setAttribute('type', 'text');
    descInput.required = true;

    labelDesc.setAttribute('for', 'desc');
    labelDesc.textContent = "Description: ";
    descDiv.appendChild(labelDesc);
    descDiv.appendChild(descInput);
    inputForm.appendChild(descDiv);


    let dueDiv = document.createElement('div');
    dueDiv.classList.add('section-div');
    let labelDue = document.createElement('label');
    let dueInput = document.createElement('input');
    dueInput.setAttribute('id', 'due');
    dueInput.setAttribute('type', 'date');
    dueInput.required = true;

    labelDue.setAttribute('for', 'due');
    labelDue.textContent = "Due Date: ";
    dueDiv.appendChild(labelDue);
    dueDiv.appendChild(dueInput);
    inputForm.appendChild(dueDiv);


    let posDiv = document.createElement('div');
    posDiv.classList.add('section-div');
    let labelPriority = document.createElement('label');
    let priorityInput = document.createElement('input');
    priorityInput.setAttribute('id', 'priority');
    priorityInput.setAttribute('type', 'number');
    priorityInput.min = 1;
    priorityInput.step = 1;
    priorityInput.required = true;

    labelPriority.setAttribute('for', 'priority');
    labelPriority.textContent = "Priority: ";
    posDiv.appendChild(labelPriority);
    posDiv.appendChild(priorityInput);
    inputForm.appendChild(posDiv);

    let inputSubmit = document.createElement('input');
    inputSubmit.setAttribute('type', 'submit');
    inputSubmit.setAttribute('value', 'Submit');
    
    inputForm.addEventListener('submit', (event) => {
     
        event.preventDefault(); 
        itemList.push(itemFactory(titleInput, descInput, dueInput, priorityInput));
        project.removeChild(inputForm);
        clearItems(project);
        project.appendChild(createItemsDiv(itemList, project));

    });

    inputForm.appendChild(inputSubmit);

    return inputForm;

};




export { createForm };