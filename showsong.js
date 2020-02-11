console.log('show song page')

let params = new URLSearchParams(document.location.seacrh)
const id = params.get('id')

fetch(`http://localhost:3000/songs/${id}`)
    .then(response => response.json())
    .then(songs => songs.map(showsong)

function showsong(song)
    let p = document.createElement('p')
    h1.innerHTML = `<a href='showsong.html?id=${song.id}'> ${song.title}, ${song.artist}, ${song.album}, $song.duration}</a>`