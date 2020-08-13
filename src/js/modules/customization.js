function customization() {
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

    const contacts = document.querySelectorAll('.contacts__icon');
    contacts.forEach(item => {

        item.addEventListener('mouseover', () => {
            item.classList.add('size-up');
        });

        item.addEventListener('mouseout', () => {
            item.classList.remove('size-up');
        });
    });
}

export default customization;


