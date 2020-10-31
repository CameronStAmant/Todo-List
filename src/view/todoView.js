const todoView = (newValue = null, oldValue = null) => {
  let viewArray = [];
  let viewListings = document.getElementById('workspace');
  (function looper() {    
    // viewArray = [];

    for (let i = 0; i < viewListings.children.length; i++) {
      if (viewListings.children[i].className != 'delete-btn') {
        let ParentID = document.getElementById(viewListings.children[i].id);
        for (let j = 0; j < ParentID.children.length; j++) {
          if (ParentID.children[j].className == 'view-todo') {
            let childID = ParentID.children[j].id;
            viewArray[i] = childID;
            let c = document.getElementById(viewArray[i]);
            // c.addEventListener('click', viewEvent);
              let viewEvent = function () {
              let d = viewArray[i].split('-')[1];
              let viewTodoItem = document.getElementById(d);
              let todoInfo;
              (function () {
                todoInfo = document.querySelectorAll('.todoInfo');
              })();
              // console.log('1');
              if (viewTodoItem === null) {
                // console.log('in the null');
                c.removeEventListener('click', viewEvent);
                // continue;
              } else {
              // console.log(`This is childID: ${childID} and this is the new value: ${newValue} and this is the old value: ${oldValue} and the array of elements is ${viewArray}`);
              viewArray[i] = `view-${viewTodoItem.innerHTML}`;
              // console.log('2');
              todoInfo[1].value = viewTodoItem.innerHTML;
              // console.log('3');
              todoInfo[1].id = viewTodoItem.innerHTML;
              todoInfo[0].style.display = 'block';
              todoInfo[1].style.display = 'block';
              todoInfo[2].style.display = 'block';
              }
            };
            c.addEventListener('click', viewEvent);
          }
        }
      }
    }
  })();
}

export default todoView