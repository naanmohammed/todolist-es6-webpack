import './styles.css';
import { addTask } from './modules/addTasks.js';
import { deleteTask } from './modules/deleteTasks.js';
import { getTasksFromLocalStorage } from './modules/getTasksFromLocalStorage.js';
import { checkCompleted } from './modules/checkCompleted';
import { clearCompletedTasks } from './modules/clearCompletedTasks';

let tasks = [];

function populateTaskList() {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';

  const sortedTasks = tasks.sort((a, b) => (a.index - b.index));
  sortedTasks.forEach(((task) => {
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

    checkbox.addEventListener('click', () => {
      checkCompleted(task, checkbox, listItem, tasks);
    });

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

    icon.addEventListener('click', (event) => {
      event.stopPropagation();
      if (menu.style.display === 'none') {
        menu.style.display = 'block';
      } else {
        menu.style.display = 'none';
      }
    });

    updateButton.addEventListener('click', (event) => {
      event.stopPropagation();
      menu.style.display = 'none';
      const input = document.createElement('input');
      input.type = 'text';
      input.value = task.description;
      taskDescription.parentNode.replaceChild(input, taskDescription);
      input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          const newDescription = input.value.trim();
          if (newDescription !== '') {
            task.description = newDescription;
            populateTaskList();
            localStorage.setItem('tasks', JSON.stringify(tasks));
          } else {
            input.parentNode.replaceChild(taskDescription, input);
          }
        } else if (event.key === 'Escape') {
          input.parentNode.replaceChild(taskDescription, input);
        }
      });
      input.focus();
    });

    deleteButton.addEventListener('click', () => {
      const index = sortedTasks.findIndex((t) => t.description === task.description);
      tasks = deleteTask(tasks, index);
      for (let j = 1; j < tasks.length; j += 1) {
        tasks[j].index = j;
      }
      populateTaskList();
      localStorage.setItem('tasks', JSON.stringify(tasks));
    });

    listItem.setAttribute('data-id', task.id);
    taskList.appendChild(listItem);
  }));
}

window.onload = function () {
  tasks = getTasksFromLocalStorage();
  populateTaskList(tasks);
};

const taskInput = document.getElementById('task-input');
taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask(tasks);
    populateTaskList(tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
});

const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', () => {
  tasks = clearCompletedTasks(tasks);
  for (let j = 1; j < tasks.length; j += 1) {
    tasks[j].index = j;
  }
  populateTaskList(tasks);
});