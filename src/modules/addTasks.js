export function addTask(tasks) {
  const taskInput = document.getElementById('task-input');
  const taskDescription = taskInput.value.trim();

  if (taskDescription.length > 0) {
    const newTask = {
      description: taskDescription,
      completed: false,
      index: tasks.length + 1,
    };
    tasks.push(newTask);
    taskInput.value = '';
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  return tasks;
}

export default addTask;