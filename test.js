var myinput=document.querySelector('.my-input')
var mybutton=document.querySelector('.my-button')
var todolist=document.querySelector('.todo-list')
document.addEventListener('DOMContentLoaded',getTodos)
todolist.addEventListener('click',deletes)

mybutton.addEventListener("click",addTodo);
function addTodo(){
    if(myinput.value != ""){
        let div=document.createElement('div')

        div.classList.add('my-div')

        let list=document.createElement('li')

        list.classList.add('my-list')

        list.innerText=myinput.value

        div.appendChild(list)

        let delbutton=document.createElement('button')

        delbutton.classList.add('trash')

        delbutton.innerHTML='DEL'

        div.appendChild(delbutton)

        savelocalestorage(list.innerText)

        todolist.appendChild(div)

        myinput.value=''

        list.addEventListener('dblclick',function(){
            list.classList.toggle("filter")

        })
    }
}
function deletes(e){
    const item=e.target
    console.log(item);

    if(item.classList.contains('trash')){
        const todo=item.parentElement
        
        removelocal(todo)
        todo.remove()
    }

}
function savelocalestorage(todo){
    let todos
    if (localStorage.getItem('todos')===null) {
        todos=[]
        
    }else{9
        todos=JSON.parse(localStorage.getItem('todos'))
        
    }
    todos.push(todo)
    
    localStorage.setItem('todos',JSON.stringify(todos))

}
function getTodos(){
    let todos
    if(localStorage.getItem('todos')===null){
        todos=[]
    }else{
        todos=JSON.parse(localStorage.getItem('todos'))
    }
    

    todos.forEach(function(todo){
        let div=document.createElement('div')
        div.classList.add('my-div')
        let list=document.createElement('li')
        list.classList.add('my-list')
        list.innerText=todo
        div.appendChild(list)
        
    

        let delbutton=document.createElement('button')
        delbutton.classList.add('trash')
        delbutton.innerHTML='DEL'
        div.appendChild(delbutton)
        
        todolist.appendChild(div)
        list.addEventListener('dblclick',function(){
            
            list.classList.toggle("filter")


        })

    })


}
function removelocal(todo){
    let todos
    if(localStorage.getItem('todos')===null){
        todos=[]
    }else{
        todos=JSON.parse(localStorage.getItem('todos'))
    }
    const text=todo.children[0].innerHTML
    todos=todos.filter(item =>item !== text)
    localStorage.setItem('todos',JSON.stringify(todos))
}
