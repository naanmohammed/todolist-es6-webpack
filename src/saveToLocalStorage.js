import { tasks } from './index.js'
export function saveTasksToLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export default saveTasksToLocalStorage;