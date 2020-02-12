console.log('show user page')
let params = new URLSearchParams(document.location.search)
const id = params.get('id')

fetch(`http://localhost:3000/users/${id}`)
    .then(response => response.json())
    .then(showuser)

    function showuser(user){
        let h1 = document.createElement('h1')
        h1.innerText = `${user.username}`
       
        user.playlists.map(playlist =>{
            let p = document.createElement('p')
            p.innerHTML = `<a href='showplaylist.html?id=${playlist.id}'> ${playlist.name}</a>`
           
        document.body.append(h1, p)
        })

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