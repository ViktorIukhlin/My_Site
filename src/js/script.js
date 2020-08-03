'use strict';
const skills = document.querySelector('.skills__container'),
      portfolio = document.querySelector('.portfolio__content'),
      burger = document.querySelector('.header');
const dataBase = {
    //SKILS
    svgies: [
        "Java Script",
        "HTML",
        "CSS",
        "C++",
        "Figma",
        "Git",
        "GitHub",
        "IELTS",
        "Visual Studio",
        "Visual Studio Code"
    ],
    stars: [
        4,
        4,
        4,
        2,
        3,
        4,
        4,
        3,
        4,
        4
    ],
    //PORTFOLIO
    screens: [
        "Coca Cola",
        "Titans of cnc",
        "Design blog"
    ],
    ScreensUrl: [
        "https://www.coca-cola.ru/",
        "https://academy.titansofcnc.com/",
        "https://www.invisionapp.com/inside-design"
    ]
};

const addSkills = (svgies, stars, parent) => {
    parent.innerHTML = '';

    svgies.forEach((item, ir) => {
        let starsblock = '';
        let starslist = '';
        if(item == ""){
        starsblock += `
                <div class="skills__logo"></div>
                <div class="skills__name"></div>
        `;}else{
        starsblock += `
                <div class="skills__logo">
                    <img src="src/img/icons/${item}.svg" alt="${item}" class="skills__svg">
                </div>
                <div class="skills__name">
                    <p>${item}</p>
                </div>
        `;}
        for(let i = 0; i < 5 ; i++){
            if(stars[ir] == ''){
                starslist = false;
                    break;
            }
            if(i < stars[ir]){
                starslist += `
                    <img src="src/img/StarBlack.svg" alt="star" class="skills__star">
                `;
            }else{
                starslist += `
                    <img src="src/img/Star.svg" alt="star" class="skills__star">
            `;}
        }
        if(starslist == false){
            starsblock += `<div class="skills__stars"></div>`;
        }else{
            starsblock += `<div class="skills__stars">
            ${starslist}
        </div>`;}
        parent.innerHTML += `<div class="skills__box">
        ${starsblock}
        </div>`;
    });
};
const addPortfolio = (img, url, parent) => {
    parent.innerHTML = '';

    img.forEach((item,i) => {
        parent.innerHTML += `<div class="portfolio__blok">
        
            <div class="portfolio__img">
                <img src="src/img/Sites/${item}.jpg" alt="${item}">
            </div>
            <div class="portfolio__link">
                <a href="${url[i]}">${item} - Homepage</a>
            </div>

        </div>`;
    });
};

burger.addEventListener('click', (event) => {
   burger.querySelector('.header__burger').classList.toggle('active');
   burger.querySelector('.header__menu').classList.toggle('active');
   document.querySelector('.home__language').classList.toggle('active');
   document.querySelector('body').classList.toggle('lock');
});


addSkills(dataBase.svgies, dataBase.stars, skills);
addPortfolio(dataBase.screens, dataBase.ScreensUrl,portfolio);

/////modal///////

const btnSendMessage = document.querySelector('[data-modal]'),
      modal = document.querySelector('.modal'),
      send = document.querySelector('[data-send]'),
      closeWindow = document.querySelector('[data-close]');

function openModal() {
    btnSendMessage.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.toggle('show');
    document.body.style.overflow = 'hidden';
    if(window.screen.width > 1455){
    document.body.style.margin = '0 16px 0 0';}
});
}
openModal();
function closeModal() {
    modal.classList.toggle('show');
    document.body.style.overflow = '';
    document.body.style.margin = '';
}

modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == "") {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
        closeModal();
    }
});

//Form

const form = document.querySelector('[data-form]');

const message = {
    loading: 'src/img/form/spinner.svg',
    success: 'success',
    failure: 'failure'
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let statusMessage = document.createElement('img');
    statusMessage.src = message.loading;
    statusMessage.style.cssText = `
        display: block;
        margin: 0 auto;
    `;
    send.style.display = 'none';
    form.insertAdjacentElement('afterend', statusMessage);

    const request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    const formData = new FormData(form);

    const object = {};
    formData.forEach(function(value, key){
        object[key] = value;
    });
    const json = JSON.stringify(object);

    request.send(json);

    request.addEventListener('load', () => {
        if(request.status === 200) {
            console.log(request.response);
            send.style.display = 'block';
            showThanksModal(message.success);
            statusMessage.remove();
            form.reset();
        }else{
            showThanksModal(message.failure);
        }
    });

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.remove('hide');
            openModal();
            if(modal.classList.contains('show')){
                closeModal();
            }
        }, 2000);
    }
});


