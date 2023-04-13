import checkCompleted from './checkCompleted';
import { saveTasksToLocalStorage } from './saveToLocalStorage';
import clearCompletedTasks from './clearCompletedTasks';
import { getTasksFromLocalStorage } from './getTasksFromLocalStorage';

// Mock saveTasksToLocalStorage function
jest.mock('./saveToLocalStorage', () => ({
  saveTasksToLocalStorage: jest.fn(),
}));

describe('checkCompleted', () => {
  let task;
  let checkbox;
  let listItem;
  let tasks;

  beforeEach(() => {
    // Create HTML elements for testing
    task = { id: 1, name: 'Task 1', completed: false };
    checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = false;
    listItem = document.createElement('li');
    tasks = [task];
  });

  afterEach(() => {
    // Clear the HTML elements after each test
    task = null;
    checkbox = null;
    listItem = null;
    tasks = null;
  });

  it('should mark the task as completed and add completed class to listItem if checkbox is checked', () => {
    checkbox.checked = true;
    checkCompleted(task, checkbox, listItem, tasks);
    expect(task.completed).toBe(true);
    expect(listItem.classList.contains('completed')).toBe(true);
    expect(saveTasksToLocalStorage).toHaveBeenCalledWith(tasks);
  });

  it('should mark the task as not completed and remove completed class from listItem if checkbox is unchecked', () => {
    checkbox.checked = false;
    listItem.classList.add('completed');
    checkCompleted(task, checkbox, listItem, tasks);
    expect(task.completed).toBe(false);
    expect(listItem.classList.contains('completed')).toBe(false);
    expect(saveTasksToLocalStorage).toHaveBeenCalledWith(tasks);
  });
});


jest.mock('./saveToLocalStorage', () => ({
  saveTasksToLocalStorage: jest.fn(),
}));
jest.mock('./getTasksFromLocalStorage', () => ({
  getTasksFromLocalStorage: jest.fn(),
}));

describe('clearCompletedTasks', () => {
  let tasks;
  let listItem1;
  let listItem2;
  let listItem3;
  let list;

  beforeEach(() => {
    // Create HTML elements for testing
    tasks = [      { id: 1, name: 'Task 1', completed: true },      { id: 2, name: 'Task 2', completed: false },      { id: 3, name: 'Task 3', completed: true },    ];
    listItem1 = document.createElement('li');
    listItem1.id = 'task-1';
    listItem2 = document.createElement('li');
    listItem2.id = 'task-2';
    listItem3 = document.createElement('li');
    listItem3.id = 'task-3';
    list = document.createElement('ul');
    list.appendChild(listItem1);
    list.appendChild(listItem2);
    list.appendChild(listItem3);
    document.body.appendChild(list);
  });

  afterEach(() => {
    tasks = null;
    listItem1 = null;
    listItem2 = null;
    listItem3 = null;
    list.remove();
  });

  it('should remove completed tasks and update the tasks list in local storage', () => {
    clearCompletedTasks(tasks);
    expect(listItem1.parentElement).toBeNull();
    expect(listItem2.parentElement).not.toBeNull();
    expect(listItem3.parentElement).toBeNull();
    expect(saveTasksToLocalStorage).toHaveBeenCalled();
    expect(getTasksFromLocalStorage).toHaveBeenCalledWith(tasks);
  });

  it('should return a new tasks array without completed tasks', () => {
    const newTasks = clearCompletedTasks(tasks);
    expect(newTasks).toHaveLength(1);
    expect(newTasks[0]).toEqual({ id: 2, name: 'Task 2', completed: false });
  });
});

