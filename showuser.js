console.log('show user page')
let params = new URLSearchParams(document.location.search)
const id = params.get('id')
fetch(`http://localhost:3000/users/${id}`)
    .then(response => response.json())
    .then(showuser)
    function showuser(user){
        const showuserul = document.querySelector("#showuser-ul")
        let h1 = document.createElement('h1')
        h1.innerText = `${user.username}`
          user.playlists.map(playlist =>{
            let p = document.createElement('p')
            p.innerHTML = `<a href='showplaylist.html?id=${playlist.id}'> ${playlist.name}</a>`
            showuserul.append(h1, p)
        })    }
 




    // const ul = document.querySelector('ul')
    // fetch("http://localhost:3000/playlists")
    //   .then(response => response.json())
    //   // .then(console.log)
    //   .then(playlist => playlist 
    //     .map(userToElement)
    //     .map(userUpdate)
    //     .map(userDelete)
    //     .forEach(appendToUl)
    // )
    // function userToElement(playlist) {
    //     const li = document.createElement('li')
    //     li.innerHTML = playlist.name
    //     li.dataset.id = playlist.id
    //     li.dataset.name = playlist.name
    //     return li
    // }
    // function appendToUl(li) {
    //     ul.append(li)
    // }
    // function userDelete(li) {
    //     const form = document.createElement("form")
    //     form.action = `http://localhost:3000/playlists/${li.dataset.id}`
    //     form.method = "POST"
    //     form.innerHTML = `
    //     <input type="submit" value="Delete this Playlist"/>
    //     <input type="hidden" name="_method" value="delete"/>
    //     `
    //     li.append(form)
    //     return li
    // }
    // function userUpdate(li) {
    //     const form = document.createElement("form")
    //     form.action = `http://localhost:3000/playlists/${li.dataset.id}`
    //     form.method = "POST"
    //     form.innerHTML = `
    //             <input type="text" name="name" placeholder="Name" value=${li.dataset.name}/>
    //             <input type="submit" value="Update this Playlist"/>
    //             <input type="hidden" name="_method" value="put"/>
    //         `
    //     li.append(form)
    //     return li
    // }