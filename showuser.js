console.log('show user page')
let params = new URLSearchParams(document.location.search)
const id = params.get('id')

fetch(`http://localhost:3000/users/${id}`)
    .then(response => response.json())
    .then(showuser)

    function showuser(user){
        // const userPlay = user.playlists
        let h1 = document.createElement('h1')
        h1.innerText = `${user.name}`
        document.body.appendChild(h1)
        user.playlists.map(playlist =>{
            let p = document.createElement('p')
            p.innerHTML = `<a href='showplaylist.html?id=${playlist.id}'> ${playlist.name}</a>`
            document.body.appendChild(p)
        })

    }