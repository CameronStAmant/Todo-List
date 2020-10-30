import projectIndexToPage from './projectIndex';

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

  let space = document.createElement('div');
  space.id = 'space';
  contentDiv.appendChild(space);

  let workSpace = document.createElement('div');
  workSpace.id = 'workspace';
  workSpace.innerHTML = 'Projects';
  space.appendChild(workSpace);

  let todoSpace = document.createElement('div');
  todoSpace.id = 'todoSpace';
  todoSpace.innerHTML = 'Todo';
  space.appendChild(todoSpace);

  // let todoForm = document.createElement('FORM');

  // let todoTitleLabel = document.createElement('label');
  // todoTitleLabel.id = 'todoTitleLabel';
  // todoTitleLabel.className = 'todoInfo';
  // todoTitleLabel.innerHTML = 'Title:';
  // todoSpace.appendChild(todoTitleLabel);

  // let todoTitle = document.createElement('INPUT');
  // todoTitle.setAttribute('type', 'text');
  // todoTitle.className = 'todoInfo';
  // todoTitle.setAttribute('value', `a`);
  // todoTitleLabel.appendChild(todoTitle);

  // let todoEdit = document.createElement('BUTTON');
  // todoEdit.innerHTML = 'Save';
  // todoEdit.className = 'todoInfo';
  // todoSpace.appendChild(todoEdit);
}

export default homepage