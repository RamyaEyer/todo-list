/* projects.js

Contains functions that handle creation of initial To-Do List and projects

*/

import { addItemButton } from "./items";
import { placeItem } from "./inputForm";
import { addEditButton, editText, editTitleButton, editTitle} from "./edit";

const content = document.getElementsByTagName("content");

/* addTitle()

Adds main title ('To Do List') to the title screen.

*/

const addTitle = () => {

    const content = document.getElementById('content');
    const mainTitle = document.createElement('div');
    mainTitle.classList.add('main-title');
    mainTitle.textContent = 'To-Do List';
    mainTitle.appendChild(editTitleButton(mainTitle));
    content.appendChild(mainTitle);

};

/* addProjectButton()

Adds Project Button (visual only) to the initial display

*/

const addProjectButton = () =>{

    const content = document.getElementById('content');
    const projectButton = document.createElement('button');
    projectButton.classList.add('add-project');
    projectButton.textContent = "+";
    content.appendChild(projectButton);

};

/* createProjectsDiv()

Creates/initializes container for projects to be added to To-Do List

*/

const createProjectsDiv = () => {

    const content = document.getElementById('content');
    const projectDivs = document.createElement('div');
    projectDivs.classList.add('projects');
    content.appendChild(projectDivs);
};

/* createProject()
 
    Initializes creation of project.

    Features project title that can be edited with a button.

    Initializes item list (can be seem as a task list).

    Allows for item to be added to project one at a time.


 */

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