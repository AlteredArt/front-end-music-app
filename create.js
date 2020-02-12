const ul = document.querySelector('ul')

fetch("http://localhost:3000/users")
.then(response => response.json())
.then(user => 
    user
    .map(userToElement)
    .map(userCreate)
)
function userToElement(user) {
    const li = document.createElement('li')
    li.textContent = user.name
    li.dataset.id = user.id
    li.dataset.name = user.name
    return li
}

function userCreate(li) {
    const form = document.createElement("form")
    form.action = `http://localhost:3000/users/${li.dataset.id}`
    form.method = "POST"
    form.innerHTML = `
            <input type="text" name="username" placeholder="Insert Username" value=${li.dataset.username}/>
            <input type="text" name="name" placeholder="Insert Username" value=${li.dataset.name}/>
            <input type="submit" value="Create this user"/>
            <input type="hidden" name="_method" value="put"/>
        `
    li.append(form)
    return li
}