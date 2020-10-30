import todoFactory from './todoFactory';

const todoIndexToPage = () => {
  let addTodo = document.getElementById('addTodo');
  addTodo.addEventListener('click', () => {
    let name = document.getElementById('todoTitle').value;
    let workspaceArea = document.getElementById('workspace');
    let newTodoDiv = document.createElement('div');
    newTodoDiv.id = name;
    newTodoDiv.className = 'item';
    newTodoDiv.innerHTML = name;

    let viewTodo = document.createElement('BUTTON');
    viewTodo.innerHTML = 'View';
    viewTodo.className = 'view-todo';
    viewTodo.id = `view-${newTodoDiv.id}`;

    let selectedProject = document.getElementById('todoProject').value;
    let newTodo = todoFactory(name, selectedProject);
    document.getElementById(selectedProject).appendChild(newTodoDiv);
    document.getElementById(selectedProject).appendChild(viewTodo);
    const todoButton = document.getElementById('createTodo');
    const todoTitle = document.getElementById('todoTitle');
    todoButton.style.display = 'none';
    todoTitle.value = '';
  });
}

export default todoIndexToPage