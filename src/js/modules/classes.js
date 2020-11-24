import skills from './skills';
import portfolio from './portfolio';

function clasess() {
    class Skill {
        constructor(name, stars, parentSelector, ...classes) {
            this.name = name;
            this.stars = stars;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.starslist = this.createStarsblock();
        }

        createStarsblock() {
            let starslist = '';
            for (let i = 0; i < 5; i++) {
                for (; i < this.stars; i++) {
                    starslist += `
                    <img src="src/img/StarBlack.svg" alt="StarBlack" class="skills__star">
                    `;
                }
                starslist += `
                    <img src="src/img/Star.svg" alt="Star" class="skills__star">
                    `;
            }
            return starslist;
        }

        render() {
            const element = document.createElement('div');
            element.classList.add('skills__box');
            this.classes.forEach(className => element.classList.add(className));
            element.innerHTML = `
                <div class="skills__logo">
                    <img src="src/img/icons/${this.name}.svg" alt="${this.name}" class="skills__svg">
                </div>
                <div class="skills__name">
                    <p>${this.name}</p>
                </div>
            `;
            // element.innerHTML += `
            //     <div class="skills__stars">
            //         ${this.starslist}
            //     </div>
            // `;
            this.parent.append(element);
        }
    }
    skills.forEach(({ name, stars }) => {
        new Skill(name, stars, '.skills__container').render();
    });

    class PartOfPortfolio {
        constructor(name, url, parentSelector, ...classes) {
            this.name = name;
            this.url = url;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
        }

        render() {
            const element = document.createElement('div');
            element.classList.add('portfolio__blok');
            this.classes.forEach(className => element.classList.add(className));
            element.innerHTML += `
                <div class="portfolio__img">
                    <img src="src/img/Sites/${this.name}.webp" alt="${this.name}">
                </div>
                <div class="portfolio__link">
                    <a href="${this.url}">${this.name} - Homepage</a>
                </div>`;
            this.parent.append(element);
        }
    }
    portfolio.forEach(({ name, url }) => {
        new PartOfPortfolio(name, url, '.portfolio__content').render();
    });
}

export default clasess;