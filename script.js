let items = [];
const input = document.querySelector('.todo-input');

const Delete = (id) => {
    const filteringTask = items.filter((val,index)=> index !== id)
    items = filteringTask;

    renderItems()

}
const Completed = (id) => {
    const filteringTask = items.filter((val,index)=> index == id)
    for(let i = 0; i<filteringTask.length; i++) {
        filteringTask[i].isCompleted = true
    }
    renderItems()
}
const renderItems = () => {
    const todoList  = document.querySelector('.todo-list')

    todoList.innerHTML = '';

    items.forEach((val,index)=>{
        const list = document.createElement('li')
        
        const task = document.createElement('span')
        const deleteTask = document.createElement('button')
        const checkTask  = document.createElement('button')
        const date = document.createElement('span')
        const taskWrapper = document.createElement('div')
        const actionWrapper = document.createElement('div')


        list.classList.add('list-items')

        if(val.isCompleted){
            list.classList.add('completed');
            task.style.textDecoration = 'line-through';
            task.style.opacity = '0.6';
        }
        actionWrapper.classList.add('action-wrapper')
        taskWrapper.classList.add('task-wrapper')

        task.classList.add('items')
        date.classList.add('task-date')
        deleteTask.classList.add('delete-task')
        checkTask.classList.add('check-task')


        task.textContent = val.todo
        date.textContent = val.dateCreated

        deleteTask.textContent = '✖'
        checkTask.textContent = `✔`

        taskWrapper.appendChild(task)
        taskWrapper.appendChild(date)

        actionWrapper.appendChild(checkTask)
        actionWrapper.appendChild(deleteTask)

        list.appendChild(taskWrapper)
        list.appendChild(actionWrapper)
        
        todoList.appendChild(list)

        deleteTask.addEventListener('click', () => Delete(index))
        checkTask.addEventListener('click', () => Completed(index))
        
    })
}
document.querySelector('.todo-submit').addEventListener('click', (e) => {
    e.preventDefault()
    

    const date = new Date();
    const month  = (date.getMonth() + 1).toString().padStart(2,'0')
    const days = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear()

    const data ={
        todo:input.value,
        isCompleted:false,
        dateCreated: `${month}-${days} -${year}`
    }
    
    if(!input.value){
        input.value= '';
        alert('Input field must not be empty before Submission')
    }else{
    items.push(data)
    input.value= '';
    }
    

    renderItems()
   
})

input.addEventListener('click', (e)=>{

    if(e.key === 'Enter'){
   

    const data ={
        todo:input.value,
        isCompleted:false,
        dateCreated: `${month}-${days} -${year}`
    }
    
        if(!input.value){
            input.value= '';
            alert('Input field must not be empty before Submission')
        }else{
        items.push(data)
        input.value= '';
        }
    

    renderItems()
    }
})
    

