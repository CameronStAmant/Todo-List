const todoCancelButton = () => {
  const todoCancelClick = document.getElementById('cancelTodo');
  const todoButton = document.getElementById('createTodo');
  const todoTitle = document.getElementById('todoTitle');
  const todoDescription = document.getElementById('todoDescription');
  const todoPriorityOp1 = document.getElementById('titlePriorityOpt1');
  const todoPriorityOp2 = document.getElementById('titlePriorityOpt2');
  const todoPriorityOp3 = document.getElementById('titlePriorityOpt3');
  todoCancelClick.addEventListener('click', () => {
    todoButton.style.display = 'none';
    todoPriorityOp1.checked = false;
    todoPriorityOp2.checked = false;
    todoPriorityOp3.checked = false;
    todoTitle.value = '';
    todoDescription.value = '';
  })
}

export default todoCancelButton