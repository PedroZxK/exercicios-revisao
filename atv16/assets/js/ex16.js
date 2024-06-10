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
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remover';
    li.appendChild(removeBtn);

    taskList.appendChild(li);
    saveTask(taskText);
    taskInput.value = '';
}

function manageTasks(e) {
    if (e.target.tagName === 'BUTTON') {
        const taskItem = e.target.parentElement;
        const taskText = taskItem.textContent.replace('Remover', '').trim();
        if (confirm(`Tem certeza de que deseja deletar a tarefa "${taskText}"?`)) {
            removeTask(taskText);
            taskItem.remove();
        }
    } else {
        e.target.classList.toggle('completed');
        toggleCompleteTask(e.target.textContent.replace('Remover', '').trim());
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
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remover';
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

// Menu toggle function
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