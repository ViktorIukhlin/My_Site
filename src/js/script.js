'use strict';
const skills = document.querySelector('.skills');

const dataBase = {
    svgies: [
        "CSS",
        "C++",
        "Figma",
        "GIT",
        "GITHUB",
        "HTML",
        "IELTS",
        "Java Script",
        "Visual Studio",
        "Visual Studio Code"
    ],
    stars: [
        1,
        4,
        3,
        2,
        1,
        1,
        1,
        4,
        1,
        1
    ]
};

const addSkills = (svgies, stars, parent) => {
    parent.innerHTML = '';

    svgies.forEach((item, ir) => {
        let starsblock = '';
        let starslist = '';
        starsblock += `
                <div class="skills__logo">
                    <img src="/src/img/icons/${item}.svg" alt="${item}" class="skills__svg">
                </div>
                <div class="skills__name">
                    <p>${item}</p>
                </div>
        `;
        for(let i = 0; i < 5 ; i++){
            if(i < stars[ir]){
                starslist += `
                    <img src="/src/img/StarBlack.svg" alt="" class="skills__star">
                `;
            }else{
                starslist += `
                    <img src="/src/img/Star.svg" alt="" class="skills__star">
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

addSkills(dataBase.svgies, dataBase.stars, skills);