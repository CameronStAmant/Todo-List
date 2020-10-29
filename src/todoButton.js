const todoButtonActions = () => {
  let todoForm = document.createElement('FORM');
  todoForm.innerHTML = "<label for='todoTitle'>Title:</label><input type='text' id='todoTitle' name='todoTitle' value=''><br><label for='todoProject'>Project:</label><br><select id='todoProject' name='todoProject'><option value='defaultSpace'>Default</option><option value='defaultSpace2'>Default2</option></select><input type='button' id='addTodo' value='Create'>";
  createTodo.appendChild(todoForm);

  const todoButton = document.getElementById('createTodo');
  addTodoButton.addEventListener('click', () => {
    todoButton.style.display = 'block';
  });
}

export default todoButtonActions