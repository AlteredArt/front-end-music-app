console.log('show user page')
let params = new URLSearchParams(document.location.seacrh)
const id = params.get('id')

fetch(`http://localhost:3000/users/${id}`)
    .then(response => response.json())
    .then(Users => Users.map(showuser))
    
    function showuser(user){
        const userPlay = user.playlist
        let h1 = document.createElement('h1')
        h1.innerText = `${user.name}`
        let p = document.createElement('p')
        p.innerHTML = `<a href='showplaylist.html?id=${playlist.id}'> ${userPlay.name}</a>`
        document.body.append(h1,p)

    }