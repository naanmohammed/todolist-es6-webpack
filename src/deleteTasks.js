export function deleteTask(tasks, index) {
  tasks.splice(index, 1);
  return tasks;
}

export default deleteTask;  