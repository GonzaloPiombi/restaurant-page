import { createIcon } from './page';
 
function createHomePage() {
    const main = document.createElement('main');
    document.querySelector('#content').appendChild(main);

    //Create title
    const title = document.createElement('h2');
    title.textContent = 'Best pasta in town!';
    main.appendChild(title);
    main.appendChild(createIcon('forkAndKnifeIcon', '39px', 'restaurant_menu'));

    //Create paragraphs
    main.appendChild(createText('We have the most delicious pasta and sauces you will ever taste!'));
    main.appendChild(createIcon('forkAndKnifeIcon', '39px', 'restaurant_menu'));
    main.appendChild(createText('What are you waiting for?'));
    main.appendChild(createIcon('forkAndKnifeIcon', '39px', 'restaurant_menu'));

    //Create button for order that redirects to menu
    const orderButton = document.createElement('button');
    orderButton.textContent = 'Order now!';
    main.appendChild(orderButton);
}

function createText(text) {
    const newText = document.createElement('p');
    newText.textContent = text;
    return newText;
}

export {
    createHomePage,
    createText
}