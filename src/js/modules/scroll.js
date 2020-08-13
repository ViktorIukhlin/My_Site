function scroll() {

    window.addEventListener('scroll', () => {
        if (window.pageYOffset < 100) {
            document.querySelector('.scrollUp').classList.add('hide-slow');
        }else{
            document.querySelector('.scrollUp').classList.remove('hide-slow');
        }
    });

}

export default scroll;