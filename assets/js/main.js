// MENU INTERACTION
const modalMenu = document.querySelector('.menuNav');
const openMenu = document.querySelector('.openMenu').addEventListener('click', () => {
    let menu = modalMenu;
    menu.style.top = "0";
});
const closeMenu = document.querySelector('.close').addEventListener('click', () => {
    let menu = modalMenu;
    menu.style.top = "-450%";
});;