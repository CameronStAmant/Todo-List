const projectCancelButton = () => {
  const projectCancelClick = document.getElementById('cancelProject');
  const projectButton = document.getElementById('createProject');
  const projectName = document.getElementById('projectName');
  projectCancelClick.addEventListener('click', () => {
    projectButton.style.display = 'none';
    projectName.value = '';
  })
}

export default projectCancelButton