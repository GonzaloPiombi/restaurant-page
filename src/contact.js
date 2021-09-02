import { createText } from './home';
import { createIcon } from './page'

function createContactPage() {
    const container = document.createElement('div');
    container.classList.add('contact');
    document.querySelector('#content').appendChild(container);

    //Information container
    const information = document.createElement('div');
    container.appendChild(information);

    fillInformation(information);

    //Image container
    const imageContainer = document.createElement('div');
    container.appendChild(imageContainer);
}

function fillInformation(information) {
    //Information title
    const title = document.createElement('h2');
    title.textContent = 'Contact Information';
    information.appendChild(title);

    //Phone info.
    const phone = document.createElement('div');
    information.appendChild(phone);
    phone.appendChild(createIcon('phoneIcon', '35px', 'phone'));
    phone.appendChild(createText('030-345-6'));

    //Adress info.
    const adress = document.createElement('div');
    information.appendChild(adress);
    adress.appendChild(createIcon('locationIcon', '35px', 'place'));
    adress.appendChild(createText('123 Fake Street'));
}


export default createContactPage