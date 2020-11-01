import projectIndexToPage from './projectIndex';
import projectButtonList from './projectList';

const todoButtonActions = () => {
  let todoForm = document.createElement('FORM');
  let titleLabel = document.createElement('label');
  titleLabel.innerHTML = 'Title:';
  let titleInput = document.createElement('INPUT');
  titleInput.setAttribute('type', 'text');
  titleInput.id = 'todoTitle';

  let todoProjectLabel = document.createElement('label');
  todoProjectLabel.innerHTML = 'Project';
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

  todoForm.appendChild(titleLabel);
  todoForm.appendChild(titleInput);
  todoForm.appendChild(todoProjectLabel);
  todoForm.appendChild(todoProject);
  todoForm.appendChild(titleSubmit);
  todoForm.appendChild(titleCancel);
  createTodo.appendChild(todoForm);

  const todoButton = document.getElementById('createTodo');
  const projectButton = document.getElementById('createProject');
  addTodoButton.addEventListener('click', () => {
    projectButton.style.display = 'none';
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