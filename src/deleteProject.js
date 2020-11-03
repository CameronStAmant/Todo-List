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
        document.getElementById(c).remove();
        b.remove();
        let workspaceArea = document.getElementById('workspace');
        localStorage.setItem(`everything`, `${workspaceArea.innerHTML}`);
      }) 
    }
  }
}

export default deleteProject