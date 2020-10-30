// import todoView from './todoView';

const todoSaveEdit = () => {
  let todoEdit = document.getElementById('todoEdit');
  console.log('re');
  todoEdit.addEventListener('click', () => {
    let todoInfo = document.querySelectorAll('.todoInfo');
    console.log('r');
    let getID = todoInfo[1].id;
    let updateID = todoInfo[1].value;
    let targetDiv = document.getElementById(getID);
    let targetButton = document.getElementById(`view-${targetDiv.id}`);
    targetButton.id = `view-${updateID}`;
    targetDiv.id = updateID;
    targetDiv.innerHTML = updateID;
    console.log('w');
    // todoView();
  })
}

export default todoSaveEdit