/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function burger() {
    const burger = document.querySelector('.header');

    burger.addEventListener('click', () => {
        burger.querySelector('.header__burger').classList.toggle('active');
        burger.querySelector('.header__menu').classList.toggle('active');
        document.querySelector('.home__language').classList.toggle('active');
        document.querySelector('body').classList.toggle('lock');
    });
}

/* harmony default export */ __webpack_exports__["default"] = (burger);

/***/ }),

/***/ "./src/js/modules/classes.js":
/*!***********************************!*\
  !*** ./src/js/modules/classes.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _skills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skills */ "./src/js/modules/skills.js");
/* harmony import */ var _portfolio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portfolio */ "./src/js/modules/portfolio.js");



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
                    <img src="src/img/StarBlack.svg" alt="star" class="skills__star">
                    `;
                }
                starslist += `
                    <img src="src/img/Star.svg" alt="star" class="skills__star">
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
            element.innerHTML += `
                <div class="skills__stars">
                    ${this.starslist}
                </div>
            `;
            this.parent.append(element);
        }
    }
    _skills__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(({name, stars}) => {
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
                    <img src="src/img/Sites/${this.name}.jpg" alt="${this.name}">
                </div>
                <div class="portfolio__link">
                    <a href="${this.url}">${this.name} - Homepage</a>
                </div>`;
            this.parent.append(element);
        }
    }
    _portfolio__WEBPACK_IMPORTED_MODULE_1__["default"].forEach(({name, url}) => {
        new PartOfPortfolio(name, url, '.portfolio__content').render();
    });
}

/* harmony default export */ __webpack_exports__["default"] = (clasess);

/***/ }),

/***/ "./src/js/modules/form.js":
/*!********************************!*\
  !*** ./src/js/modules/form.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/js/modules/modal.js");


function form() {

    const form = document.querySelector('[data-form]'),
        send = document.querySelector('[data-send]'),
        modal = document.querySelector('.modal');

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


        postData('mail.php', json)
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                form.reset();
                statusMessage.remove();
            }).catch((e) => {
                showThanksModal(message.failure);
                console.log(e);
            }).finally(() => {
                form.reset();
                send.style.display = '';
                statusMessage.remove();
            });

        function showThanksModal(message) {

            const prevModalDialog = document.querySelector('.modal__dialog');

            prevModalDialog.classList.add('hide');
            
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
                Object(_modal__WEBPACK_IMPORTED_MODULE_0__["closeModal"])();
            }, 1000);
        }
    });
}

/* harmony default export */ __webpack_exports__["default"] = (form);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: default, closeModal, openModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });
function openModal() {
    const modal = document.querySelector('.modal');
    modal.classList.toggle('show');
    document.body.style.overflow = 'hidden';
    if (window.screen.width > 1455) {
        document.body.style.margin = '0 16px 0 0';
    }
}

function closeModal() {
    const modal = document.querySelector('.modal');
    modal.classList.remove('show');
    document.body.style.overflow = '';
    document.body.style.margin = '';
}

function modal() {
    const modal = document.querySelector('.modal');

    document.querySelector('[data-modal]').addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    });

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
}

/* harmony default export */ __webpack_exports__["default"] = (modal);



/***/ }),

/***/ "./src/js/modules/portfolio.js":
/*!*************************************!*\
  !*** ./src/js/modules/portfolio.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const portfolio = [
    {
        "name": "Coca Cola",
        "url": "https://www.coca-cola.ru/"
    },
    {
        "name": "Titans of cnc",
        "url": "https://academy.titansofcnc.com/"
    },
    {
        "name": "Design blog",
        "url": "https://www.invisionapp.com/inside-design"
    }
];

/* harmony default export */ __webpack_exports__["default"] = (portfolio);

/***/ }),

/***/ "./src/js/modules/skills.js":
/*!**********************************!*\
  !*** ./src/js/modules/skills.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const skills = [
    {
        "name": "Java Script",
        "stars": "4"
    },
    {
        "name": "HTML",
        "stars": "4"
    },
    {
        "name": "CSS",
        "stars": "4"
    },
    {
        "name": "C++",
        "stars": "2"
    },
    {
        "name": "Figma",
        "stars": "3"
    },
    {
        "name": "Git",
        "stars": "4"
    },
    {
        "name": "GitHub",
        "stars": "4"
    },
    {
        "name": "IELTS",
        "stars": "3"
    },
    {
        "name": "Visual Studio",
        "stars": "4"
    },
    {
        "name": "Visual Studio Code",
        "stars": "4"
    }
];

/* harmony default export */ __webpack_exports__["default"] = (skills);

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/classes */ "./src/js/modules/classes.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/form */ "./src/js/modules/form.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");





window.addEventListener('DOMContentLoaded', () => {
    
    Object(_modules_burger__WEBPACK_IMPORTED_MODULE_0__["default"])();
    Object(_modules_classes__WEBPACK_IMPORTED_MODULE_1__["default"])();
    Object(_modules_modal__WEBPACK_IMPORTED_MODULE_3__["default"])();
    Object(_modules_form__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map