import { addItemButton } from "./items";
import { placeItem } from "./inputForm";
import { addEditButton, editText, editTitleButton, editTitle} from "./edit";

const content = document.getElementsByTagName("content");

const addTitle = () => {

    const content = document.getElementById('content');
    const mainTitle = document.createElement('div');
    mainTitle.classList.add('main-title');
    mainTitle.textContent = 'To-Do List';
    mainTitle.appendChild(editTitleButton(mainTitle));
    content.appendChild(mainTitle);

};


const addProjectButton = () =>{

    const content = document.getElementById('content');
    const projectButton = document.createElement('button');
    projectButton.classList.add('add-project');
    projectButton.textContent = "+";
    content.appendChild(projectButton);

};


const createProjectsDiv = () => {

    const content = document.getElementById('content');
    const projectDivs = document.createElement('div');
    projectDivs.classList.add('projects');
    content.appendChild(projectDivs);
};

const createProject = () => {

    const content = document.getElementById('content');
    const projectDivs = document.querySelector('.projects');
    const project = document.createElement('div');
    project.classList.add('project');

    const projectTitle = document.createElement('div');
    projectTitle.classList.add("project-title");
    projectTitle.textContent = "Project";
    projectTitle.appendChild(editTitleButton(projectTitle));

    const itemList = [];

    project.appendChild(projectTitle);
    project.appendChild(addItemButton(itemList, project));
    projectDivs.appendChild(project);
    content.appendChild(projectDivs);


}

export {addTitle, addProjectButton, createProjectsDiv, createProject};