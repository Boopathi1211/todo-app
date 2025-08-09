const form = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');
const dateTimeInput = document.getElementById('dateTimeInput');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskText = taskInput.value;
  const dateTime = dateTimeInput.value;
  if (!taskText || !dateTime) return;

  const li = document.createElement('li');

  const taskSpan = document.createElement('span');
  taskSpan.textContent = `${taskText} (Due: ${new Date(dateTime).toLocaleString()})`;

  const actions = document.createElement('div');
  actions.className = 'actions';

  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✔️';
  completeBtn.onclick = () => li.classList.toggle('completed');

  const editBtn = document.createElement('button');
  editBtn.textContent = '✏️';
  editBtn.onclick = () => {
    const newText = prompt("Edit your task:", taskText);
    if (newText) {
      taskSpan.textContent = `${newText} (Due: ${new Date(dateTime).toLocaleString()})`;
    }
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑️';
  deleteBtn.onclick = () => taskList.removeChild(li);

  actions.append(completeBtn, editBtn, deleteBtn);
  li.append(taskSpan, actions);
  taskList.appendChild(li);

  taskInput.value = '';
  dateTimeInput.value = '';
});
