import todoView from './todoView';

const todoSaveEdit = () => {
  let todoEdit = document.getElementById('todoEdit');
  todoEdit.addEventListener('click', () => {
    let todoInfo = document.querySelectorAll('.todoInfo');
    let getID = todoInfo[1].id;
    let updateID = todoInfo[1].value;
    console.log(`getID ${getID}`)
    let targetDiv = document.getElementById(getID);
    console.log(`updateID ${todoInfo[1]}`);
    console.log(`old HTML ${targetDiv.innerHTML}`);
    targetDiv.innerHTML = updateID;
    console.log(`new HTML ${targetDiv.innerHTML}`);
  })
}

export default todoSaveEdit