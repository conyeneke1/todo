// Selectors
const addTask = document.querySelector('.add-task');
const modalWrapper = document.querySelector('.new-task-wrapper');
const newTask = document.querySelector('.new-task');
const modalX = document.querySelector('.new-task-header i');
const checkBox = document.querySelector('#check');
const text = document.querySelector('.p1');


// modal box
addTask.addEventListener('click', () => {
    newTask.style.display = 'block';
    modalWrapper.classList.add('new-task-display');
})

modalX.addEventListener('click', () => {
    newTask.style.display = 'none';
    modalWrapper.classList.remove('new-task-display');
})

checkBox.addEventListener('change', () => {
    if (checkBox.checked) {
        console.log("Checkbox is checked..");
    }
})