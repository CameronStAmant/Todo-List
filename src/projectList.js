const projectButtonList = () => {
  let projectsListing = document.getElementById('workspace');
  let projectArray = [];
  for (let i = 0; i < projectsListing.children.length; i++) {
    projectArray.push(projectsListing.children[i].id);
  }
  // console.log(projectArray);
  return projectArray;
}

export default projectButtonList