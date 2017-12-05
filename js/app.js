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
saveButton.classList.add('buttonadd');


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

    //Añade clases de estilo a los inputs de tarea
    taskInput.classList.add('task-input-style')
    taskInput.classList.add('task-input-style:hover')

    //Agregar al div task-box taskInput
    taskBox.appendChild(taskInput);
    //nombrando variable que crea un elemento boton
    var addButton = document.createElement('button');
    //creando variable que añada un nodo de texto
    var addButtonText = document.createTextNode('Añadir');
    addButton.classList.add('buttonadd');
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
    //addButton.classList.add('none');
    //agregando el button la clase close
    xxButton.classList.add('close');
    //agregando clase alboton X la clase none
    //xxButton.classList.add('none')
    //al elemento input creado de nombre taskInput agregar el evento blur mediante la funcion noFocusTask
    //taskInput.addEventListener('blur', noFocusTask)
    //se nombra una funcion para el elemento (blur) de nombre noFocusTask
    //function noFocusTask(e) {
    //e.preventDefault()
    //al boton "Añadir" se le agrega una clase none
    //addButton.classList.add('none')
    //al boton "x" se le agrega la clase none
    //xxButton.classList.add('none')
    //}
    //la boton "X" se le aplica una funcion al evento click
    xxButton.addEventListener('click', function(e) {
            e.preventDefault()
                //al xxButton se le agrega la clase none
                //this.classList.add('none')
                //al boton Añadir se le agrega la clase
                // addButton.classList.add('none')
        })
        //al boton añadir se le agrega el evento mousedown con una funcion
    addButton.addEventListener('mousedown', function(e) {
        e.preventDefault()
            //Creando un div con nombre de variable nameContainer
        var nameContainer = document.createElement('div');
        //Creando un p con nombre de variable nameTask
        var nameTask = document.createElement('p')
            //Creando una variable que contiene input.value
        var nameTaskText = document.createTextNode(taskInput.value);
        //Creando un elemento button con nombre de variable xxxButton
        var xxxButton = document.createElement('button')
            //agregandole un nodo de texto a xxxButtonText
        var xxxButtonText = document.createTextNode('x')
            //Agregando nodo de texto a elemento button y colocando el button dentro de un div
        xxxButton.appendChild(xxxButtonText)
        nameContainer.appendChild(xxxButton)
            //Crear clase de estilo de boton, eliminar tarea
        xxxButton.classList.add('delet-task-button-style');
        //Crear clase de estilo de boton hoover, eliminar tarea
        xxxButton.classList.add('delet-task-button-style:hover');

        //Dandole funcionalidad al xxxButton para eliminar
        xxxButton.addEventListener('click', function(e) {
                this.parentNode.remove();
            })
            //añade de aqui hasta nameTask.classList.add('text-size');.se unen elementos
        nameContainer.appendChild(nameTask);
        nameTask.appendChild(nameTaskText);
        //taskBox.prepend(nameTask);
        taskBox.insertBefore(nameContainer, taskInput) //si se rompe es por esto
            //Se les agrega la clases a los siguientes elementos
        nameContainer.classList.add('card-size');

        nameTask.classList.add('text-size');
        //addButton.classList.add('none');
        //xxButton.classList.add('none');
        taskInput.value = ''
        taskInput.setAttribute('placeholder', 'Añadir tarea');
    });
    //Dandole funcionalidad al evento focus
    taskInput.addEventListener('focus', function(e) {
        e.preventDefault();
        addButton.classList.replace('none', 'inline-block');
        xxButton.classList.replace('none', 'close') //cambie la clase inline-block a close
    })

}

// a la funcion no focus se se le da a un evento
function noFocus(e) {
    e.preventDefault();
    saveButton.classList.add('none')
    xButton.classList.add('none')
}


function prevention(e) {
    e.preventDefault();
}
