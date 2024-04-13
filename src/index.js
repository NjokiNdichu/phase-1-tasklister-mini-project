document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const inputForm= document.querySelector("form")
  inputForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const input= document.querySelector("#new-task-description")
    const taskDescription = input.value
    console.log(taskDescription)
    const taskList = document.querySelector("#tasks")
    const newItem = document.createElement("li");
    newItem.textContent = taskDescription;      
    taskList.appendChild(newItem);
    input.value = ''
  })

});

