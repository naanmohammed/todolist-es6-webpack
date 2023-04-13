export function updateTaskDescription(event, menu, taskDescription, task, populateTaskList) {
    event.stopPropagation();
    menu.style.display = 'none';
    const input = document.createElement('input');
    input.type = 'text';
    input.value = task.description;
    taskDescription.parentNode.replaceChild(input, taskDescription);
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        const newDescription = input.value.trim();
        if (newDescription !== '') {
          task.description = newDescription;
          populateTaskList();
        } else {
          input.parentNode.replaceChild(taskDescription, input);
        }
      } else if (event.key === 'Escape') {
        input.parentNode.replaceChild(taskDescription, input);
      }
    });
    input.focus();
  }

  export default updateTaskDescription;