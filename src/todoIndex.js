import todoFactory from './todoFactory';
import todoView from './view/todoView';
import deleteTodo from './deleteTodo';
import { format } from 'date-fns';

const todoIndexToPage = () => {
  let addTodo = document.getElementById('addTodo');
  addTodo.addEventListener('click', () => {
    let name = document.getElementById('todoTitle').value;
    let description = document.getElementById('todoDescription').value;
    let priority;
    if (document.getElementById('titlePriorityOpt1').checked == true) {
      priority = 1;
    } else if (document.getElementById('titlePriorityOpt2').checked == true) {
      priority = 2;
    } else if (document.getElementById('titlePriorityOpt3').checked == true) {
      priority = 3;
    }

    let dueDate = document.getElementById('todoDueDate').value;


    let workspaceArea = document.getElementById('workspace');
    let newTodoDiv = document.createElement('div');
    newTodoDiv.id = name;
    let addDescription = document.createAttribute('description'); 
    addDescription.value = description;
    newTodoDiv.setAttributeNode(addDescription);
    
    let addPriority = document.createAttribute('priority');
    addPriority.value = priority;
    newTodoDiv.setAttributeNode(addPriority);
    newTodoDiv.className = 'item';

    let addDueDate = document.createAttribute('dueDate');
    addDueDate.value = dueDate;
    newTodoDiv.setAttributeNode(addDueDate);

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

    let dueDatePTag = document.createElement('p');
    let dueDateSplitter = dueDate.split('-');
    dueDatePTag.innerHTML = format(new Date(`${dueDateSplitter[0]}`, `${dueDateSplitter[1]}` - 1, `${dueDateSplitter[2]}`), 'MM/dd/yyyy');
    dueDatePTag.className = 'pItemDueDates';


    let projectBrTag = document.createElement('br');
    
    document.getElementById(selectedProject).appendChild(newTodoDiv);
    document.getElementById(newTodoDiv.id).appendChild(projectPTag);  
    document.getElementById(newTodoDiv.id).appendChild(dueDatePTag)  
    document.getElementById(newTodoDiv.id).appendChild(viewTodo);
    document.getElementById(newTodoDiv.id).appendChild(deleteTodoItem);
    const todoButton = document.getElementById('createTodo');
    const todoTitle = document.getElementById('todoTitle');
    const todoDescription = document.getElementById('todoDescription');
    todoButton.style.display = 'none';
    todoTitle.value = '';
    todoDescription.value = '';
    todoView();
    deleteTodo();
    localStorage.setItem(`everything`, `${workspaceArea.innerHTML}`);
  });
}

export default todoIndexToPage