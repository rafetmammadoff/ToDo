var myinput=document.querySelector('.my-input')
var mybutton=document.querySelector('.my-button')
const todolist=document.querySelector('.todo-list')
document.addEventListener("DOMContentLoaded",getTodos)
todolist.addEventListener("click",delet)

mybutton.addEventListener('click',addTodo);
function addTodo(){
    var div=document.createElement('div')
    var list=document.createElement('li')
    list.innerText=myinput.value
    div.appendChild(list)
    

    let crbtn=document.createElement('button')
    crbtn.innerHTML='del'
    crbtn.classList.add('trash')
    div.appendChild(crbtn)
    savelocalestorage(list.innerText)

    myinput.value=""
    todolist.appendChild(div)
}



function delet(e){
    const item=e.target
    if(item.classList.contains('trash')){
        const todo= item.parentElement;
        
        removelocal(todo)
        todo.remove()
    }
}

function savelocalestorage(todo){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos =[]
    }else{
        todos=JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo)
    localStorage.setItem('todos',JSON.stringify(todos))
}

function getTodos(){
    let todos
    if(localStorage.getItem('todos') === null){
        todos=[]

    }else{
        todos=JSON.parse(localStorage.getItem('todos'))

    }

    

    todos.forEach(function(todo){
        let div=document.createElement('div')
        let list=document.createElement('li')
        list.innerText=todo
        div.appendChild(list)
        

        let crbtn=document.createElement('button')
        crbtn.innerHTML='del'
        crbtn.classList.add('trash')
        div.appendChild(crbtn)
        
        todolist.appendChild(div)

    })
}

function removelocal(todo){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos=[]
    }else{
        todos=JSON.parse(localStorage.getItem('todos'))
    }
    const text=todo.children[0].innerHTML
    todos = todos.filter(item => item !== text)
    // ['aa', 'bb', 'cc']
    localStorage.setItem('todos',JSON.stringify(todos))
}
