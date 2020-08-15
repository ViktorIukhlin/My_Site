window.addEventListener('DOMContentLoaded', () => {

    const skillsLogo = document.querySelectorAll('.skills__logo img'),
        skillsStars = document.querySelectorAll('.skills__stars img'),
        portfolioImg = document.querySelectorAll('.portfolio__img img');


    skillsLogo.forEach(item => {
        item.src = `../src/img/icons/${item.alt}.svg`;
    });

    portfolioImg.forEach(item => {
        item.src = `../src/img/Sites/${item.alt}.webp`;
    });

    skillsStars.forEach(item => {
        item.src = `../src/img/${item.alt}.svg`;
    });

});
