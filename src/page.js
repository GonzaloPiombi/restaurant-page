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
    const navLink = document.createElement('a');
    navLink.setAttribute('href', '');
    navLink.textContent = text;

    const navItem = document.createElement('li');
    navItem.appendChild(navLink);
    return navItem;
}


function createFooter() {
    const footer = document.createElement('footer');
    document.querySelector('#content').appendChild(footer);
}

export {
    createHeader,
    createFooter
}