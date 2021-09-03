import { createText } from './home';
import { createIcon } from './page';

function createMenu() {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu');
    document.querySelector('#content').appendChild(menuContainer);


}

export default createMenu;