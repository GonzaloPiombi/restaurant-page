function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');
    document.querySelector('#content').appendChild(header);

    header.appendChild(createTitle('Pastas'));
    
    const nav = document.createElement('nav');
    header.appendChild(nav);

    const ul = document.createElement('ul');
    header.appendChild(ul);
    ul.appendChild(createNavLinks('Home'));
    ul.appendChild(createNavLinks('Menu'));
    ul.appendChild(createNavLinks('Contact'));
    nav.appendChild(ul);

    //Mobile menu
    const mobileIcon = createIcon('mobileMenu', '40px', 'menu');
    const mobileMenu = document.createElement('a');
    mobileMenu.classList.add('mobile-menu');
    header.appendChild(mobileMenu);
    mobileMenu.appendChild(mobileIcon);

    mobileMenu.addEventListener('click', toggleMobileMenu)
}

function toggleMobileMenu() {
    const ul = document.querySelector('ul');
    const nav = document.querySelector('nav');
    if (ul.style.display === 'block') {
        ul.style.display = 'none';
        nav.classList.remove('mobile-nav');
    } else {
        ul.style.display = 'block';
        nav.classList.add('mobile-nav');
    }
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

function createIcon(name, size, text) {
    name = document.createElement('span');
    name.classList.add('material-icons-outlined');
    name.style = `font-size: ${size}`;
    name.textContent = text;
    return name;
}

export {
    createHeader,
    createIcon
}