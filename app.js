console.log("music")

fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(users => users.map(showuser)


function showuser(user)
const userPlaylist = user.userPlaylist
let h1 = document.createElement('h1')
h1.innerHTML = `<a href=''`
