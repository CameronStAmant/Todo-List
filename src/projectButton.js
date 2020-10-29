import projectIndexToPage from './projectIndex';
import todoButtonActions from './todoButton';

const projectButtonActions = () => {
  let projectForm = document.createElement('FORM');
  // projectForm.innerHTML = "<label for='title'>Title:</label><input type='text' id='title' name='title' value=''><br><input type='button' id='addProject' value='Create'>";
  // createProject.appendChild(projectForm);
  let projectName = document.createElement('label');
  projectName.innerHTML = 'Name:';
  
  let projectTitleInput = document.createElement('INPUT');
  projectTitleInput.setAttribute('type', 'text');
  projectTitleInput.id = 'projectName';

  let projectSubmit = document.createElement('INPUT');
  projectSubmit.setAttribute('type', 'button');
  projectSubmit.value = 'Create';
  projectSubmit.id = 'addProject';

  let projectCancel = document.createElement('INPUT');
  projectCancel.setAttribute('type', 'button');
  projectCancel.setAttribute('value', 'Cancel');
  projectCancel.id = 'cancelProject';

  createProject.appendChild(projectForm);
  createProject.appendChild(projectName);
  createProject.appendChild(projectTitleInput);
  createProject.appendChild(projectSubmit);
  createProject.appendChild(projectCancel);

  const projectButton = document.getElementById('createProject');
  addProjectButton.addEventListener('click', () => {
    projectButton.style.display = 'block';
  });
}

export default projectButtonActions