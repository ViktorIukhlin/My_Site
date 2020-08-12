import burger from './modules/burger';
import classes from './modules/classes';
import form from './modules/form';
import modal from './modules/modal';
import skills from './modules/skills';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    
    burger();
    classes();
    modal();
});