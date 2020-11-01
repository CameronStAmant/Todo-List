import todoFactory from './todoFactory';
import todoView from './view/todoView';
import deleteTodo from './deleteTodo';

const todoIndexToPage = () => {
  let addTodo = document.getElementById('addTodo');
  addTodo.addEventListener('click', () => {
    let name = document.getElementById('todoTitle').value;
    let description = document.getElementById('todoDescription').value;
    console.log(description);
    let workspaceArea = document.getElementById('workspace');
    let newTodoDiv = document.createElement('div');
    newTodoDiv.id = name;
    let addDescription = document.createAttribute('description'); 
    addDescription.value = description;
    newTodoDiv.setAttributeNode(addDescription);
    newTodoDiv.className = 'item';

    let viewTodo = document.createElement('BUTTON');
    viewTodo.innerHTML = 'View';
    viewTodo.className = 'view-todo';
    viewTodo.id = `view-${newTodoDiv.id}`;

    let deleteTodoItem = document.createElement('BUTTON');
    deleteTodoItem.innerHTML = 'Delete';
    deleteTodoItem.className = 'delete-todo';
    deleteTodoItem.id = `delete-${newTodoDiv.id}`;

    let selectedProject = document.getElementById('todoProject').value;
    let newTodo = todoFactory(name, selectedProject);

    let projectPTag = document.createElement('p');
    projectPTag.innerHTML = name;
    projectPTag.className = 'pItem';

    let projectBrTag = document.createElement('br');
    
    document.getElementById(selectedProject).appendChild(newTodoDiv);
    document.getElementById(newTodoDiv.id).appendChild(projectPTag);    
    document.getElementById(newTodoDiv.id).appendChild(viewTodo);
    document.getElementById(newTodoDiv.id).appendChild(deleteTodoItem);
    const todoButton = document.getElementById('createTodo');
    const todoTitle = document.getElementById('todoTitle');
    todoButton.style.display = 'none';
    todoTitle.value = '';
    todoView();
    deleteTodo();
  });
}

export default todoIndexToPage