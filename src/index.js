import { createHeader } from './page';
import { createHomePage } from './home';
import createContactPage from './contact';
import createMenu from './menu';

function addLinks() {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            if (e.currentTarget.textContent === 'Contact') {
                displayContact();
            } else if (e.currentTarget.textContent === 'Home') {
                displayHome();
            } else if (e.currentTarget.textContent === 'Menu') {
                displayMenu();
            }
        });
    });
}

function displayHome() {
    document.querySelector('main').style = 'display: flex';
    document.querySelector('.contact').style = 'display: none';
    document.querySelector('.menu-container').style = 'display: none';

    link.classList.add('active-tab');
    document.querySelectorAll('a')[1].classList.remove('active-tab');
    document.querySelectorAll('a')[2].classList.remove('active-tab');
}

function displayMenu() {
    document.querySelector('.menu-container').style = 'display: block';
    document.querySelector('.contact').style = 'display: none';
    document.querySelector('main').style = 'display: none';

    link.classList.add('active-tab');
    document.querySelectorAll('a')[0].classList.remove('active-tab');
    document.querySelectorAll('a')[2].classList.remove('active-tab');
}

function displayContact() {
    document.querySelector('.contact').style = 'display: flex';
    document.querySelector('main').style = 'display: none';
    document.querySelector('.menu-container').style = 'display: none';

    link.classList.add('active-tab');
    document.querySelectorAll('a')[0].classList.remove('active-tab');
    document.querySelectorAll('a')[1].classList.remove('active-tab');
}

createHeader();
createHomePage();
createMenu();
createContactPage();
addLinks();