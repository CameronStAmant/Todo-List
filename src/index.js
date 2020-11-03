import todoFactory from './todoFactory';
import projectFactory from './projectFactory';
import homepage from './homepage';
import projectButtonActions from './projectButton';
import projectIndexToPage from './projectIndex';
import todoButtonActions from './todoButton';
import todoIndexToPage from './todoIndex';
import todoCancelButton from './todoCancelButton';
import projectCancelButton from './projectCancelButton';
import deleteProject from './deleteProject';
import defaultProject from './defaultProject';
import todoView from './view/todoView';
import todoEditView from './view/todoEditView';
import todoSaveEdit from './view/todoSaveEdit';
import deleteTodo from './deleteTodo';

homepage();
projectButtonActions();
projectIndexToPage();
todoButtonActions();
todoIndexToPage();
todoCancelButton();
projectCancelButton();
defaultProject();
deleteProject();
deleteTodo();
todoView();
todoEditView();
todoSaveEdit();
deleteTodo();
if (localStorage.getItem('everything') !== null) {
  let workspaceArea = document.getElementById('workspace');
  workspaceArea.innerHTML = '';
  workspaceArea.innerHTML = localStorage.getItem(`everything`);
  deleteProject();
  todoView('true');
  deleteTodo();
  // projectIndexToPage('true');
}