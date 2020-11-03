import projectIndexToPage from './projectIndex';
import projectButtonList from './projectList';

const todoButtonActions = () => {
  let todoForm = document.createElement('FORM');
  let titleLabel = document.createElement('label');
  titleLabel.innerHTML = 'Title:';
  let titleInput = document.createElement('INPUT');
  titleInput.setAttribute('type', 'text');
  titleInput.id = 'todoTitle';

  let titleDescriptionLabel = document.createElement('label');
  titleDescriptionLabel.innerHTML = 'Description:';
  let titleDescription = document.createElement('TEXTAREA');
  titleDescription.id = 'todoDescription';

  let titlePriorityLabel = document.createElement('label');
  titlePriorityLabel.innerHTML = 'Priority:';

  let titlePriorityOpt1 = document.createElement('INPUT');
  titlePriorityOpt1.setAttribute('type', 'radio');
  titlePriorityOpt1.setAttribute('id', 'titlePriorityOpt1');
  titlePriorityOpt1.setAttribute('name', 'priority');

  let titlePriorityOpt1Label = document.createElement('label');
  titlePriorityOpt1Label.innerHTML = '!!!';
  titlePriorityOpt1Label.value = '!!!';

  let titlePriorityOpt2 = document.createElement('INPUT');
  titlePriorityOpt2.setAttribute('type', 'radio');
  titlePriorityOpt2.setAttribute('id', 'titlePriorityOpt2');
  titlePriorityOpt2.setAttribute('name', 'priority');

  let titlePriorityOpt2Label = document.createElement('label');
  titlePriorityOpt2Label.innerHTML = '!!';
  titlePriorityOpt2Label.value = '!!';

  let titlePriorityOpt3 = document.createElement('INPUT');
  titlePriorityOpt3.setAttribute('type', 'radio');
  titlePriorityOpt3.setAttribute('id', 'titlePriorityOpt3');
  titlePriorityOpt3.setAttribute('name', 'priority');

  let titlePriorityOpt3Label = document.createElement('label');
  titlePriorityOpt3Label.innerHTML = '!';
  titlePriorityOpt3Label.value = '!';

  let todoDueDateLabel = document.createElement('label');
  todoDueDateLabel.innerHTML = 'Due Date:'
  let todoDueDate = document.createElement('INPUT');
  todoDueDate.setAttribute('type', 'date');
  todoDueDate.id = 'todoDueDate';

  let todoProjectLabel = document.createElement('label');
  todoProjectLabel.innerHTML = 'Project:';
  let todoProject = document.createElement('SELECT');
  todoProject.id = 'todoProject';

  let titleSubmit = document.createElement('INPUT');
  titleSubmit.setAttribute('type', 'button');
  titleSubmit.id = 'addTodo';
  titleSubmit.value = 'Create';

  let titleCancel = document.createElement('INPUT');
  titleCancel.setAttribute('type', 'button');
  titleCancel.id = 'cancelTodo';
  titleCancel.value = 'Cancel';

  let breakBr1 = document.createElement('br');
  let breakBr2 = document.createElement('br');
  let breakBr3 = document.createElement('br');
  let breakBr4 = document.createElement('br');
  let breakBr5 = document.createElement('br');

  todoForm.appendChild(titleLabel);
  todoForm.appendChild(titleInput);
  todoForm.appendChild(breakBr1);
  todoForm.appendChild(titleDescriptionLabel);
  todoForm.appendChild(titleDescription);
  todoForm.appendChild(breakBr2);
  todoForm.appendChild(titlePriorityLabel);
  titlePriorityLabel.appendChild(titlePriorityOpt1);
  titlePriorityLabel.appendChild(titlePriorityOpt1Label);
  titlePriorityLabel.appendChild(titlePriorityOpt2);
  titlePriorityLabel.appendChild(titlePriorityOpt2Label);
  titlePriorityLabel.appendChild(titlePriorityOpt3);
  titlePriorityLabel.appendChild(titlePriorityOpt3Label);
  todoForm.appendChild(titlePriorityOpt3Label);
  todoForm.appendChild(breakBr3);
  todoForm.appendChild(todoDueDateLabel);
  todoForm.appendChild(todoDueDate);
  todoForm.appendChild(breakBr4);
  todoForm.appendChild(todoProjectLabel);
  todoForm.appendChild(todoProject);
  todoForm.appendChild(breakBr5);
  todoForm.appendChild(titleCancel);
  todoForm.appendChild(titleSubmit);
  createTodo.appendChild(todoForm);

  const todoButton = document.getElementById('createTodo');
  const projectButton = document.getElementById('createProject');
  const todoPriorityOp1 = document.getElementById('titlePriorityOpt1');
  const todoPriorityOp2 = document.getElementById('titlePriorityOpt2');
  const todoPriorityOp3 = document.getElementById('titlePriorityOpt3');
  addTodoButton.addEventListener('click', () => {
    projectButton.style.display = 'none';
    titleInput.value = '';
    titleDescription.value = '';
    todoPriorityOp1.checked = false;
    todoPriorityOp2.checked = false;
    todoPriorityOp3.checked = false;
    todoDueDate.value = '';
    todoButton.style.display = 'block';
    let projectArrayList = [];
    todoProject.innerHTML = '';
    projectArrayList = projectButtonList();

    for (let i = 0; i < projectArrayList.length; i++) {

      let a = document.createElement('option');
      a.value = projectArrayList[i];
      a.innerHTML = projectArrayList[i];
      todoProject.appendChild(a);
    }
  });
}

export default todoButtonActions