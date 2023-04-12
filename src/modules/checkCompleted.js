import { saveTasksToLocalStorage } from './saveToLocalStorage.js';

export function checkCompleted(task, checkbox, listItem, tasks) {
  task.completed = checkbox.checked;
  saveTasksToLocalStorage(tasks);
  if (task.completed) {
    listItem.classList.add('completed');
  } else {
    listItem.classList.remove('completed');
  }
}

export default checkCompleted;