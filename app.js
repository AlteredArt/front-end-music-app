console.log("sign in page")

fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(users => console.log(users))
function Redirect() {
    window.location = `http://localhost:3001/showuser.html$`;
 }