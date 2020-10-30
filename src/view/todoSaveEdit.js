const todoSaveEdit = () => {
  'use strict';
  let todoEdit = document.getElementById('todoEdit');
  todoEdit.addEventListener('click', () => {
    let todoInfo = document.querySelectorAll('.todoInfo');
    let getID = todoInfo[1].id;
    let updateID = todoInfo[1].value;
    console.log(updateID);
    let targetDiv = document.getElementById(getID);
    targetDiv.id = updateID;
    targetDiv.innerHTML = updateID;
  })
}

export default todoSaveEdit