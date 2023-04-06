import './styles.css';
import {addTask} from './addTasks.js';
import {deleteTask} from './deleteTasks.js';
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

    updateButton.addEventListener('click', function (event) {
      event.stopPropagation();
      menu.style.display = 'none';
      const input = document.createElement('input');
      input.type = 'text';
      input.value = task.description;
      taskDescription.parentNode.replaceChild(input, taskDescription);
      input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
          const newDescription = input.value.trim();
          if (newDescription !== '') {
            task.description = newDescription;
            populateTaskList();
            saveTasksToLocalStorage(tasks);
          } else {
            input.parentNode.replaceChild(taskDescription, input);
          }
        } else if (event.key === 'Escape') {
          input.parentNode.replaceChild(taskDescription, input);
        }
      });
      input.focus();
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
