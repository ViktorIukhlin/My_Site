window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    const skills = document.querySelector('.skills__container'),
        portfolio = document.querySelector('.portfolio__content'),
        burger = document.querySelector('.header');
 /////////////////////////////CLASSES//////////////////////////////
    class Skill {
        constructor(name, stars, parentSelector, ...classes){
            this.name = name;
            this.stars = stars;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.starslist = this.createStarsblock();
        }

        createStarsblock(){
            let starslist = '';
            for(let i = 0; i < 5 ; i++){
                for( ; i < this.stars ; i++){
                    starslist += `
                    <img src="src/img/StarBlack.svg" alt="star" class="skills__star">
                    `;
                }
                starslist += `
                    <img src="src/img/Star.svg" alt="star" class="skills__star">
                    `;
            }
            return starslist;
        }

        render(){
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
            element.innerHTML += `
                <div class="skills__stars">
                    ${this.starslist}
                </div>
            `;
            this.parent.append(element);
        }   
    }
    class PartOfPortfolio {
        constructor(name, url, parentSelector, ...classes){
            this.name = name;
            this.url = url;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
        }

        render(){
            const element = document.createElement('div');
            element.classList.add('portfolio__blok');
            this.classes.forEach(className => element.classList.add(className));
            element.innerHTML +=`
                <div class="portfolio__img">
                    <img src="src/img/Sites/${this.name}.jpg" alt="${this.name}">
                </div>
                <div class="portfolio__link">
                    <a href="${this.url}">${this.name} - Homepage</a>
                </div>`;
            this.parent.append(element);
        }
    }
 //////////////////////////////////////////////////////////////////////

    const getResource = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
         
        return res.json();
    };

    getResource('http://localhost:3000/skills')
        .then(data => {
            data.forEach(({name, stars}) => {
                new Skill(name, stars, '.skills__container').render();
            });
        });
    
    getResource('http://localhost:3000/portfolio')
        .then(data => {
            data.forEach(({name, url}) => {
                new PartOfPortfolio(name, url, '.portfolio__content').render();
            });
        });

    burger.addEventListener('click', () => {
        burger.querySelector('.header__burger').classList.toggle('active');
        burger.querySelector('.header__menu').classList.toggle('active');
        document.querySelector('.home__language').classList.toggle('active');
        document.querySelector('body').classList.toggle('lock');
    });

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
            if (window.screen.width > 1455) {
                document.body.style.margin = '0 16px 0 0';
            }
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

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });
         
        return res.json();
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

        const formData = new FormData(form);

        const json = JSON.stringify(Object.fromEntries(formData.entries()));


        postData('http://localhost:3000/requests', json)
        .then(data => {
            console.log(data);
            showThanksModal(message.success);
            form.reset();
            statusMessage.remove();
        }).catch(() => {
            showThanksModal(message.failure);
        }).finally(() => {
            form.reset();
            send.style.display = 'block';
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
                if (modal.classList.contains('show')) {
                    closeModal();
                }
            }, 2000);
        }
    });
});