import projectIndexToPage from './projectIndex';

const projectButtonActions = () => {
  let projectForm = document.createElement('FORM');
  projectForm.innerHTML = "<label for='title'>Title:</label><input type='text' id='title' name='title' value=''><br><input type='button' id='addProject' value='Create'>";
  createProject.appendChild(projectForm);

  const projectButton = document.getElementById('createProject');
  addProjectButton.addEventListener('click', () => {
    projectButton.style.display = 'block';
  });
}

export default projectButtonActions