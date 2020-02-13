console.log("show playlist page")

let params = new URLSearchParams(document.location.search)
const id = params.get('id')

fetch(`http://localhost:3000/playlists/${id}`)
    .then(response => response.json())
    .then(showplaylist)


function showplaylist(playlist){
    const playSongDiv = document.querySelector("#playsong-div")
    let h1 = document.createElement('h1')
    h1.innerText = `${playlist.name}`

    playlist.songs.map(song =>{
        let p = document.createElement('p')
        p.innerHTML = `<a href='showsong.html?id=${song.id}'> ${song.title}</a>`

        playSongDiv.append(h1, p)

    })
}



const ul = document.querySelector('ul')
    fetch("http://localhost:3000/playlists")
      .then(response => response.json())
      // .then(console.log)
      .then(playlist => playlist 
        .map(userToElement)
        .map(userUpdate)
        .map(userDelete)
        .forEach(appendToUl)
    )
    function userToElement(playlist) {
        const li = document.createElement('li')
        li.dataset.id = playlist.id
        li.dataset.name = playlist.name
        return li
    }
    function appendToUl(li) {
        ul.append(li)
    }
    function userDelete(li) {
        const form = document.createElement("form")
        form.action = `http://localhost:3000/playlists/${li.dataset.id}`
        form.method = "POST"
        form.innerHTML = `
        <input type="submit" value="Delete playlist"/>
        <input type="hidden" name="_method" value="delete"/>
        `
        li.append(form)
        return li
    }
    function userUpdate(li) {
        const form = document.createElement("form")
        form.action = `http://localhost:3000/playlists/${li.dataset.id}`
        form.method = "POST"
        form.innerHTML = `
                <input type="text" name="name" placeholder="Name" value=${li.dataset.name}/>
                <input type="submit" value="Update playlist" />
                <input type="hidden" name="_method" value="put"/>
            `
        li.append(form)
        return li
    }