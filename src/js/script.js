import burger from './modules/burger';
import classes from './modules/classes';
import form from './modules/form';
import modal from './modules/modal';
import customization from './modules/customization';
import scroll from './modules/scroll';
import speedOfScroll from './modules/speedOfScroll';

window.addEventListener('DOMContentLoaded', () => {
    
    burger();
    classes();
    modal();
    form();
    customization();
    scroll();
    speedOfScroll();
});

