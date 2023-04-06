import './styles.css';
import { addTask } from './addTasks.js';
import { updateTask } from './updateTasks.js';
import { getTasksFromLocalStorage } from './getTasksFromLocalStorage.js';

let tasks = [];

function populateTaskList() {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';
  const sortedTasks = tasks.sort((a, b) => a.index - b.index);

  for (let i = 0; i < sortedTasks.length; i += 1) {
    const task = sortedTasks[i];
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    checkbox.checked = task.completed;
    listItem.appendChild(checkbox);
    const taskDescription = document.createElement('span');
    taskDescription.innerText = task.description;
    listItem.appendChild(taskDescription);
    if (task.completed) {
      listItem.classList.add('completed');
    }
    const icon = document.createElement('i');
    icon.classList.add('fa');
    icon.classList.add('task-menu');
    icon.innerHTML = '&#xf142;';
    listItem.appendChild(icon);

    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.style.display = 'none';
    const updateButton = document.createElement('button');
    updateButton.innerText = 'Update';
    menu.appendChild(updateButton);
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    menu.appendChild(deleteButton);
    listItem.appendChild(menu);

    checkbox.addEventListener('click', () => {
      task.completed = checkbox.checked;
      saveTasksToLocalStorage();
      if (task.completed) {
        listItem.classList.add('completed');
      } else {
        listItem.classList.remove('completed');
      }
    });

    icon.addEventListener('click', (event) => {
      event.stopPropagation();
      if (menu.style.display === 'none') {
        menu.style.display = 'block';
      } else {
        menu.style.display = 'none';
      }
    });

    updateButton.addEventListener('click', () => {
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
          saveTasksToLocalStorage();
        }
      };

      taskDescriptionInput.addEventListener('keypress', onEnterKeyPress);

      taskDescriptionInput.addEventListener('blur', () => {
        taskDescriptionInput.removeEventListener('keypress', onEnterKeyPress);
        taskDescriptionInput.parentNode.replaceChild(taskDescription, taskDescriptionInput);
      });

      menu.style.display = 'none';
    });

    deleteButton.addEventListener('click', () => {
      const index = sortedTasks.findIndex((t) => t.description === task.description);
      tasks = deleteTask(index);
      populateTaskList();
      saveTasksToLocalStorage();
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
taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask(tasks);
    populateTaskList();
    saveTasksToLocalStorage();
  }
});

function saveTasksToLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deleteTask(index) {
  tasks.splice(index, 1);
  return tasks;
}