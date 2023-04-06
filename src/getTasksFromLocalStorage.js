export function getTasksFromLocalStorage() {
  const tasksString = localStorage.getItem('tasks');
  if (tasksString) {
      return JSON.parse(tasksString);
  }
}

export default getTasksFromLocalStorage;