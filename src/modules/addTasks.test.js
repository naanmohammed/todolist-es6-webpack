// Import the addTask function
import { addTask } from './addTasks.js'
import { deleteTask } from './deleteTasks.js';

describe('addTask function', () => {
  // Declare variables to use in tests
  let mockTaskInput;
  let mockTasks;

  // Set up the mock HTML and variables before each test
  beforeEach(() => {
    // Set up the mock HTML
    document.body.innerHTML = `
      <ul class="todo-list">
        <li>Task 1</li>
        <li>Task 2</li>
        <li>Task 3</li>
      </ul>
    `;
    // Create a mock task input element
    mockTaskInput = document.createElement('input');
    mockTaskInput.id = 'task-input';

    // Add the mock input element to the document body
    document.body.appendChild(mockTaskInput);
    // Initialize the mock tasks array
    mockTasks = [
      { description: 'Task 1', completed: false, index: 1 },
      { description: 'Task 2', completed: false, index: 2 },
    ];
  });

  // Clean up the mock HTML after each test
  afterEach(() => {
    // Remove the mock input element from the document body
    document.body.removeChild(mockTaskInput);
  });

  test('adds exactly one task with a valid task description', () => {
    // Set the value of the mock input element
    mockTaskInput.value = 'New Task';

    // Call the addTask function with the mock tasks array
    addTask(mockTasks);

    // Verify that a new task was added with the correct properties
    expect(mockTasks.length).toBe(3);
    expect(mockTasks[2]).toEqual({
      description: 'New Task',
      completed: false,
      index: 3,
    });
    expect(mockTaskInput.value).toBe('');
  });

  test('does not add a new task with an empty task description', () => {
    // Set the value of the mock input element to an empty string
    mockTaskInput.value = '';

    // Call the addTask function with the mock tasks array
    addTask(mockTasks);

    // Verify that no new task was added
    expect(mockTasks.length).toBe(2);
  });
});

// Import the deleteTask function


describe('deleteTask function', () => {
  // Declare variables to use in tests
  let mockTasks;

  // Set up the mock HTML and variables before each test
  beforeEach(() => {
    // Initialize the mock tasks array
    mockTasks = [
      { description: 'Task 1', completed: false, index: 1 },
      { description: 'Task 2', completed: false, index: 2 },
      { description: 'Task 3', completed: true, index: 3 },
    ];
  });

  test('removes a task at the specified index', () => {
    // Call the deleteTask function with the mock tasks array and index of 1
    const result = deleteTask(mockTasks, 1);

    // Verify that the task at index 1 was removed from the tasks array
    expect(result.length).toBe(2);
    expect(result).toEqual([
      { description: 'Task 1', completed: false, index: 1 },
      { description: 'Task 3', completed: true, index: 3 },
    ]);
  });
});
