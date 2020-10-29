import projectFactory from './projectFactory';

const projectIndexToPage = () => {
  let addProject = document.getElementById('addProject');
  addProject.addEventListener('click', () => {
    let name = document.getElementById('projectName').value;
    let workspaceArea = document.getElementById('workspace');
    let newProjectDiv = document.createElement('div');
    newProjectDiv.id = name;
    newProjectDiv.innerHTML = name;
    let newProject = projectFactory(name);
    workspaceArea.appendChild(newProjectDiv);
  });
}

export default projectIndexToPage