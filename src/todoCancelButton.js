import todoButtonActions from "./todoButton";

const todoCancelButton = () => {
  const todoCancelClick = document.getElementById('cancelTodo');
  const todoButton = document.getElementById('createTodo');
  const todoTitle = document.getElementById('todoTitle')  const todoDescription = document.getElementById('todoDescription');
  todoCancelClick.addEventListener('click', () => {
    todoButton.style.display = 'none';
    todoTitle.value = '';
    todoDescription.value = '';
  })
}

export default todoCancelButton