console.log('show user page')
let params = new URLSearchParams(document.location.search)
const id = params.get('id')
fetch(`http://localhost:3000/users/${id}`)
  .then(response => response.json())
  .then(showuser)

function showuser(user) {
  const showuserul = document.querySelector("#showuser-ul")
  let h1 = document.createElement('h1')
  h1.innerText = `${user.username}`
  user.playlists.map(playlist => {
    let p = document.createElement('p')
    p.innerHTML = `<a href='showplaylist.html?id=${playlist.id}'> ${playlist.name}</a>`
    showuserul.append(h1, p)
  })
}


const classUl = document.querySelector('.create-ul')

fetch(`http://localhost:3000/playlists`)
  .then(response => response.json())
  .then(playlist => {
    playlist.map(userToElement)
      // .map(userUpdate)
      .map(appendToUl)
    playlistCreate()
    })

function userToElement(playlist) {
  const li = document.createElement('li')
  li.dataset.id = playlist.id
  li.dataset.name = playlist.name
 
  return li

}

function appendToUl(li) {
  classUl.append(li)
}
function playlistCreate() {
  const form = document.createElement("form")
  form.action = `http://localhost:3000/playlists`
  form.method = "POST"
  form.innerHTML = `
          <input type="text" name="name" placeholder="Name your playlist" />
          <input type="hidden" name="user" value="${id}" />
          <input type="submit" value="Create Playlist" />
      `
  classUl.append(form)
}