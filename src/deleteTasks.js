import { tasks } from './index.js'
export function deleteTask(index) {
  tasks.splice(index, 1);
  return tasks;
}

export default deleteTask;