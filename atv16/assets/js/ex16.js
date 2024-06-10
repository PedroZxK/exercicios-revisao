/* Pedro Gabriel Moreira dos Santos nº26 */

function toggleMenu() {
    const menuContent = document.getElementById('menuContent');
    if (menuContent.classList.contains('show')) {
        menuContent.classList.remove('show');
        setTimeout(() => {
            menuContent.style.display = 'none';
        }, 300);
    } else {
        menuContent.style.display = 'block';
        setTimeout(() => {
            menuContent.classList.add('show');
        }, 10);
    }
}

document.addEventListener('click', function (event) {
    var menuContent = document.getElementById('menuContent');
    var menuIcon = document.querySelector('.menu-icon');

    var isClickInsideMenu = menuContent.contains(event.target) || menuIcon.contains(event.target);

    if (!isClickInsideMenu) {
        menuContent.classList.remove('show');
    }
});

/* ---------------------------------------PADRAO---------------------------------------------------- */

document.addEventListener('DOMContentLoaded', loadTasks);

const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', addTask);
taskList.addEventListener('click', manageTasks);

function addTask(e) {
    e.preventDefault();

    const taskText = taskInput.value;
    const li = document.createElement('li');
    li.textContent = taskText;

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Concluído';
    completeBtn.classList.add('complete-btn');
    li.appendChild(completeBtn);

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remover';
    removeBtn.classList.add('remove-btn');
    li.appendChild(removeBtn);

    taskList.appendChild(li);
    saveTask(taskText);
    taskInput.value = '';
}

function manageTasks(e) {
    if (e.target.classList.contains('remove-btn')) {
        const taskItem = e.target.parentElement;
        const taskText = taskItem.textContent.replace('ConcluídoRemover', '').trim();
        if (confirm(`Tem certeza de que deseja deletar a tarefa "${taskText}"?`)) {
            removeTask(taskText);
            taskItem.remove();
        }
    } else if (e.target.classList.contains('complete-btn')) {
        const taskItem = e.target.parentElement;
        const taskText = taskItem.textContent.replace('ConcluídoRemover', '').trim();
        taskItem.classList.toggle('completed');
        toggleCompleteTask(taskText);
    }
}

function saveTask(task) {
    let tasks = getTasksFromStorage();
    tasks.push({ text: task, completed: false });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(task) {
    let tasks = getTasksFromStorage();
    tasks = tasks.filter(t => t.text !== task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function toggleCompleteTask(task) {
    let tasks = getTasksFromStorage();
    tasks = tasks.map(t => {
        if (t.text === task) {
            t.completed = !t.completed;
        }
        return t;
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = getTasksFromStorage();
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.text;
        if (task.completed) {
            li.classList.add('completed');
        }

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Concluído';
        completeBtn.classList.add('complete-btn');
        li.appendChild(completeBtn);

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remover';
        removeBtn.classList.add('remove-btn');
        li.appendChild(removeBtn);

        taskList.appendChild(li);
    });
}

function getTasksFromStorage() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return tasks;
}