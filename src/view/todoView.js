const todoView = () => {
  let viewListings = document.getElementById('workspace');
  let viewArray = [];
  for (let i = 0; i < viewListings.children.length; i++) {
    if (viewListings.children[i].className != 'delete-btn') {
      let b = document.getElementById(viewListings.children[i].id);
      for (let j = 0; j < b.children.length; j++) {
        if (b.children[j].className == 'view-todo') {
          let a = b.children[j].id;
          viewArray[i] = a;
          let c = document.getElementById(viewArray[i]);
          c.addEventListener('click', () => {
            let viewIt = document.getElementById('todoSpace');
            let d = viewArray[i].split('-')[1];
            let viewTodoItem = document.getElementById(d);
            let todoInfo = document.querySelectorAll('.todoInfo');
            todoInfo[1].value = viewTodoItem.innerHTML;
            todoInfo[1].id = viewTodoItem.innerHTML;
            todoInfo[0].style.display = 'block';
            todoInfo[1].style.display = 'block';
            todoInfo[2].style.display = 'block';
          }) 
        }
      }
    }
  }
}

export default todoView