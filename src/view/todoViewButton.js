const todoViewButton = () => {
  let viewTodo = document.createElement('BUTTON');
  deleteBtn.innerHTML = 'View';
  deleteBtn.className = 'view-todo';
  deleteBtn.id = `view-${newProjectDiv.id}`;
}

export default todoViewButton