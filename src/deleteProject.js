const deleteProject = () => {
  let projectsListing = document.getElementById('workspace');
  let projectArray = [];
  for (let i = 1; i < projectsListing.children.length; i++) {
    if (projectsListing.children[i].className != 'delete-btn') {
      let a = projectsListing.children[i].id;
      projectArray[i] = `delete-${a}`;
      let b = document.getElementById(projectArray[i]);
      b.addEventListener('click', () => {
        let c = b.id.split('-')[1];
        if (document.getElementById(c) === null) {
          return;
        }
        let todoInfo = document.querySelectorAll('.todoInfo');
        let parentNode;
        if (document.getElementById(`view-${todoInfo[1].id}`) != null) {
          parentNode = document.getElementById(`view-${todoInfo[1].id}`).parentNode.parentNode.id;
          if (parentNode == c) {
            todoInfo[0].style.display = 'none';
            todoInfo[1].style.display = 'none';
            todoInfo[2].style.display = 'none';
            todoInfo[3].style.display = 'none';
            todoInfo[4].style.display = 'none';
            todoInfo[5].style.display = 'none';
            todoInfo[6].style.display = 'none';
            todoInfo[7].style.display = 'none';
          }
        }
        document.getElementById(c).remove();
        b.remove();
        let workspaceArea = document.getElementById('workspace');
        localStorage.setItem(`everything`, `${workspaceArea.innerHTML}`);
      }) 
    }
  }
}

export default deleteProject