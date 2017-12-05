//Seleccionando elementos de html para manipularlos con js
var taskBox = document.getElementById('task-box');
var nameListInput = document.getElementById('add-name-list');
var saveButton = document.getElementById('save-button');
var xButton = document.getElementById('x-button');
var taskInput = document.createElement('input');
var taskInputId = document.getElementById('task-input')

//Enfocando placeholder y dandole nombre a la funcion afterFocus
nameListInput.addEventListener('focus', afterFocus);
//agregando evento click al boton de Añadir a la funcion saveNameList
saveButton.addEventListener('mousedown', saveNameList);
//Evento al boton X que hara la funcion prevention
xButton.addEventListener('click', prevention)
nameListInput.addEventListener('blur', noFocus)



//funcion para convertir los ID taskBox en clase y remplazando saveButton - xButton por otro nombre de clases
function afterFocus(e) {
    e.preventDefault();
    taskBox.classList.add('box-list-focus')
    saveButton.classList.replace('none', 'inline-block');
    xButton.classList.replace('nonex', 'close'); //cambie la clase inline-block a close
    xButton.classList.remove('none')
}

xButton.addEventListener('click', function(e) {
    e.preventDefault();
    this.classList.add('none');
    saveButton.classList.add('none');
})

//
function saveNameList(e) {
    e.preventDefault();
    //creando elemento de p y al nodo de texto agregarle un valor
    var listContainer = document.createElement('div');
    var listTitle = document.createElement('p');
    var listTitleText = document.createTextNode(nameListInput.value)
    listContainer.appendChild(listTitle);
    //añadiendo p a listTitleText (nodo de texto)
    listTitle.appendChild(listTitleText);
    listContainer.classList.add('title-card-size');
    //crear clase a p dentro de Container
    listTitle.classList.add('title-text-size');
    //en el div agredando el elemento p
    taskBox.appendChild(listContainer);
    //elimina add-name-list que se encuentra en la variable nameListInput
    taskBox.removeChild(nameListInput);
    //se remplaza el ID saveButton a la clase inline-block, none
    saveButton.classList.replace('inline-block', 'none');
    //se remplaza el ID por las clases close y nonex
    xButton.classList.replace('close', 'nonex') //cambie la clase inline-block a close
        //Agregando al elemento taskInput Input los atributos ID de nombre task-input
    taskInput.setAttribute('id', 'task-input');
    //Agregando al elemento taskInput Input los atributos type=text
    taskInput.setAttribute('type', 'text');
    //Agregando al elemento taskInput Input los atributos placeholder=Añadir una tarjeta
    taskInput.setAttribute('placeholder', 'Añadir una tarjeta');
    //Agregando al elemento taskInput la clase block
    taskInput.classList.add('block')
        //Agregar al div task-box taskInput
    taskBox.appendChild(taskInput);
    //nombrando variable que crea un elemento boton
    var addButton = document.createElement('button');
    //creando variable que añada un nodo de texto
    var addButtonText = document.createTextNode('Añadir');
    //añadiendo el nodo de texto al elemento button
    addButton.appendChild(addButtonText);
    //añadiendo al DIV el elemento button con el nodo de texto añadir
    taskBox.appendChild(addButton);
    //creando variable para crear un button
    var xxButton = document.createElement('button');
    //creando un nodo de texto X
    var xxButtonText = document.createTextNode('X');
    //añadiendo al elemento button el nodo de texto x
    xxButton.appendChild(xxButtonText);
    //añadiendo al div task-box el boton
    taskBox.appendChild(xxButton);
    //agregando el button la clase none
    addButton.classList.add('none');
    //agregando el button la clase close
    xxButton.classList.add('close'); //cambie la clase none a close
    xxButton.classList.add('none')
    taskInput.addEventListener('blur', noFocusTask)

    function noFocusTask(e) {
        e.preventDefault()
        addButton.classList.add('none')
        xxButton.classList.add('none')
    }
    xxButton.addEventListener('click', function(e) {
        e.preventDefault()
        this.classList.add('none')
        addButton.classList.add('none')
    })
    addButton.addEventListener('mousedown', function(e) {
        e.preventDefault()
        var nameContainer = document.createElement('div');
        var nameTask = document.createElement('p')
        var nameTaskText = document.createTextNode(taskInput.value);
        var xxxButton = document.createElement('button')
        var xxxButtonText = document.createTextNode('x')
        xxxButton.appendChild(xxxButtonText)
        nameContainer.appendChild(xxxButton)
        xxxButton.addEventListener('click', function(e) {
                this.parentNode.remove();
            })
            //añade de aqui hasta nameTask.classList.add('text-size');.se unen elementos
        nameContainer.appendChild(nameTask);
        nameTask.appendChild(nameTaskText);
        //taskBox.prepend(nameTask);
        taskBox.insertBefore(nameContainer, taskInput) //si se rompe es por esto
        nameContainer.classList.add('card-size');
        nameTask.classList.add('text-size');
        addButton.classList.add('none');
        xxButton.classList.add('none');
        taskInput.value = ''
        taskInput.setAttribute('placeholder', 'Añadir tarea');
    });
    taskInput.addEventListener('focus', function(e) {
        e.preventDefault();
        addButton.classList.replace('none', 'inline-block');
        xxButton.classList.replace('none', 'close') //cambie la clase inline-block a close
    })

}


function noFocus(e) {
    e.preventDefault();
    saveButton.classList.add('none')
    xButton.classList.add('none')
}


function prevention(e) {
    e.preventDefault();
}