
//show todo
const todoBtn = document.querySelector('.todoBtn');
const todoMenu = document.querySelector('.todoMenu');

//search
const formSearch = document.querySelector('.formSearch');
const iconSearch = document.querySelector('.iconSearch');
const inputSearch = document.querySelector('.inputSearch');

//make todo
const newTodo = document.querySelector('.newTodo');
const todoForm = document.querySelector('.todoForm');
const todoInput = document.querySelector('.todoInput');
const ulTodo = document.querySelector('.ulTodo');
const todoList = document.querySelector('.todoList');
const todoInstruction = document.querySelector(".todoInstruction");
let toDos = [];



//main gretting name

//load from localstorage
function loadName() {
    const currentName = localStorage.getItem('currentuser');
    if (currentName === null) {
        askName();
    } else {
        showName(currentName);
    }
}





//search menu

formSearch.addEventListener('submit', engine)

function engine(event) {
    event.preventDefault();
    const word = inputSearch.value;
    window.location.href = `https://www.google.com/search?q=${word}`;
}

//todo

//show todo-menu
todoBtn.addEventListener('click', () => {
    todoMenu.classList.toggle('showtodoMenu');

});
//new todo 버튼 사라지게 하기
newTodo.addEventListener('click', () => {
    todoInput.style.display = 'block';
    newTodo.style.display = 'none';
});


todoForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const currentTodo = todoInput.value;
    showTodos(currentTodo);
    todoInput.value = '';
}

function showTodos(element) {
    todoInstruction.classList.remove('showInstruction');
    const ul = document.createElement("ul");
    const li = document.createElement("li");

    ul.appendChild(li);
    li.innerHTML = `<input type="checkbox">${element}<button>del</button>`;
    todoList.appendChild(ul);


    const newId = toDos.length + 1;
    li.id = newId;
    const todoObj = {
        Do: element,
        id: newId
    }
    toDos.push(todoObj);
    console.log(toDos);
}



function init() {

    loadName();


}

init();







