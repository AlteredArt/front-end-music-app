console.log("show playlist page")

let params = new URLSearchParams(document.location.search)
const id = params.get('id')

fetch(`http://localhost:3000/playlists/${id}`)
    .then(response => response.json())
    .then(showplaylist)


function showplaylist(playlist){
    let h1 = document.createElement('h1')
    h1.innerText = `${playlist.name}`
    // console.log(playlist.name)
    document.body.appendChild(h1)
    playlist.song.
    let p = document.createElement('p')
    p.innerHTML = `<a href='showsong.html?=id${playlist.song.title}'> ${playlist.song.title}</a>`
    document.appendChild(p)
}