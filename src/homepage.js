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

  let addTodoButton = document.createElement('BUTTON');
  addTodoButton.innerHTML = '+ Todo';
  addTodoButton.id = 'addTodoButton';
  contentDiv.appendChild(addTodoButton);

  let createProject = document.createElement('div');
  createProject.id = 'createProject';
  contentDiv.appendChild(createProject);

  let createTodo = document.createElement('div');
  createTodo.id = 'createTodo';
  contentDiv.appendChild(createTodo);

  let space = document.createElement('div');
  space.id = 'space';
  contentDiv.appendChild(space);

  let workSpace = document.createElement('div');
  workSpace.id = 'workspace';
  space.appendChild(workSpace);
  
  let workPTag = document.createElement('p');
  workPTag.innerHTML = 'Projects';
  workPTag.id = 'projectHeader';
  workSpace.appendChild(workPTag);

  let todoSpace = document.createElement('div');
  todoSpace.id = 'todoSpace';
  todoSpace.innerHTML = 'Todo';
  space.appendChild(todoSpace);
}

export default homepage