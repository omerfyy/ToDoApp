//variables
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
//functions
addToDo = (event) => {
    event.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    const newToDo = document.createElement('li');
    newToDo.innerText = todoInput.value;
    newToDo.classList.add('todo-item')
    todoDiv.appendChild(newToDo);
    saveLocalTodos(todoInput.value);
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    todoList.appendChild(todoDiv);
    todoInput.value = '';
}

deleteCheck = (e) => {
    const item = e.target;
    if (item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
        todo.remove();    
        })
        
    }
    if (item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}
   
saveLocalTodos = (todo) => {
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}


//event listeners
todoButton.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteCheck);

