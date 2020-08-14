function scroll() {

    window.addEventListener('scroll', () => {
        if (window.pageYOffset < 100 || window.screen.width < 1300) {
            document.querySelector('.scrollUp').classList.add('hide-slow');
        }else{
            document.querySelector('.scrollUp').classList.remove('hide-slow');
        }

        if(window.screen.width < 1300 && window.pageYOffset > 650){
            document.querySelector('.scrollUpForMobile').classList.remove('scrollUpForMobile_hide');
        }else if(window.screen.width < 1300 && window.pageYOffset < 650){
            document.querySelector('.scrollUpForMobile').classList.add('scrollUpForMobile_hide');
        }

        if(window.pageYOffset > 200){
            document.querySelector('.about__content-text').classList.add('activation');
        }else if(window.pageYOffset < 200){
            document.querySelector('.about__content-text').classList.remove('activation');
        }

        if(window.pageYOffset > 800){
            document.querySelector('.skills__container').classList.add('activation');
        }else if(window.pageYOffset < 800){
            document.querySelector('.skills__container').classList.remove('activation');
        }

        if(window.pageYOffset > 2100){
            document.querySelector('.portfolio__content').classList.add('activation');
        }else if(window.pageYOffset < 2100){
            document.querySelector('.portfolio__content').classList.remove('activation');
        }

        if(window.pageYOffset > 4000){
            document.querySelector('.contacts-block').classList.add('activation');
        }else if(window.pageYOffset < 4000){
            document.querySelector('.contacts-block').classList.remove('activation');
        }

    });
    
}

export default scroll;