const projectButtonActions = () => {
  let projectForm = document.createElement('FORM');

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

  let breakBr1 = document.createElement('br');

  createProject.appendChild(projectForm);
  createProject.appendChild(projectName);
  createProject.appendChild(projectTitleInput);
  createProject.appendChild(breakBr1);
  createProject.appendChild(projectCancel);
  createProject.appendChild(projectSubmit);

  const projectButton = document.getElementById('createProject');
  const todoButton = document.getElementById('createTodo');
  addProjectButton.addEventListener('click', () => {
    todoButton.style.display = 'none';
    projectTitleInput.value = '';
    projectButton.style.display = 'block';
  });
}

export default projectButtonActions