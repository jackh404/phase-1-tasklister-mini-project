document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form')
  form.addEventListener('submit',(e) => {
    e.preventDefault()
    createToDo(form.new_task.value)
    form.reset()
  })
});

function createToDo(toDo){
  let li = document.createElement('li')
  li.textContent = toDo + " "
  let btn = document.createElement('button')
  btn.textContent = "X"
  btn.addEventListener("click",handleDelete)
  li.appendChild(btn)
  document.getElementById('tasks').append(li)
}
function handleDelete(e){
  e.target.parentNode.remove()
}