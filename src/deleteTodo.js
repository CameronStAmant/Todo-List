const deleteTodo = () => {
  let pList = document.querySelectorAll('.delete-todo');
  pList.forEach(
    function(listObj) {
      listObj.addEventListener('click', () => {
          let listObjSplit = listObj.id.split('-')[1];
          if (document.getElementById(listObjSplit) === null) {
            return;
          }
          document.getElementById(listObjSplit).remove();
          listObj.remove();
          let workspaceArea = document.getElementById('workspace');
          localStorage.setItem(`everything`, `${workspaceArea.innerHTML}`);

          let todoInfo = document.querySelectorAll('.todoInfo');

          if (listObjSplit == todoInfo[1].id) {
            todoInfo[0].style.display = 'none';
            todoInfo[1].style.display = 'none';
            todoInfo[2].style.display = 'none';
            todoInfo[3].style.display = 'none';
            todoInfo[4].style.display = 'none';
            todoInfo[5].style.display = 'none';
            todoInfo[6].style.display = 'none';
            todoInfo[7].style.display = 'none';
          }
        })
    });
}

export default deleteTodo