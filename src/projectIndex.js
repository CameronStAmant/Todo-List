import deleteProject from './deleteProject';

const projectIndexToPage = () => {
  let addProject = document.getElementById('addProject');
  addProject.addEventListener('click', () => {
    let name = document.getElementById('projectName').value;
    let workspaceArea = document.getElementById('workspace');
    let newProjectDiv = document.createElement('div');
    newProjectDiv.id = name;
    newProjectDiv.className = 'project';
    newProjectDiv.innerHTML = name;

    let deleteBtn = document.createElement('BUTTON');
    deleteBtn.innerHTML = 'Remove';
    deleteBtn.className = 'delete-btn';
    deleteBtn.id = `delete-${newProjectDiv.id}`;

    workspaceArea.appendChild(newProjectDiv);
    newProjectDiv.appendChild(deleteBtn);
    const projectButton = document.getElementById('createProject');
    const projectName = document.getElementById('projectName');
    projectButton.style.display = 'none';
    projectName.value = '';
    deleteProject();
  });
}

export default projectIndexToPage