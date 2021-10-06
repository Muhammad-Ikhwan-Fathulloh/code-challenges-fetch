async function getUsers() {
    try {
        let response = await fetch('https://randomuser.me/api/?results=2', {
            method: 'GET',
        });
        let jsonResponse = await response.json();
        return jsonResponse;
    } catch (error) {
        console.log(error);
    }
}

async function renderUsers() {
    let users = await getUsers()
    console.log(users)
    let dataUser = users.results
    let html = ''
    Array.from(dataUser).forEach(data => {
        let htmlRender =
            `<div class="user">
        <img src="${data.picture.medium}">
        <h2>${data.name.first} ${data.name.last}</h2>
        <div class="email">
            <a href="email:${data.email}">${data.email}</a>
        </div>
        </div>`;
        html += htmlRender
    })

    let container = document.querySelector('.container')
    container.innerHTML = html
}

renderUsers();