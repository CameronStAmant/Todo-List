import todoView from './todoView';

const todoSaveEdit = () => {
  let todoEdit = document.getElementById('todoEdit');
  todoEdit.addEventListener('click', () => {
    let todoInfo = document.querySelectorAll('.todoInfo');
    let getID = todoInfo[1].id;
    let updateID = todoInfo[1].value;
    let targetDiv = document.getElementById(getID);
    let targetButton = document.getElementById(`view-${targetDiv.id}`);
    targetButton.id = `view-${updateID}`;
    targetDiv.id = updateID;
    targetDiv.innerHTML = updateID;
    todoInfo[1].id = updateID;
    todoInfo[1].value = updateID;
    todoView(updateID, getID);
  })
}

export default todoSaveEdit