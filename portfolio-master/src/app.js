const burgerBtn = document.querySelector(`.burger-btn`);
const navMenu = document.querySelector(`.nav-menu`);
const menuTxt = document.querySelector(`.menu-txt`)
let menuOpen = false;

burgerBtn.addEventListener(`click`, () => {
    if (!menuOpen){
        burgerBtn.classList.add(`active`);
        navMenu.classList.add(`open`)
        menuTxt.classList.add(`fading`)
        menuOpen = true
    } else {
        burgerBtn.classList.remove('active')
        navMenu.classList.remove(`open`)
        menuTxt.classList.remove(`fading`)
        menuOpen = false
    }
})