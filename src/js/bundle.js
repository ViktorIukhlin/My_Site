!function(e){var t={};function s(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(o,n,function(t){return e[t]}.bind(null,n));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){"use strict";s.r(t);var o=function(){const e=document.querySelector(".header");e.addEventListener("click",()=>{e.querySelector(".header__burger").classList.toggle("active"),e.querySelector(".header__menu").classList.toggle("active"),document.querySelector(".home__language").classList.toggle("active"),document.querySelector("body").classList.toggle("lock")})};var n=[{name:"Java Script",stars:"4"},{name:"React",stars:"2"},{name:"Redux"},{name:"HTML",stars:"4"},{name:"CSS",stars:"4"},{name:"Sass",stars:"3"},{name:"Git",stars:"4"},{name:"GitHub",stars:"4"},{name:"GitLab"},{name:"BEM"},{name:"Webpack",stars:"3"},{name:"Gulp"},{name:"OData"},{name:"PostgreSQL"},{name:"Figma",stars:"3"},{name:"Bootstrap",stars:"1"},{name:"jQuery",stars:"3"},{name:"VS Code",stars:"4"},{name:"C++",stars:"2"},{name:"IELTS",stars:"3"}];var a=[{name:"Appvelox",url:"https://viktoriukhlin.github.io/Appvelox/#/profile"},{name:"Food delivery",url:"https://viktoriukhlin.github.io/Food/"},{name:"Movies",url:"https://viktoriukhlin.github.io/Movies/"}];var r=function(){class e{constructor(e,t,s,...o){this.name=e,this.stars=t,this.classes=o,this.parent=document.querySelector(s),this.starslist=this.createStarsblock()}createStarsblock(){let e="";for(let t=0;t<5;t++){for(;t<this.stars;t++)e+='\n                    <img src="src/img/StarBlack.svg" alt="StarBlack" class="skills__star">\n                    ';e+='\n                    <img src="src/img/Star.svg" alt="Star" class="skills__star">\n                    '}return e}render(){const e=document.createElement("div");e.classList.add("skills__box"),this.classes.forEach(t=>e.classList.add(t)),e.innerHTML=`\n                <div class="skills__logo">\n                    <img src="src/img/icons/${this.name}.svg" alt="${this.name}" class="skills__svg">\n                </div>\n                <div class="skills__name">\n                    <p>${this.name}</p>\n                </div>\n            `,this.parent.append(e)}}n.forEach(({name:t,stars:s})=>{new e(t,s,".skills__container").render()});class t{constructor(e,t,s,...o){this.name=e,this.url=t,this.classes=o,this.parent=document.querySelector(s)}render(){const e=document.createElement("div");e.classList.add("portfolio__blok"),this.classes.forEach(t=>e.classList.add(t)),e.innerHTML+=`\n                <div class="portfolio__img">\n                    <img src="src/img/Sites/${this.name}.webp" alt="${this.name}">\n                </div>\n                <div class="portfolio__link">\n                    <a href="${this.url}">${this.name} - Homepage</a>\n                </div>`,this.parent.append(e)}}a.forEach(({name:e,url:s})=>{new t(e,s,".portfolio__content").render()})};function i(){document.querySelector(".modal").classList.remove("show"),document.body.style.overflow="",document.body.style.margin=""}var c=function(){const e=document.querySelector(".modal");e.addEventListener("click",t=>{t.target!==e&&""!=t.target.getAttribute("data-close")||i()}),document.addEventListener("keydown",t=>{"Escape"===t.code&&e.classList.contains("show")&&i()})};var l=function(){const e=document.querySelector("[data-form]"),t=document.querySelector("[data-send]"),s=(document.querySelector(".modal"),"src/img/form/spinner.svg"),o="success",n="failure";e.addEventListener("submit",a=>{a.preventDefault();let r=document.createElement("img");r.src=s,r.style.cssText="\n                display: block;\n                margin: 0 auto;\n            ",t.style.display="none",e.insertAdjacentElement("afterend",r);const c=new FormData(e);function l(e){const t=document.querySelector(".modal__dialog");t.classList.add("hide");const s=document.createElement("div");s.classList.add("modal__dialog"),s.innerHTML=`\n                <div class="modal__content">\n                    <div class="modal__close" data-close>×</div>\n                    <div class="modal__title">${e}</div>\n                </div>\n            `,document.querySelector(".modal").append(s),setTimeout(()=>{s.remove(),t.classList.remove("hide"),i()},1e3)}(async(e,t)=>(await fetch(e,{method:"POST",headers:{"Content-type":"application/json"},body:t})).json())("mail.php",JSON.stringify(Object.fromEntries(c.entries()))).then(t=>{console.log(t),l(o),e.reset(),r.remove()}).catch(e=>{l(n),console.log(e)}).finally(()=>{e.reset(),t.style.display="",r.remove()})})};var d=function(){document.querySelectorAll("[data-link]").forEach(e=>{e.addEventListener("mouseover",()=>{e.classList.remove("header-bottom-menu__link"),e.classList.add("header-bottom-menu__link_active")}),e.addEventListener("mouseout",()=>{e.classList.remove("header-bottom-menu__link_active"),e.classList.add("header-bottom-menu__link")})}),document.querySelectorAll(".contacts__icon").forEach(e=>{e.addEventListener("mouseover",()=>{e.classList.add("size-up")}),e.addEventListener("mouseout",()=>{e.classList.remove("size-up")})})};var u=function(){window.addEventListener("scroll",()=>{window.pageYOffset<100||window.screen.width<1300?document.querySelector(".scrollUp").classList.add("hide-slow"):document.querySelector(".scrollUp").classList.remove("hide-slow"),window.screen.width<1300&&window.pageYOffset>650?document.querySelector(".scrollUpForMobile").classList.remove("scrollUpForMobile_hide"):window.screen.width<1300&&window.pageYOffset<650&&document.querySelector(".scrollUpForMobile").classList.add("scrollUpForMobile_hide"),window.pageYOffset>.038*document.documentElement.scrollHeight&&document.querySelector(".about__content-text").classList.add("activation"),window.pageYOffset>.128*document.documentElement.scrollHeight&&document.querySelector("#skills").classList.add("activation"),window.pageYOffset>.36*document.documentElement.scrollHeight&&document.querySelector(".portfolio__container").classList.add("activation"),window.pageYOffset>.75*document.documentElement.scrollHeight&&window.screen.width>1e3&&document.querySelector(".contacts-block").classList.add("activation"),window.pageYOffset>.725*document.documentElement.scrollHeight&&window.screen.width<1e3&&document.querySelector(".contacts-block").classList.add("activation")})};jQuery((function(e){e('a[href*="#"]').on("click.smoothscroll",(function(t){var s=this.hash,o=s.replace(/#/,""),n=e(this).attr("href").replace(/#.*/,"");if(!n||location.href.replace(/#.*/,"")==n){var a=""===o?e("body"):e(s+', a[name="'+o+'"]').first();a.length&&(t.preventDefault(),e("html, body").stop().animate({scrollTop:a.offset().top-0},400,"swing",(function(){window.location.hash=s})))}}))}));var m=jQuery;window.addEventListener("DOMContentLoaded",()=>{o(),r(),c(),l(),d(),u(),m()})}]);
//# sourceMappingURL=bundle.js.map