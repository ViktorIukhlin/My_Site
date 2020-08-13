function header() {
    const links = document.querySelectorAll('[data-link]');
    links.forEach(item => {

        item.addEventListener('mouseover', () => {
            item.classList.remove('header-bottom-menu__link');
            item.classList.add('header-bottom-menu__link_active');
        });

        item.addEventListener('mouseout', () => {
            item.classList.remove('header-bottom-menu__link_active');
            item.classList.add('header-bottom-menu__link');
        });
    });
}

export default header;


