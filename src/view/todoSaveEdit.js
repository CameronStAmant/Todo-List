import todoView from './todoView';

const todoSaveEdit = () => {
  let todoEdit = document.getElementById('todoEdit');
  todoEdit.addEventListener('click', () => {
    let todoInfo = document.querySelectorAll('.todoInfo');
    let getID = todoInfo[1].id;
    let updateID = todoInfo[1].value;
    let updateDescription = todoInfo[3].value;
    let updatePriority;
    if (document.getElementById('titlePriorityEditOpt1').checked == true) {
      updatePriority = 1;
    } else if (document.getElementById('titlePriorityEditOpt2').checked == true) {
      updatePriority = 2;
    } else if (document.getElementById('titlePriorityEditOpt3').checked == true) {
      updatePriority = 3;
    }
    let targetDiv = document.getElementById(getID);
    targetDiv.firstElementChild.innerHTML = updateID;
    targetDiv.setAttribute('description', updateDescription);
    targetDiv.setAttribute('priority', updatePriority);
    todoInfo[0].style.display = 'none';
    todoInfo[1].style.display = 'none';
    todoInfo[2].style.display = 'none';
    todoInfo[3].style.display = 'none';
    todoInfo[4].style.display = 'none';
    todoInfo[5].style.display = 'none';
  })
}

export default todoSaveEdit