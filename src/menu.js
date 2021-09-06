import { createText } from './home';
import { createIcon } from './page';

function createMenu() {
    const menuOutsideContainer = document.createElement('section');
    menuOutsideContainer.classList.add('menu-container');
    document.querySelector('#content').appendChild(menuOutsideContainer);

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container');
    menuOutsideContainer.appendChild(titleContainer);

    titleContainer.appendChild(createIcon('forkAndKnifeIcon', '40px', 'restaurant_menu'));
    const title = document.createElement('h2');
    title.textContent = 'Menu';
    titleContainer.appendChild(title);
    titleContainer.appendChild(createIcon('forkAndKnifeIcon', '40px', 'restaurant_menu'));

    const menuInsideContainer = document.createElement('div');
    menuInsideContainer.classList.add('menu');
    menuOutsideContainer.appendChild(menuInsideContainer);

    pastaInfo(menuInsideContainer);
    sauceInfo(menuInsideContainer);
}

function pastaInfo(menuInsideContainer) {
    const pastaContainer = document.createElement('div');
    menuInsideContainer.appendChild(pastaContainer);

    const title = document.createElement('h3');
    title.textContent = 'Our pastas';
    pastaContainer.appendChild(title);

    pastaContainer.appendChild(createIcon('pastaIcon', '35px', 'dinner_dining'));

    pastaContainer.appendChild(createText('Spaghetti'));
    pastaContainer.appendChild(createText('Farfalle'));
    pastaContainer.appendChild(createText('Rigatoni'));
    pastaContainer.appendChild(createText('Ravioli'));
    pastaContainer.appendChild(createText('Gnocchi'));
    pastaContainer.appendChild(createText('Lasagna'));
}

function sauceInfo(menuInsideContainer) {
    const sauceContainer = document.createElement('div');
    menuInsideContainer.appendChild(sauceContainer);

    const title = document.createElement('h3');
    title.textContent = 'Our sauces';
    sauceContainer.appendChild(title);

    sauceContainer.appendChild(createIcon('sauceIcon', '35px', 'water_drop'));

    sauceContainer.appendChild(createText('Bolognese'));
    sauceContainer.appendChild(createText('Marinara'));
    sauceContainer.appendChild(createText('Carbonara'));
    sauceContainer.appendChild(createText('Pesto'));
    sauceContainer.appendChild(createText('Alfredo'));
    sauceContainer.appendChild(createText('Frutti di mare'));
}

export default createMenu;