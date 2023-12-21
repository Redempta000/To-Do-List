const todoList = document.getElementById('todo-list');
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-button');

let tasks = [];

// Add new task
addTaskButton.addEventListener('click', () => {
  const task = taskInput.value.trim();
  if (task) {
    tasks.push({
      text: task,
      completed: false,
    });
    updateTodoList();
    taskInput.value = '';
  }
});

// Update todo list
function updateTodoList() {
  todoList.innerHTML = '';
  for (let task of tasks) {
    const li = document.createElement('li');
    const taskText = document.createTextNode(task.text);
    const checkbox = document.createElement('input');
    const removeButton = document.createElement('Button');

    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => {
      task.completed = !task.completed;
      updateTodoList();
    });

    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      tasks.splice(tasks.indexOf(task), 1);
      updateTodoList();
    });

    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(removeButton);

    todoList.appendChild(li);
  }
}

// Initialize todo list
updateTodoList();