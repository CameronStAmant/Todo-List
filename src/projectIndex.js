import deleteProject from './deleteProject';

const projectIndexToPage = (localStorageReloaded = null) => {
  let addProject = document.getElementById('addProject');
  addProject.addEventListener('click', () => {
    if (document.getElementById('projectName').value === null) {
      alert('Give your project a name.');
      return;
    }
    if (document.getElementById(document.getElementById('projectName').value) != null) {
      alert('There is already a project with that title. Please choose a new title');
      return;
    }
    let workspaceArea = document.getElementById('workspace');
    let newProjectDiv = document.createElement('div');
    newProjectDiv.id = document.getElementById('projectName').value;
    newProjectDiv.className = 'project';

    let projectPTag = document.createElement('p');
    projectPTag.innerHTML = document.getElementById('projectName').value;
    projectPTag.className = 'project';

    let deleteBtn = document.createElement('BUTTON');
    deleteBtn.innerHTML = 'Remove';
    deleteBtn.className = 'delete-btn';
    deleteBtn.value = 'a';
    deleteBtn.id = `delete-${newProjectDiv.id}`;

    workspaceArea.appendChild(newProjectDiv);
    newProjectDiv.appendChild(projectPTag);
    projectPTag.appendChild(deleteBtn);
    const projectButton = document.getElementById('createProject');
    const projectName = document.getElementById('projectName');
    projectButton.style.display = 'none';
    projectName.value = '';
    deleteProject();
    localStorage.setItem(`everything`, `${workspaceArea.innerHTML}`);
  });
}

export default projectIndexToPage