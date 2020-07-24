'use strict';
const skills = document.querySelector('.skills__container'),
      portfolio = document.querySelector('.portfolio__content');

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
        "",
        "Visual Studio",
        "Visual Studio Code",
        ""
    ],
    stars: [
        3,
        4,
        4,
        2,
        4,
        4,
        4,
        3,
        '',
        4,
        4,
        ''
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
        starsblock += `
                <div class="skills__logo">
                    <img src="src/img/icons/${item}.svg" alt="${item}" class="skills__svg">
                </div>
                <div class="skills__name">
                    <p>${item}</p>
                </div>
        `;
        for(let i = 0; i < 5 ; i++){
            if(stars[ir] == ''){
                starslist += `
                    <img src="" alt="" class="skills__star"></img>
                    `;
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
        starsblock += `<div class="skills__stars">
        ${starslist}
        </div>`;
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
addSkills(dataBase.svgies, dataBase.stars, skills);
addPortfolio(dataBase.screens, dataBase.ScreensUrl,portfolio);