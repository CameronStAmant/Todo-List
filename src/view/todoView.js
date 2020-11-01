const todoView = (newValue = null, oldValue = null) => {
  let viewArray = [];
  let projectList = document.getElementById('workspace');
  (function looper() {
    for (let i = 0; i < projectList.children.length; i++) {
      if (projectList.children[i].className != 'delete-btn') {
        let parentID = document.getElementById(projectList.children[i].id);
        for (let j = 0; j < parentID.children.length; j++) {
          for (let childrenList = 0; childrenList < parentID.children[j].children.length; childrenList++) {
            if (parentID.children[j].children[childrenList].className == 'view-todo') {
              let childID = parentID.children[j].children[childrenList].id;
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
                  todoInfo[1].value = viewTodoItem.firstElementChild.innerHTML;
                  todoInfo[1].id = viewTodoItem.id;
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
            };
          };
        };
      };
    };
  })();
};

export default todoView