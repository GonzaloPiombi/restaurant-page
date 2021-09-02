function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');
    document.querySelector('#content').appendChild(header);

    header.appendChild(createTitle('Pastas'));
    
    const ul = document.createElement('ul');
    header.appendChild(ul);
    ul.appendChild(createNavLinks('Home'));
    ul.appendChild(createNavLinks('Menu'));
    ul.appendChild(createNavLinks('Contact'));
}

function createTitle(text) {
    const title = document.createElement('h1');
    title.textContent = text;
    return title;
}

function createNavLinks(text) {
    const navItem = document.createElement('li')
    navItem.textContent = text;
    return navItem;
}

export default createHeader