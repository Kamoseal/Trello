//Seleccionando elementos de html para manipularlos con js
var taskBox = document.getElementById('task-box');
var nameListInput = document.getElementById('add-name-list');
var saveButton = document.getElementById('save-button');
var xButton = document.getElementById('x-button');
var taskInput = document.createElement('input');
var taskInputId = document.getElementById('task-input')

//Enfocando "añadir lista"
nameListInput.addEventListener('focus', afterFocus);
saveButton.addEventListener('click', saveNameList);
xButton.addEventListener('click', prevention)
    //nameListInput.addEventListener('blur', noFocus)


function afterFocus(e) {
    e.preventDefault();
    taskBox.classList.add('box-list-focus')
    saveButton.classList.replace('none', 'inline-block');
    xButton.classList.replace('none', 'inline-block');
}

function saveNameList(e) {
    e.preventDefault();
    var listTitle = document.createElement('p');
    var listTitleText = document.createTextNode(nameListInput.value)
    listTitle.appendChild(listTitleText);
    taskBox.appendChild(listTitle);
    taskBox.removeChild(nameListInput);
    this.classList.replace('inline-block', 'none');
    xButton.classList.replace('inline-block', 'none')
    taskInput.setAttribute('id', 'task-input');
    taskInput.setAttribute('type', 'text');
    taskInput.setAttribute('placeholder', 'Añadir una tarjeta');
    taskInput.classList.add('block')
    taskBox.appendChild(taskInput);
    var addButton = document.createElement('button');
    var addButtonText = document.createTextNode('Añadir');
    addButton.appendChild(addButtonText);
    taskBox.appendChild(addButton);
    var xxButton = document.createElement('button');
    var xxButtonText = document.createTextNode('X');
    xxButton.appendChild(xxButtonText);
    taskBox.appendChild(xxButton);
    addButton.classList.add('none');
    xxButton.classList.add('none');

    addButton.addEventListener('click', function(e) {
        e.preventDefault()
        var nameTask = document.createElement('p')
        var nameTaskText = document.createTextNode(taskInput.value);
        nameTask.appendChild(nameTaskText);
        //taskBox.prepend(nameTask);
        taskBox.insertBefore(nameTask, taskInput) //si se rompe es por esto
        addButton.classList.add('none');
        xxButton.classList.add('none');
        taskInput.value = ''
        taskInput.setAttribute('placeholder', 'Añadir tarea');
    });
    taskInput.addEventListener('focus', function(e) {
        e.preventDefault();
        addButton.classList.replace('none', 'inline-block');
        xxButton.classList.replace('none', 'inline-block')
    })

}


/*function noFocus(e) {
    e.preventDefault();
    taskBox.classList.remove('box-list-focus');
    saveButton.classList.replace('block', 'none');
    xButton.classList.replace('inline-block', 'none');
}*/

function prevention(e) {
    e.preventDefault();
}
