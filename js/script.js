const nav = document.getElementById('nav');
const content = document.getElementById('content');

let pageIndex = 0;
let usersPerPage = 10;

async function test() {
    const response = await fetch('js/database.json');  
    const users = await response.json();   
    displayUsers(users.users); 
}
test();

function displayUsers(users) {    
    content.innerHTML = "";
    for (let i = pageIndex * usersPerPage; i < (pageIndex * usersPerPage) + usersPerPage; i++) {
        console.log(users[20].image)
        if (!users[i]) { break }
        const item = document.createElement('div');
        item.innerHTML = `
        <ul class="contact-list">
        <li class="contact-item cf">
        <div class="contact-details">
          <img class="avatar" src="${users[i].image}">
          <h3>${users[i].name}</h3>
          <span class="email">${users[i].email}</span>
        </div>
        <div class="joined-details">
          <span class="date">Joined ${users[i].joined}</span>
        </div>
        </li>
        `;
        content.append(item);
    }
    ShowPagination(users);
}

function ShowPagination(users) {
    nav.innerHTML = "";
    for (let i = 0; i < (users.length / usersPerPage); i++) {
        const span = document.createElement('span');
        span.innerHTML = "<li><a>" + (i + 1) + "</a></li>";
        span.addEventListener('click', (e) => {
            pageIndex = e.target.innerHTML - 1;
            displayUsers(users);
        });
        nav.append(span);
        
    }
}