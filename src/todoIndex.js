import todoFactory from './todoFactory';
import todoView from './view/todoView';

const todoIndexToPage = () => {
  let addTodo = document.getElementById('addTodo');
  addTodo.addEventListener('click', () => {
    let name = document.getElementById('todoTitle').value;
    let workspaceArea = document.getElementById('workspace');
    let newTodoDiv = document.createElement('div');
    newTodoDiv.id = name;
    newTodoDiv.className = 'item';

    let viewTodo = document.createElement('BUTTON');
    viewTodo.innerHTML = 'View';
    viewTodo.className = 'view-todo';
    viewTodo.id = `view-${newTodoDiv.id}`;

    let selectedProject = document.getElementById('todoProject').value;
    let newTodo = todoFactory(name, selectedProject);

    let projectPTag = document.createElement('p');
    projectPTag.innerHTML = name;
    projectPTag.className = 'item';

    let projectBrTag = document.createElement('br');
    
    document.getElementById(selectedProject).appendChild(newTodoDiv);
    document.getElementById(newTodoDiv.id).appendChild(projectPTag);
    document.getElementById(newTodoDiv.id).appendChild(viewTodo);
    document.getElementById(selectedProject).appendChild(projectBrTag);
    const todoButton = document.getElementById('createTodo');
    const todoTitle = document.getElementById('todoTitle');
    todoButton.style.display = 'none';
    todoTitle.value = '';
    todoView();
  });
}

export default todoIndexToPage