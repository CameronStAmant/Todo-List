const homepage = () => {
  let contentDiv = document.getElementById('content');
  let header = document.createElement('h1');
  header.innerHTML = 'ToDo';
  header.id = 'header';
  contentDiv.appendChild(header);

  let addProjectButton = document.createElement('BUTTON');
  addProjectButton.innerHTML = '+ Project';
  addProjectButton.id = 'addProjectButton';
  contentDiv.appendChild(addProjectButton);

  let createProject = document.createElement('div');
  createProject.id = 'createProject';
  contentDiv.appendChild(createProject);

  let workSpace = document.createElement('div');
  workSpace.id = 'workspace';
  workSpace.innerHTML = 'Projects';
  contentDiv.appendChild(workSpace);
}

export default homepage