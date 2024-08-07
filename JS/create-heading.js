document.addEventListener('DOMContentLoaded', () => {
    // Create the top container
    const topContainer = document.createElement('div');
    topContainer.id = 'top';

    // Create the nav element
    const nav = document.createElement('nav');
    topContainer.appendChild(nav);

    // Create the logo image
    const logo = document.createElement('img');
    logo.src = 'logo2.png';
    nav.appendChild(logo);

    // Create the menu ul
    const menu = document.createElement('ul');
    menu.className = 'menu';
    nav.appendChild(menu);

    // Create the menu li elements
    const menuItems = [
        { text: 'Home', href: 'home.html' },
        { text: 'Courses', href: 'course.html' },
        { text: 'Enrollment', href: 'enrolementform.html' },
        { text: 'Completed Modules', href: '' }
    ];

    menuItems.forEach((item) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.href;
        a.target = '_top';
        a.textContent = item.text;
        li.appendChild(a);
        menu.appendChild(li);
    });

    // Create the container div
    const container = document.createElement('div');
    container.className = 'container';
    topContainer.appendChild(container);

    // Create the wrapper div
    const wrapper = document.createElement('div');
    wrapper.className = 'wrapper';
    container.appendChild(wrapper);

    // Create the search input
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.name = 'search';
    searchInput.id = 'search';
    searchInput.placeholder = 'Type to search';
    searchInput.autocomplete = 'chrome-off';
    wrapper.appendChild(searchInput);

    // Create the search button
    const searchButton = document.createElement('button');
    searchButton.type = 'button';
    const searchIcon = document.createElement('i');
    searchIcon.className = 'material-symbols-outlined';
    searchIcon.textContent = 'search';
    searchButton.appendChild(searchIcon);
    const searchLink = document.createElement('a');
    searchLink.href = 'course.html';
    searchLink.target = '_top';
    searchLink.appendChild(searchButton);
    wrapper.appendChild(searchLink);

    // Create the results div
    const results = document.createElement('div');
    results.className = 'results';
    wrapper.appendChild(results);

    // Append the top container to the body
    document.getElementById('header').appendChild(topContainer);
});