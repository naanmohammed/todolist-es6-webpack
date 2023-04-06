import './styles.css';

const tasks = [
  {
    description: 'Buy groceries',
    completed: false,
    index: 0,
  },
  {
    description: 'Do laundry',
    completed: true,
    index: 1,
  },
  {
    description: 'Clean the bathroom',
    completed: false,
    index: 2,
  },
  {
    description: 'Pay bills',
    completed: false,
    index: 3,
  }
];

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
    taskList.appendChild(listItem);
  }
}

window.onload = function () {
  populateTaskList();
};