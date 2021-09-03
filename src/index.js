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
                document.querySelector('.contact').style = 'display: flex';
                document.querySelector('main').style = 'display: none';

                link.classList.add('active-tab');
                document.querySelectorAll('a')[0].classList.remove('active-tab');
                document.querySelectorAll('a')[1].classList.remove('active-tab');
            } else if (e.currentTarget.textContent === 'Home') {
                document.querySelector('.contact').style = 'display: none';
                document.querySelector('main').style = 'display: flex';

                link.classList.add('active-tab');
                document.querySelectorAll('a')[1].classList.remove('active-tab');
                document.querySelectorAll('a')[2].classList.remove('active-tab');
            }
        });
    });
}

createHeader();
createHomePage();
createMenu();
createContactPage();
addLinks();