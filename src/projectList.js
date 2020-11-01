//adds projects to the todo dropdown list when creating a todo
const projectButtonList = () => {
  let projectsListing = document.getElementById('workspace');
  let projectArray = [];
  for (let i = 1; i < projectsListing.children.length; i++) {
    if (projectsListing.children[i].className != 'delete-btn') {
      projectArray.push(projectsListing.children[i].id);
    }
  }
  return projectArray;
}

export default projectButtonList