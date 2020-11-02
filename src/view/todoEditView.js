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

  let todoPriorityEditLabel = document.createElement('label');
  todoPriorityEditLabel.id = 'todoPriorityEditLabel';
  todoPriorityEditLabel.className = 'todoInfo';
  todoPriorityEditLabel.innerHTML = 'Priority:';
  todoSpace.appendChild(todoPriorityEditLabel);

  let breakBr = document.createElement('br');
  todoPriorityEditLabel.appendChild(breakBr);

  let titlePriorityEditOpt1 = document.createElement('INPUT');
  titlePriorityEditOpt1.setAttribute('type', 'radio');
  titlePriorityEditOpt1.setAttribute('id', 'titlePriorityEditOpt1');
  titlePriorityEditOpt1.setAttribute('name', 'priority');
  todoPriorityEditLabel.appendChild(titlePriorityEditOpt1);

  let titlePriorityEditOpt1Label = document.createElement('label');
  titlePriorityEditOpt1Label.innerHTML = '!!!';
  titlePriorityEditOpt1Label.value = '!!!';
  todoPriorityEditLabel.appendChild(titlePriorityEditOpt1Label);

  let titlePriorityEditOpt2 = document.createElement('INPUT');
  titlePriorityEditOpt2.setAttribute('type', 'radio');
  titlePriorityEditOpt2.setAttribute('id', 'titlePriorityEditOpt2');
  titlePriorityEditOpt2.setAttribute('name', 'priority');
  todoPriorityEditLabel.appendChild(titlePriorityEditOpt2);

  let titlePriorityEditOpt2Label = document.createElement('label');
  titlePriorityEditOpt2Label.innerHTML = '!!';
  titlePriorityEditOpt2Label.value = '!!';
  todoPriorityEditLabel.appendChild(titlePriorityEditOpt2Label);

  let titlePriorityEditOpt3 = document.createElement('INPUT');
  titlePriorityEditOpt3.setAttribute('type', 'radio');
  titlePriorityEditOpt3.setAttribute('id', 'titlePriorityEditOpt3');
  titlePriorityEditOpt3.setAttribute('name', 'priority');
  todoPriorityEditLabel.appendChild(titlePriorityEditOpt3);

  let titlePriorityEditOpt3Label = document.createElement('label');
  titlePriorityEditOpt3Label.innerHTML = '!';
  titlePriorityEditOpt3Label.value = '!';
  todoPriorityEditLabel.appendChild(titlePriorityEditOpt3Label);

  let todoDueDateEditLabel = document.createElement('label');
  todoDueDateEditLabel.id = 'todoDueDateEditLabel';
  todoDueDateEditLabel.className = 'todoInfo';
  todoDueDateEditLabel.innerHTML = 'Due Date:';
  todoSpace.appendChild(todoDueDateEditLabel);

  let todoDueDateEdit = document.createElement('INPUT');
  todoDueDateEdit.setAttribute('type', 'date');
  todoDueDateEdit.className = 'todoInfo';
  todoDueDateEditLabel.appendChild(todoDueDateEdit);



  let todoEdit = document.createElement('BUTTON');
  todoEdit.innerHTML = 'Save';
  todoEdit.id = 'todoEdit';
  todoEdit.className = 'todoInfo';
  todoSpace.appendChild(todoEdit);
}

export default todoEditView