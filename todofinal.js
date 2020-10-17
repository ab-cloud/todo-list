const todoForm = document.getElementById("formList");
const todoList = document.getElementById("list");
const savedLs = Object.keys(localStorage)

for (i in savedLs) {
    let savedTodo = document.createElement('li');
    savedTodo.innerText = savedLs[i];
    todoList.appendChild(savedTodo);
}

todoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let newLi = document.createElement("li");
    newLi.innerText = document.getElementById('newText').value;
    todoList.appendChild(newLi);
    todoForm.reset();
    savedLs.push({ task: newLi.innerText});
    localStorage.setItem(newLi.innerText, JSON.stringify(savedLs));

})

todoList.addEventListener('click', function(e) {
    const doneItem = e.target.tagName.toLowerCase();
    if (doneItem === 'li') {
        e.target.remove();
        localStorage.removeItem(e.target.innerText)
    }
})

