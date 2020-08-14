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
    });
    
}

export default scroll;