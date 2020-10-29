import todoButtonActions from "./todoButton";

const todoCancelButton = () => {
  const todoCancelClick = document.getElementById('cancelTodo');
  const todoButton = document.getElementById('createTodo');
  const todoTitle = document.getElementById('todoTitle');
  todoCancelClick.addEventListener('click', () => {
    todoButton.style.display = 'none';
    todoTitle.value = '';
  })
}

export default todoCancelButton