const todoEditView = () => {
  let todoForm = document.createElement('FORM');

  let todoTitleLabel = document.createElement('label');
  todoTitleLabel.id = 'todoTitleLabel';
  todoTitleLabel.className = 'todoInfo';
  todoTitleLabel.innerHTML = 'Title:';
  todoSpace.appendChild(todoTitleLabel);

  let todoTitle = document.createElement('INPUT');
  todoTitle.setAttribute('type', 'text');
  todoTitle.className = 'todoInfo';
  todoTitleLabel.appendChild(todoTitle);

  let todoDescriptionLabel = document.createElement('label');
  todoDescriptionLabel.id = 'todoDescriptionLabel';
  todoDescriptionLabel.className = 'todoInfo';
  todoDescriptionLabel.innerHTML = 'Description:';
  todoSpace.appendChild(todoDescriptionLabel);

  let todoDescription = document.createElement('INPUT');
  todoDescription.setAttribute('type', 'text');
  todoDescription.className = 'todoInfo';
  todoDescriptionLabel.appendChild(todoDescription);

  let todoEdit = document.createElement('BUTTON');
  todoEdit.innerHTML = 'Save';
  todoEdit.id = 'todoEdit';
  todoEdit.className = 'todoInfo';
  todoSpace.appendChild(todoEdit);
}

export default todoEditView