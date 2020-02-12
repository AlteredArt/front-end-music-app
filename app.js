console.log("sign in page")
const textField = document.querySelector('#username')
const textname = document.querySelector('#name')
const form = document.querySelector('.sign-in')

fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(users => {
        const submitButton = document.querySelector('#submit-button')
         submitButton.addEventListener("click", testtrial)
            function testtrial (){
                const existingUser = users.find(user => {
                    return user.username == textField.value
                })
                if (existingUser){
                    window.location = `showuser.html?id=${existingUser.id}`
                }
                else if (!existingUser){ 
                    const formdata = new FormData(form)
                    const name = formdata.get('name')
                    const username = formdata.get('username')
                    createUsers = {username: username, name: name}
                    fetch('http://localhost:3000/users', { 
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(createUsers)
                  })
                  window.location = `showuser.html?id=${User.id}`
                }   
         
            }
        })