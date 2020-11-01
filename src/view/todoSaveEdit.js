import todoView from './todoView';

const todoSaveEdit = () => {
  let todoEdit = document.getElementById('todoEdit');
  todoEdit.addEventListener('click', () => {
    let todoInfo = document.querySelectorAll('.todoInfo');
    let getID = todoInfo[1].id;
    let updateID = todoInfo[1].value;
    let updateDescription = todoInfo[3].value;
    let targetDiv = document.getElementById(getID);
    targetDiv.firstElementChild.innerHTML = updateID;
    targetDiv.setAttribute('description', updateDescription);
    todoInfo[0].style.display = 'none';
    todoInfo[1].style.display = 'none';
    todoInfo[2].style.display = 'none';
    todoInfo[3].style.display = 'none';
    todoInfo[4].style.display = 'none';
  })
}

export default todoSaveEdit