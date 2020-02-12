
let params = new URLSearchParams(document.location.search)
const id = params.get('id')

fetch(`http://localhost:3000/songs/${id}`)
.then(response => response.json())
.then(showsinglesong)


console.log('show song page')
function showsinglesong(song){
    let h1 = document.createElement('h1')
    let artist = document.createElement('p')
    let album = document.createElement('p')
    let duration = document.createElement('p')

    h1.innerText = song.title
    artist.innerText = song.artist
    album.innerText = song.album
    duration.innerText = song.duration

    document.body.append(h1, artist, album, duration)
}

function myHome() {
    location.replace(`http://localhost:3001/showuser.html?id=${id}`)
  }
  function myPlaylist() {
    location.replace(`http://localhost:3001/showplaylist.html?id=${id}`)
  }
  function mySong() {
    location.replace(`http://localhost:3001/showsong.html?id=${id}`)
  }