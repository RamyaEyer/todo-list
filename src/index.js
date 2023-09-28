/* index.js

Adds initial design components for To-Do List + enables functioning for add project button.

*/

import {addTitle, addProjectButton, createProjectsDiv, createProject} from "./pages/projects";
import { addItemButton } from "./pages/items";
import "./css/style.css";

addTitle();
createProjectsDiv();
addProjectButton();

const projectButton = document.querySelector('.add-project');

projectButton.addEventListener("click", () => {

    createProject();

});




