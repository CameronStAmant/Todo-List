import deleteProject from './deleteProject';

const projectIndexToPage = (localStorageReloaded = null) => {
  let addProject = document.getElementById('addProject');
  addProject.addEventListener('click', () => {
    let name = document.getElementById('projectName').value;
    let workspaceArea = document.getElementById('workspace');
    let newProjectDiv = document.createElement('div');
    newProjectDiv.id = name;
    newProjectDiv.className = 'project';

    let projectPTag = document.createElement('p');
    projectPTag.innerHTML = name;
    projectPTag.className = 'project';

    let projectBrTag = document.createElement('br');

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