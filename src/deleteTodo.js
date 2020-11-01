const deleteTodo = () => {
  let projectsListing = document.getElementById('workspace');
  let projectArray = [];
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
        })
    });
}

export default deleteTodo