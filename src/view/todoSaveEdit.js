import { format } from 'date-fns';

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
    let updateDueDate = todoInfo[6].value;
    let targetDiv = document.getElementById(getID);
    targetDiv.firstElementChild.innerHTML = updateID;
    let dueDateSplitter = updateDueDate.split('-');
    targetDiv.children[1].innerHTML = format(new Date(`${dueDateSplitter[0]}`, `${dueDateSplitter[1]}` - 1, `${dueDateSplitter[2]}`), 'MM/dd/yyyy');
    targetDiv.setAttribute('description', updateDescription);
    targetDiv.setAttribute('priority', updatePriority);
    targetDiv.setAttribute('dueDate', updateDueDate);
    todoInfo[0].style.display = 'none';
    todoInfo[1].style.display = 'none';
    todoInfo[2].style.display = 'none';
    todoInfo[3].style.display = 'none';
    todoInfo[4].style.display = 'none';
    todoInfo[5].style.display = 'none';
    let workspaceArea = document.getElementById('workspace');
    localStorage.setItem(`everything`, `${workspaceArea.innerHTML}`);
  })
}

export default todoSaveEdit