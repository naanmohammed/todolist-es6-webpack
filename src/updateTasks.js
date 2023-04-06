export function updateTask(tasks, id, description) {
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].id === id) {
      tasks[i].description = description;
      break;
    }
  }
}
export default updateTask;