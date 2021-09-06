import { createHeader } from './header';
import { createHomePage } from './home';
import createContactPage from './contact';
import createMenu from './menu';

function addLinks() {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            if (e.currentTarget.textContent === 'Contact') {
                displayContact(link);
            } else if (e.currentTarget.textContent === 'Home') {
                displayHome(link);
            } else if (e.currentTarget.textContent === 'Menu') {
                displayMenu(link);
            }
        });
    });
}

function displayHome(link) {
    document.querySelector('main').style = 'display: flex';
    document.querySelector('.contact').style = 'display: none';
    document.querySelector('.menu-container').style = 'display: none';

    link.classList.add('active-tab');
    document.querySelectorAll('a')[1].classList.remove('active-tab');
    document.querySelectorAll('a')[2].classList.remove('active-tab');
}

function displayMenu(link) {
    document.querySelector('.menu-container').style = 'display: block';
    document.querySelector('.contact').style = 'display: none';
    document.querySelector('main').style = 'display: none';

    link.classList.add('active-tab');
    document.querySelectorAll('a')[0].classList.remove('active-tab');
    document.querySelectorAll('a')[2].classList.remove('active-tab');
}

function displayContact(link) {
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

const menuLink = document.querySelectorAll('a')[1];
document.querySelector('button').addEventListener('click', () => displayMenu(menuLink));