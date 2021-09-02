function createHomePage() {
    const main = document.createElement('main');
    document.querySelector('#content').appendChild(main);

    //Create title
    const title = document.createElement('h2');
    title.textContent = 'Best pasta in town!';
    main.appendChild(title);
    main.appendChild(createIcon());

    //Create paragraphs
    main.appendChild(createText('We have the most delicious pasta and sauces you will ever taste!'));
    main.appendChild(createIcon());
    main.appendChild(createText('What are you waiting for?'));
    main.appendChild(createIcon());

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

function createIcon() {
    const forkAndKnifeIcon = document.createElement('span');
    forkAndKnifeIcon.classList.add('material-icons-outlined');
    forkAndKnifeIcon.style = 'font-size: 35px';
    forkAndKnifeIcon.textContent = 'restaurant_menu';
    return forkAndKnifeIcon;
}

export default createHomePage