document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form')
  form.addEventListener('submit',(e) => {
    e.preventDefault()
    createToDo(form.new_task.value)
    form.reset()
  })
});
//creates list item, calls prioritization function, and adds list item to
//the todo list
function createToDo(toDo){
  //get list html objects
  const toDoBlock = document.getElementById('tasks')
  const list = toDoBlock.getElementsByTagName('li')
  //create new list item
  let li = document.createElement('li')
  li.textContent = toDo + " "
  //create delete button
  let btn = document.createElement('button')
  btn.textContent = "X"
  btn.addEventListener("click",handleDelete)
  li.appendChild(btn)
  //check priority level of other items in the list to place new item
  prioritize(li)
  for(el of list){
    if(el.priority >= li.priority){
      toDoBlock.insertBefore(li,el)
      return
    }
  }
  //append new item to the end if it isn't higher priority than any existing item
  toDoBlock.append(li)
}
//delete function for list items
function handleDelete(e){
  e.target.parentNode.remove()
}
//add styling to list item based on chosen priority
function prioritize(li){
  li.priority = parseInt(document.getElementById('priority').value)
  switch(li.priority){
    case 1:
      li.classList.add('urgent')
      break
    case 2:
      li.classList.add('normal')
      break
    case 3:
      li.classList.add('whenever')
      break
  }
}