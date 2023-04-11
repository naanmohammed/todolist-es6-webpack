const addTask = require('./addTasks')
 describe('addTask', () => {
    let tasks;
  
    beforeEach(() => {
      tasks = [];
      const taskInput = document.createElement('input');
      taskInput.setAttribute('id', 'task-input');
      document.body.appendChild(taskInput);
    });
  
    afterEach(() => {
      document.body.innerHTML = '';
    });
  
    it('should add a task to the list of tasks', () => {
      // Arrange
      const expectedTask = {
        description: 'Buy groceries',
        completed: false,
        index: 1,
      };
  
      // Act
      const taskInput = document.getElementById('task-input');
      taskInput.value = 'Buy groceries';
      addTask(tasks);
  
      // Assert
      expect(tasks).toHaveLength(1);
      expect(tasks[0]).toMatchObject(expectedTask);
      expect(taskInput.value).toBe('');
    });
  
    it('should not add a task if the description is empty', () => {
      // Arrange
      const expectedTaskCount = 0;
  
      // Act
      const taskInput = document.getElementById('task-input');
      taskInput.value = '';
      addTask(tasks);
  
      // Assert
      expect(tasks).toHaveLength(expectedTaskCount);
      expect(taskInput.value).toBe('');
    });
  });
  