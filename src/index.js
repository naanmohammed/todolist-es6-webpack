import './styles.css';
import {addTask} from './addTasks.js';
import {deleteTask} from './deleteTasks.js';
import {updateTask} from './updateTasks.js';
import {saveTasksToLocalStorage} from './saveToLocalStorage';
import {getTasksFromLocalStorage} from './getTasksFromLocalStorage';

let tasks = [];

function populateTaskList() {
  let taskList = document.getElementById('task-list');
  taskList.innerHTML = '';

  const sortedTasks = tasks.sort((a, b) => a.index - b.index);
  for (let i = 0; i < sortedTasks.length; i += 1) {
    let task = sortedTasks[i];
    let listItem = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    checkbox.checked = task.completed;
    listItem.appendChild(checkbox);
    let taskDescription = document.createElement('span');
    taskDescription.innerText = task.description;
    listItem.appendChild(taskDescription);
    if (task.completed) {
      listItem.classList.add('completed');
    }
    let icon = document.createElement('i');
    icon.classList.add('fa');
    icon.classList.add('task-menu');
    icon.innerHTML = '&#xf142;';
    icon.style
    listItem.appendChild(icon);

    let menu = document.createElement('div');
    menu.classList.add('menu');
    menu.style.display = 'none';
    let updateButton = document.createElement('button');
    updateButton.innerText = 'Update';
    menu.appendChild(updateButton);
    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    menu.appendChild(deleteButton);
    listItem.appendChild(menu);

    checkbox.addEventListener('click', function () {
      task.completed = checkbox.checked;
      saveTasksToLocalStorage(tasks);
      if (task.completed) {
        listItem.classList.add('completed');
      } else {
        listItem.classList.remove('completed');
      }
    });

    icon.addEventListener('click', function (event) {
      event.stopPropagation();
      if (menu.style.display === 'none') {
        menu.style.display = 'block';
      } else {
        menu.style.display = 'none';
      }
    });

    updateButton.addEventListener('click', function () {
      const taskId = listItem.getAttribute('data-id');
      const taskDescriptionInput = document.createElement('input');
      taskDescriptionInput.type = 'text';
      taskDescriptionInput.value = taskDescription.innerText;
      taskDescription.parentNode.replaceChild(taskDescriptionInput, taskDescription);
      taskDescriptionInput.focus();
    
      const onEnterKeyPress = function (event) {
        if (event.key === 'Enter') {
          const newDescription = taskDescriptionInput.value;
          updateTask(taskId, newDescription);
          taskDescription.innerText = newDescription;
          taskDescriptionInput.blur();
          saveTasksToLocalStorage(tasks);
          
        }
      };
      taskDescriptionInput.addEventListener('keypress', onEnterKeyPress);
    
      taskDescriptionInput.addEventListener('blur', function() {
        taskDescriptionInput.removeEventListener('keypress', onEnterKeyPress);
        taskDescriptionInput.parentNode.replaceChild(taskDescription, taskDescriptionInput);
      });
    
      menu.style.display = 'none';
    });
    

    deleteButton.addEventListener('click', function () {
      const index = sortedTasks.findIndex((t) => t.description === task.description);
      tasks = deleteTask(tasks, index);
      populateTaskList();
      saveTasksToLocalStorage(tasks);
    });

    listItem.setAttribute('data-id', task.id);
    taskList.appendChild(listItem);
  }
}

window.onload = function () {
  tasks = getTasksFromLocalStorage();
  populateTaskList();
};

const taskInput = document.getElementById('task-input');
taskInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    addTask(tasks);
    populateTaskList();
    saveTasksToLocalStorage(tasks)
  }
});

