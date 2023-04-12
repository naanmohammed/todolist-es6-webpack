import { getTasksFromLocalStorage } from './getTasksFromLocalStorage';

export function clearCompletedTasks(tasks) {
  const completedTasks = tasks.filter(((task) => task.completed));
  completedTasks.forEach((task) => {
    const listItem = document.getElementById(`task-${task.id}`);
    if (listItem) {
      listItem.remove();
    }
  });
  const newTasks = tasks.filter(((task) => !task.completed));
  localStorage.setItem('tasks', JSON.stringify(tasks));
  getTasksFromLocalStorage(tasks);
  return newTasks;
}

export default clearCompletedTasks;