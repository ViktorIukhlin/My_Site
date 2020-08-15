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

        if(window.pageYOffset > (document.documentElement.scrollHeight*0.038)){
            document.querySelector('.about__content-text').classList.add('activation');
        }

        if(window.pageYOffset > (document.documentElement.scrollHeight*0.128)){
            document.querySelector('#skills').classList.add('activation');
        }

        if(window.pageYOffset > (document.documentElement.scrollHeight*0.36)){
            document.querySelector('.portfolio__container').classList.add('activation');
        }

        if(window.pageYOffset > (document.documentElement.scrollHeight*0.75)){
            document.querySelector('.contacts-block').classList.add('activation');
        }

    });
    
}

export default scroll;