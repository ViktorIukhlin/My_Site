function burger() {
    const burger = document.querySelector('.header');

    burger.addEventListener('click', () => {
        burger.querySelector('.header__burger').classList.toggle('active');
        burger.querySelector('.header__menu').classList.toggle('active');
        document.querySelector('.home__language').classList.toggle('active');
        document.querySelector('body').classList.toggle('lock');
    });
}

export default burger;