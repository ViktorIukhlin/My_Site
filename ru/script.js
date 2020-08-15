window.addEventListener('DOMContentLoaded', () => {

    const skillsLogo = document.querySelectorAll('.skills__logo img'),
        skillsStars = document.querySelectorAll('.skills__stars img'),
        portfolioImg = document.querySelectorAll('.portfolio__img img');

        const req = new Promise((resolve, reject) => {

            skillsLogo.forEach(item => {
                item.src = `../src/img/icons/${item.alt}.svg`;
            });
            
            resolve();
        }).then(() => {
            
            portfolioImg.forEach(item => {
                item.src = `../src/img/Sites/${item.alt}.jpg`;
            });

        }).then(() => {

            skillsStars.forEach(item => {
                item.src = `../src/img/${item.alt}.svg`;
            });

        }).then(() => {
            console.log('ok');
             
        });


    // setTimeout(() => {
    //     console.clear();
    // }, 1000);
});
