const todoView = (newValue = null, oldValue = null) => {
  let viewArray = [];
  let viewListings = document.getElementById('workspace');
  (function looper() {
    for (let i = 0; i < viewListings.children.length; i++) {
      if (viewListings.children[i].className != 'delete-btn') {
        let ParentID = document.getElementById(viewListings.children[i].id);
        for (let j = 0; j < ParentID.children.length; j++) {
          if (ParentID.children[j].className == 'view-todo') {
            let childID = ParentID.children[j].id;
            viewArray[i] = childID;
            let c = document.getElementById(viewArray[i]);
            let viewEvent = function () {
              let d = viewArray[i].split('-')[1];
              let viewTodoItem = document.getElementById(d);
              let todoInfo;
              (function () {
                todoInfo = document.querySelectorAll('.todoInfo');
              })();
              if (viewTodoItem === null) {
              } else {
                viewArray[i] = `view-${viewTodoItem.innerHTML}`;
                todoInfo[1].value = viewTodoItem.innerHTML;
                todoInfo[1].id = viewTodoItem.innerHTML;
                todoInfo[0].style.display = 'block';
                todoInfo[1].style.display = 'block';
                todoInfo[2].style.display = 'block';
              };
            };
            if (c.getAttribute('listener', 'true')) {
            } else {
              c.addEventListener('click', viewEvent);
              c.setAttribute('listener', 'true');
            };
          }
        }
      }
    }
  })();
}

export default todoView