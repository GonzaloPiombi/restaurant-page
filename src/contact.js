import { createText } from './home';
import { createIcon } from './header';

function createContactPage() {
    const container = document.createElement('section');
    container.classList.add('contact');
    document.querySelector('#content').appendChild(container);

    //Information container
    const information = document.createElement('div');
    container.appendChild(information);

    fillInformation(information);

    //Schedule
    schedule(information);

    //Image container
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container')
    container.appendChild(imageContainer);

    const contactImage = document.createElement('img');
    contactImage.classList.add('contact-image');
    contactImage.setAttribute('src', 'images/restaurant.jpg');

    imageContainer.appendChild(contactImage);

}

function fillInformation(information) {
    //Information title
    const title = document.createElement('h2');
    title.textContent = 'Contact Information';
    information.appendChild(title);

    //Phone info.
    const phone = document.createElement('div');
    phone.classList.add('phone-address');
    information.appendChild(phone);
    phone.appendChild(createIcon('phoneIcon', '35px', 'phone'));
    phone.appendChild(createText('030-345-6'));

    //Address info.
    const address = document.createElement('div');
    address.classList.add('phone-address');
    information.appendChild(address);
    address.appendChild(createIcon('locationIcon', '35px', 'place'));
    address.appendChild(createText('123 Fake Street'));
}

function schedule(information) {
    const schedule = document.createElement('div');
    schedule.classList.add('schedule');
    information.appendChild(schedule);

    schedule.appendChild(createIcon('scheduleIcon', '35px', 'schedule'));
    schedule.appendChild(createText('Mon: Closed'));
    schedule.appendChild(createText('Tue-Thu: 9am to 1am'));
    schedule.appendChild(createText('Fri-Sun: 9am to 2am'));
}

export default createContactPage