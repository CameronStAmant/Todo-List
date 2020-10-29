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


  let addTodoButton = document.createElement('BUTTON');
  addTodoButton.innerHTML = '+ Todo';
  addTodoButton.id = 'addTodoButton';
  contentDiv.appendChild(addTodoButton);

  let createTodo = document.createElement('div');
  createTodo.id = 'createTodo';
  contentDiv.appendChild(createTodo);


  let workSpace = document.createElement('div');
  workSpace.id = 'workspace';
  workSpace.innerHTML = 'Projects';
  contentDiv.appendChild(workSpace);

  let defaultSpace = document.createElement('div');
  defaultSpace.id = 'defaultSpace';
  defaultSpace.innerHTML = 'Default';
  workSpace.appendChild(defaultSpace);

  let defaultSpace2 = document.createElement('div');
  defaultSpace2.id = 'defaultSpace2';
  defaultSpace2.innerHTML = 'Default2';
  workSpace.appendChild(defaultSpace2);
}

export default homepage