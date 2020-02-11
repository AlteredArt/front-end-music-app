console.log("show playlist page")

let params = new URLSearchParams(document.location.search)
const id = params.get('id')

fetch(`http://localhost:3000/playlists/${id}`)
    .then(response => response.json())
    .then(showplaylist)


function showplaylist(playlist){
    let h1 = document.createElement('h1')
    h1.innerText = `${playlist.name}`

    playlist.songs.map(song =>{
        let p = document.createElement('p')
        p.innerHTML = `<a href='showsong.html?id=${song.id}'> ${song.title}</a>`

    document.body.append(h1, p)

    })
}