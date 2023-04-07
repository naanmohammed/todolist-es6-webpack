import { saveTasksToLocalStorage } from './saveToLocalStorage.js';

export function checkCompleted(tasks, taskId) {
  if (!tasks || tasks.length === 0) {
    return;
  }
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  if (taskIndex !== -1) {
    const task = tasks[taskIndex];
    if (task.completed) {
      task.completed = false;
    } else {
      task.completed = true;
    }
    saveTasksToLocalStorage(tasks);
    return true;
  }
  return false;
}

export default checkCompleted();