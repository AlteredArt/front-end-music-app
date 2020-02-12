console.log("sign in page")
const textField = document.querySelector('#username')
const textname = document.querySelector('#name')
const form = document.querySelector('.sign-in')

fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(users => {
        const submitButton = document.querySelector('#submit-button')
        submitButton.addEventListener("click", () => testtrial(users))
    })

function testtrial(users) {
    const existingUser = users.find(user => {
        return user.username == textField.value
    })
    console.log(existingUser)
    if (existingUser) {
        window.location = `showuser.html?id=${existingUser.id}`
    } else {
        alert("Oh no! It looks like that input was incorrect!");
    }
}