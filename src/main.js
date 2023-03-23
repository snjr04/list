let task = [
    {
        id:1,
        text:'Купить книгу',
        isImportant:false,
        isDane:false,
    } ,
    {
        id:2,
        text:'Купить хлеб',
        isImportant:false,
        isDane:false,
    },
]

let todoList = document.querySelector('.todo__list')
let todoForm = document.querySelector('.todo__form')
let todoField = document.querySelector('.todo__field')
let todoError = document.querySelector('.todo__error')


const addItemInTodoList = () => {
    todoList.innerHTML = ''

    task.forEach((item) =>{
        todoList.innerHTML += `<li class="todo__item">
                <p class="todo__item-text">${item.text}</p>
                <span data-id="${item.id}" class="todo__item-del">X</span>
            </li>`
        })

    let todoItemDelItems = document.querySelectorAll('.todo__item-del')

    Array.from(todoItemDelItems).forEach((item)=>{
        item.addEventListener('click',() =>{
            task = task.filter((el)=>{
                return el.id != item.dataset.id

            })
            addItemInTodoList()
        })
    })

}

addItemInTodoList()

todoForm.addEventListener('submit',(event)=>{
    event.preventDefault()
    if (task.some(item =>item.text.toUpperCase() === event.target[0].value.toUpperCase())){
        alert ('нельзя добавить!')
    }else {
        task = [...task,{
            id: task.length ? task.at(-1).id + 1 : 1,
            text: event.target[0].value,
            isImportant:false,
            isDane:false,
        }]

        addItemInTodoList()

        event.target[0].value = ''
    }
})

todoField.addEventListener('input',(event) =>{
    if (task.some(item => item.text.toUpperCase() === event.target.value.toUpperCase())) {
        todoError.style.display = 'block'
    }else {
        todoError.style.display = 'none'
    }
})