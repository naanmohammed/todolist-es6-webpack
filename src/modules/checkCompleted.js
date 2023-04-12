export function checkCompleted(task, checkbox, listItem, tasks) {
  task.completed = checkbox.checked;
  localStorage.setItem('tasks', JSON.stringify(tasks));
  if (task.completed) {
    listItem.classList.add('completed');
  } else {
    listItem.classList.remove('completed');
  }
}

export default checkCompleted;